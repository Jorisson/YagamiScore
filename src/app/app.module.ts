import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormAddScoreComponent } from './pages/form-add-score/form-add-score.component';
import { PageRankingComponent } from './pages/page-ranking/page-ranking.component';
import { HeaderComponent } from './pages/header/header.component';
import { PagePlayerComponent } from './pages/page-player/page-player.component';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MensagemComponent } from './pages/mensagem/mensagem.component';
import { BotaoComponent } from './components/botao/botao.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormAddScoreComponent,
    PageRankingComponent,
    HeaderComponent,
    PagePlayerComponent,
    MensagemComponent,
    BotaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule, FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
