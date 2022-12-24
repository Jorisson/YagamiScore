import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {
  message: string = '';

  constructor() { }

  add(pMessage: string){
    this.message = pMessage;
    setTimeout(()=>{
      this.clear();
    }, 4000);
  }

  clear(){
    this.message = '';
  }
}
