import { Component, OnInit } from '@angular/core';

import { Animal } from '../../shared/animal';
import { AnimalService } from '../../shared/animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-and-delete',
  templateUrl: './read-and-delete.component.html',
  styleUrls: ['./read-and-delete.component.css'],
})
export class ReadAndDeleteComponent implements OnInit {
  public animals!: Animal[];

  constructor(private _animalService: AnimalService, private router: Router) {}

  ngOnInit() {
    this.readAnimals(); // Gets animal data on initialization
  }

  // Gets Animal data
  readAnimals() {
    this._animalService.readAnimals().subscribe(
      (data: any) => {
        console.log(data);
        this.animals = data['msg'];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Updates this animal
  updateAnimal(animal: any) {
    this._animalService.setter(animal);
    this.router.navigate(['/CreateAndUpdate']);
  }

  // Deletes this animal by ID
  deleteAnimal(animal: any) {
    this._animalService.deleteAnimal(animal._id).subscribe(
      (data) => {
        this.animals.splice(this.animals.indexOf(animal), 1); // Splices only this ONE animal
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
