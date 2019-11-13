import { Component } from '@angular/core';
import { Postagem } from './postagem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // constructor(
  //   public nome: string,
  //   public telefone: string,
  //   public email: string,
  //   public ocorrencia: string
  // ) {  }
  title = 'cipa-agora';
  submitted = false;

  model = new Postagem('', '', '', '');

  onSubmit() { this.submitted = true;
      console.log('foi submetido');

   }


}
