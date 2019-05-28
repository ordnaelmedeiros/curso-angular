import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public jogoEmAndamento: boolean = true;

  public encerrarJogo(tipo: string) :void {
    console.log(tipo);
    if (tipo=="vitoria") {
      alert("Você concluiu as traduções com sucesso");
    } else {
      alert("Você perdeu todas as tentativas");
      this.jogoEmAndamento = false;
    }
  }

}
