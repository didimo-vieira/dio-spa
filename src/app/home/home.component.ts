import { Component, Input, OnInit } from '@angular/core';
import { ItemLista } from '../item-lista/item-lista';
import { ReceitasData } from './receitas';


@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _filtro: string;
  filtrados: ItemLista[] = [];

  constructor(private dados: ReceitasData) { }

  ngOnInit(): void {
    this._filtro = '';
    this.filtrados = this.dados.getAll();
    this.filtrar();
  }

  filtrar(): void {
    this.filtrados = this.dados.getAll().filter(
      (receita: ItemLista) => {
        return (receita.titulo.toLowerCase().indexOf(this._filtro.toLowerCase()) > -1)
        ||
        (receita.categoria.toLowerCase().indexOf(this._filtro.toLowerCase()) > -1)
      }
    ).sort((a, b) => {
      let ordem = 0;
      if (a.titulo < b.titulo) {
        ordem = -1;
      } else if (a.titulo > b.titulo){
        ordem = 1;
      } else {
        ordem = 0;
      }
      return ordem
    });
  }

  public set filtro(value: string){
    this._filtro = value;
    this.filtrar();
  }

  public get filtro(): string {
    return this._filtro;
  }

}