import { Material } from './../../core/model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MaterialService {

    materiaisUrl = 'http://localhost:8080/materiais';
  
    constructor(
      private http: HttpClient
    ) {}
  
    consultar(): Observable<any> {
      return this.http.get(this.materiaisUrl);
    }
  
    adicionar(material: Material): Observable<Material> { 
      const headers = new HttpHeaders().set( 'Content-Type', 'application/json' );
      headers.append( 'Content-Type', 'application/json' );

      return this.http.post<Material>(this.materiaisUrl, material, {headers: headers});
     }

     

   
}
