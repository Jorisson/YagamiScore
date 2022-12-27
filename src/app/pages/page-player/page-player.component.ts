import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faClose} from '@fortawesome/free-solid-svg-icons'

import { Player } from 'src/app/model/Player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-page-player',
  templateUrl: './page-player.component.html',
  styleUrls: ['./page-player.component.css']
})
export class PagePlayerComponent {
  faClose = faClose;
  st_nome!: string;
  player!: Player;
  player1 = {
    name: "",
    nr_partidas: 1,
    md_pontuacao: 2,
    maior_pontuacao: 3,
    menor_pontuacao: 4,
    qtd_recorde: 5,
    tempo_jogo: 6
  };
  private sub: any;

  constructor(
    private route: ActivatedRoute, 
    private playerService: PlayerService) {}
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.st_nome = params['name'];
    });
    this.getPlayer();
  }

  getPlayer(): void{
    this.playerService.getAll(this.st_nome).subscribe((player)=> (this.player = player));
  }

}
