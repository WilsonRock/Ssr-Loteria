import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IUsersTable } from '../../interfaces/users.interface';
import { UsersService } from '../../services/users.service';
import { Table } from 'primeng/table';
import { GamesService } from '../../services/games.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-assign-ticket',
  templateUrl: './assign-ticket.component.html',
  styleUrls: ['./assign-ticket.component.scss']
})
export class AssignTicketComponent implements OnInit {

  @ViewChild('filter') filter!: ElementRef;

  checked: boolean = false;
  
  loading: boolean = false;
  cols: any[] = [];
  users: any[] = [];
  visible: boolean = false;
  name: string = '';
  last_name: string = '';
  email: string = '';
  password: string = '';
  phone: string = '';
  dni: string = '';
  destroy: any;
  tikets: any;
  game_id: any;
  ticketSelect: any = [];
  user_selected: any;
  cantidadDeseada:any=0;


  constructor(private usersService: UsersService, private gameService: GamesService, private activatedrouter: ActivatedRoute, private messageService: MessageService) {
    this.activatedrouter.params.subscribe((params: any) => {
      this.game_id = params.id;
    });
  }

  ngOnInit() {
    this.getUsers();

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'firstName', header: 'Nombre(s)' },
      { field: 'lastName', header: 'Apellido(s)' },
      { field: 'dni', header: 'Documento' },
      { field: 'phone', header: 'Teléfono' },
      { field: 'email', header: 'Email' }
    ];

  }

  getUsers() {
    this.loading = true;
    this.users = [];
    this.usersService.getUsers().subscribe((res: any) => {
      res.data.forEach((element: any) => {
        this.users.push({
          id: element.id,
          firstName: element.nombres,
          lastName: element.apellidos,
          dni: element.documento,
          phone: element.telefono,
          email: element.email.toLowerCase()
        })
      });
      this.loading = false;
    })
  }

  showDialog(seller: any) {
    this.ticketSelect = [];
    this.user_selected = seller;
    this.getAllCombinations(seller);
    this.visible = true;
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

  getAllCombinations(seller: any) {
    this.gameService.getAllCombinations(this.game_id).subscribe((res: any) => {
      this.tikets = res.boletos;
      this.tikets.forEach((element: any) => {
        if(element.user === seller.id) element.checked = true;
      });
    })
  }

  selectTicket(value: any) {
    if (value.status !== 'vendido') {
      value.checked = !value.checked;
      console.log(value);//
      this.ticketSelect.push(value); // lo que hace es pushear al ticket select
    }
  }

  reserve() {
    let body = {
        asignados: this.ticketSelect.filter((checked: any) => checked.checked === true),
        vendedor_id: this.user_selected.id,
        juego_id: this.game_id
    }
    this.gameService.reserveTickets(body).subscribe(res => {
      this.visible = false;
      this.loading = false
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Boletos asignados correctamente' });
    }, error => {
      this.messageService.add({ severity: 'eror', summary: 'Success', detail: error.message });
    })
  }



  seleccionarTarjetasAleatorias(cantidad: number) {
    const tarjetasDisponibles = this.tikets.filter((ticket: { status: string; }) => ticket.status !== 'vendido' && ticket.status !== 'asignado');
    
    if (cantidad > tarjetasDisponibles.length) {
      // Display a SweetAlert2 error message
      this.visible = false;
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pueden seleccionar más tickets de los disponibles.',
        customClass: {
          container: 'sweetalert-container', // Add custom class here
        }
      });
      
      return; // Exit the function
    }
    
    const tarjetasSeleccionadas = [];
    while (tarjetasSeleccionadas.length < cantidad && tarjetasDisponibles.length > 0) {
      const randomIndex = Math.floor(Math.random() * tarjetasDisponibles.length);
      tarjetasSeleccionadas.push(tarjetasDisponibles.splice(randomIndex, 1)[0]);
    }
  
    tarjetasSeleccionadas.forEach(ticket => this.selectTicket(ticket));
  }
  
  Organizar() {
    console.log("organizador");
    // Ordena el arreglo de tarjetas para mostrar primero las seleccionadas
    this.tikets.sort((a: { checked: any; }, b: { checked: any; }) => {
      if (a.checked && !b.checked) {
        return -1;
      } else if (!a.checked && b.checked) {
        return 1;
      }
      return 0;
    });
    
    // Luego, ordena por la propiedad 'status'
    this.tikets.sort((a: { status: string; }, b: { status: any; }) => {
      return 0; // Mantener el orden si ambas tarjetas están seleccionadas o no
      return a.status.localeCompare(b.status);
    });
  } 
}
