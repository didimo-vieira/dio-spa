import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceitasData } from '../home/receitas';
import { ItemLista } from '../item-lista/item-lista';

@Component({
  selector: 'spa-item-aberto',
  templateUrl: './item-aberto.component.html',
  styleUrls: ['./item-aberto.component.css']
})
export class ItemAbertoComponent implements OnInit {
  receita: ItemLista;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private data: ReceitasData) {

  }

  ngOnInit(): void {
    const id: string = this.activatedRoute.snapshot.params['id'];
    this.receita = this.data.getById(Number.parseInt(id));
  }

  voltar(): void {
    this.router.navigateByUrl('');
  }

}