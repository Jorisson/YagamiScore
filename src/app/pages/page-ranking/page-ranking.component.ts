import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Pontuacao } from '../../model/Pontuacao'
import { PontuacaoService } from '../../services/pontuacao.service'

@Component({
  selector: 'app-page-ranking',
  templateUrl: './page-ranking.component.html',
  styleUrls: ['./page-ranking.component.css']
})
export class PageRankingComponent implements OnInit{
  ranking: Pontuacao[] = [];
  
  constructor(private pontuacaoService: PontuacaoService){}
  ngOnInit(): void{
    this.getPontuacao();
  }

  getPontuacao(): void{
    this.pontuacaoService.getAll().subscribe((ranking)=> (this.ranking = ranking));
  }
}
