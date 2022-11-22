import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  animacao: boolean = false;
  pergunta: string = '';
  resposta: string = '';
  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.solicitarCharada();
  }

  solicitarCharada(){
    this.animacao = false;
    const url = "http://lucasreno.kinghost.net/charada";
    this.http.get<any[]>(url).subscribe( charada => {
      this.pergunta = charada[0].pergunta;
      this.resposta = charada[0].resposta;
      this.animacao = true;
    });
  }
  Revelar() {

  }
  Gerar(){
    this.solicitarCharada;
  }



}