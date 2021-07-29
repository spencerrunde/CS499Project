import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../shared/animal.service';
import { Animal } from '../../animal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-and-delete',
  templateUrl: './read-and-delete.component.html',
  styleUrls: ['./read-and-delete.component.css']
})
export class ReadAndDeleteComponent implements OnInit {
  public animals!: Animal[];

  constructor(private _animalService:AnimalService, private router:Router) { }

  ngOnInit() {
    this.readAnimals();
  }

  readAnimals(){
    this._animalService.readAnimals().subscribe(
      (data: any) => {
        console.log(data);
        this.animals = data['msg'];
      } ,
      error => {
        console.log(error);
      }
    )
  }

  updateAnimal(animal: any){
    this._animalService.setter(animal)
    this.router.navigate(['/CreateAndUpdate'])
  }

  deleteAnimal(animal: any){
    this._animalService.deleteAnimal(animal._id).subscribe(
      data => {
        this.animals.splice(this.animals.indexOf(animal), 1)
      } ,
      error => {
        console.log(error);
      }
    )
  }
}
