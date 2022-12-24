import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PontuacaoService } from '../../services/pontuacao.service'
import { Pontuacao } from 'src/app/model/Pontuacao'
import { MensagemService} from 'src/app/services/mensagem.service'

@Component({
  selector: 'app-form-add-score',
  templateUrl: './form-add-score.component.html',
  styleUrls: ['./form-add-score.component.css']
})
export class FormAddScoreComponent implements OnInit {
  pontuacaoForm!: FormGroup;

  constructor(
    private pontuacaoService: PontuacaoService, 
    private mensagemService: MensagemService,
    private router: Router
  ){ }

  ngOnInit(): void{
    this.pontuacaoForm = new FormGroup({
      dt_Partida: new FormControl('', [Validators.required]),
      nr_pontuacao: new FormControl('', [Validators.required]),
      st_nome: new FormControl('', [Validators.required]),
    });
  }

  get dt_Partida(){
    return this.pontuacaoForm.get('dt_Partida')!;
  }

  get nr_pontuacao(){
    return this.pontuacaoForm.get('nr_pontuacao')!;
  }

  get st_nome(){
    return this.pontuacaoForm.get('st_nome')!;
  }

  async submit(){
    if(this.pontuacaoForm.invalid){
      return;
    }
    await this.pontuacaoService.createPontuacao(this.pontuacaoForm.value).subscribe();
    this.mensagemService.add('Pontuação adicionada com Sucesso!')    
    this.router.navigate(['/ranking']);
  }
}
