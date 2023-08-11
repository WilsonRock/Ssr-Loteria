import { Component, OnInit, OnDestroy } from '@angular/core';
import { IUsersTable } from '../../interfaces/users.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
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

  constructor(private usersService: UsersService) {
    this.destroy = this.usersService.updateUsers$.subscribe(data => {
      if (data) {
        this.getUsers();
      }
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
      { field: 'email', header: 'Email' },
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
          email: element.email.toLowerCase()
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
}
