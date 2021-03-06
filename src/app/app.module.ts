import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {FotoModule} from './foto/foto.module'
import { HttpClientModule } from '@angular/common/http';
import { PainelModule } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { roteamento } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FotoModule,
    PainelModule,
    roteamento
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
