import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from '../../shared/animal.service';
import { Animal } from '../../animal';

@Component({
  selector: 'app-create-and-update',
  templateUrl: './create-and-update.component.html',
  styleUrls: ['./create-and-update.component.css']
})
export class CreateAndUpdateComponent implements OnInit {
  public animal!: Animal;
  constructor(private animalService: AnimalService, private router: Router) { }

  ngOnInit() {
    this.animal = this.animalService.getter();
  }

  createAndUpdate() {
    if (this.animal._id == undefined) {
      this.animalService.createAnimal(this.animal).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['ReadAndDelete']);
        },
        error => {
          console.log(error);
        }
      )
    } else {
      this.animalService.updateAnimal(this.animal).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['ReadAndDelete']);
        },
        error => {
          console.log(error);
        }
      )
    }
  }
}
