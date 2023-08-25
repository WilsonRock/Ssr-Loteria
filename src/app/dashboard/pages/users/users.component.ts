import { Component, OnInit, OnDestroy } from '@angular/core';
import { IUsersTable } from '../../interfaces/users.interface';
import { UsersService } from '../../services/users.service';
import { Table } from 'primeng/table';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  visible1: boolean = false;
  loading: boolean = false;
  cols: any[] = [];
  users: IUsersTable[] = [];
  visible: boolean = false;
  name: string = '';
  last_name: string = '';
  email: string = '';
  password: string = '';
  phone: string = '';
  dni: string = '';
  destroy: any;
  config:any
  formData: any = {};

  constructor(private usersService: UsersService,private messageService: MessageService) {
    this.destroy = this.usersService.updateUsers$.subscribe(data => {
      if (data) {
        this.getUsers();
      }
    });
  }

  ngOnInit() {
    this.getUsers();

    this.cols = [// esto crea la vista que requiero
      { field: 'id', header: 'Id' },
      { field: 'firstName', header: 'Nombre(s)' },
      { field: 'lastName', header: 'Apellido(s)' },
      { field: 'dni', header: 'Documento' },
      { field: 'phone', header: 'Teléfono' },
      { field: 'email', header: 'Email' }
    ];
  }

  ngOnDestroy() {
    this.destroy.unsubscribe();
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
          email: element.email.toLowerCase(),
        })
      });
      this.loading = false;
    })
  }

  showDialog() {
    this.visible = true;
  }

  createSeller() {
    this.loading = true;
    this.usersService.createUser({
      nombres: this.name,
      apellidos: this.last_name,
      email: this.email.toLowerCase(),
      password: this.password,
      telefono: this.phone,
      documento: this.dni,
      tipo_usuario: 'vendedor'
    }).subscribe(res => {
      this.loading = false;
      this.visible = false;
      this.usersService.eventUpdateUsers(true);
    })
  }

  showEditDialog(raffle: any) {
    this.formData = '';
    this.loading = true;
    console.log("llama", raffle.email);
    this.visible1 = true;
  
    this.usersService.searchUser(raffle.email ).subscribe(
      (res: any) => {
        this.config = [];
      this.formData = res.data[0];
      console.log(  this.formData);
      this.loading = false;
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }
  
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
  clear(table: Table) {
    table.clear();
  //  this.filter.nativeElement.value = '';
  }
  updateValue(key: any, value: any) {
    console.log({key, value});
  }


  updateUser(raffle?: any) {
    this.loading=true;
    console.log(this.formData.id);
    this.usersService.updateUser(this.formData.id, this.formData).subscribe(
      response => {
        this.loading=false;
        this.visible1 = false;
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Usuario actualizado correctamente' });
        // Manejar la respuesta si es necesario
        console.log(response);
      },
      error => {
        this.loading=false;
        this.visible1 = true;
        this.messageService.add({ severity: 'eror', summary: 'Success', detail: error.message });
        // Manejar el error si ocurre
        console.error(error);
      }
    );
  }
}
