import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ApiService } from '../../services/api.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private api: ApiService,
    private message: MessageService
  ) { }
  login(){
    this.message.show('info', 'Login', 'Login functionality is not implemented yet.');
  }
}
