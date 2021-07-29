import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Animal } from '../animal';

@Injectable()

export class AnimalService {
  private animal!: Animal;

    private baseUri:string="http://localhost:3000";
    private headers = new HttpHeaders().set('Content-Type', 'application/json');
    constructor(private http:HttpClient) { }
  
    createAnimal(animal: Animal){
      return this.http.post(this.baseUri+'/create', animal, {headers:this.headers});
    }
  
    readAnimals(){
      return this.http.get(this.baseUri+'/read', {headers:this.headers});
    }
  
    updateAnimal(animal: Animal){
      return this.http.put(this.baseUri+'/update', animal, {headers:this.headers});
    }
  
    deleteAnimal(id:string){
      return this.http.delete(this.baseUri+'/delete/'+id, {headers:this.headers});
    }

    setter(animal:Animal) {
      this.animal=animal;
    }

    getter(){
      return this.animal;
    }
}