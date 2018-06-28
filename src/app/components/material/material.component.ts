import { MaterialService } from './material.service';
import { Material, Setor, Categoria } from './../../core/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {

  categorias = [];
  materiais:Array<Material> = [];
  material = new Material();
  
 categoria : Categoria[] =[
   
 ]

  constructor(private materiaisservice : MaterialService) { }
  
  ngOnInit() {
   this.carregarMateriais();
  }
  
  adicionar(){
    this.materiaisservice.adicionar( this.material).subscribe(
      response => {
        this.carregarMateriais();
      },
      error => console.error(error));
    }

  carregarMateriais(){
    this.materiaisservice.consultar().subscribe(response => this.materiais = response);
  }
  }