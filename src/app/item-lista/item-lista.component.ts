import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemLista } from './item-lista';

@Component({
  selector: 'spa-item-lista',
  templateUrl: './item-lista.component.html',
  styleUrls: ['./item-lista.component.css']
})
export class ItemListaComponent implements OnInit {
  @Input() item: ItemLista = new ItemLista();
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }

  abrir(): void {
    this.router.navigateByUrl('/receita/' + this.item.id.toString());
  }

}
