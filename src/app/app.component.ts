import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'kid-front';
  userName ='';
  constructor(private sso:KeycloakService) { }
  ngOnInit(): void {
    this.sso.loadUserProfile().then(e=>{
      this.userName = e.username;
    })
  }
  logout(): void{
    this.sso.logout();
  }
}
