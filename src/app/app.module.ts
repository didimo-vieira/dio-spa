import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule }   from '@angular/forms';
import { ItemListaComponent } from './item-lista/item-lista.component';
import { ItemAbertoComponent } from './item-aberto/item-aberto.component';
import { ReceitasData } from './home/receitas';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemListaComponent,
    ItemAbertoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [ReceitasData],
  bootstrap: [AppComponent]
})
export class AppModule { }
