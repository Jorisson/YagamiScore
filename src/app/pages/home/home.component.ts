import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ButtonJ = {
    name: "Jogar",
    route: "/"
  }
  ButtonC = {
    name: "Cadastrar Pontos",
    route: "/score"
  }
  ButtonR= {
  name:"Ranking",
  route: "/ranking"
  }

}
