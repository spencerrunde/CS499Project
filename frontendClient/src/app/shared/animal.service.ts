import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Animal } from './animal';
import { Injectable } from '@angular/core';

@Injectable()
export class AnimalService {
  private animal!: Animal;

  private baseUri: string = 'http://localhost:3000'; // Defining base uri for routes
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  // POST function to create a new animal
  createAnimal(animal: Animal) {
    return this.http.post(this.baseUri + '/create', animal, {
      headers: this.headers,
    });
  }

  // GET function for animals
  readAnimals() {
    return this.http.get(this.baseUri + '/read', { headers: this.headers });
  }

  // PUT function to update animals
  updateAnimal(animal: Animal) {
    return this.http.put(this.baseUri + '/update', animal, {
      headers: this.headers,
    });
  }

  // DELETE function to remove an animal by ID
  deleteAnimal(id: string) {
    return this.http.delete(this.baseUri + '/delete/' + id, {
      headers: this.headers,
    });
  }

  // Setter function
  setter(animal: Animal) {
    this.animal = animal;
  }

  // Getter function
  getter() {
    return this.animal;
  }
}
