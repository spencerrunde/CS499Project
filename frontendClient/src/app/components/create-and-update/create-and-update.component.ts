import { Component, OnInit } from '@angular/core';

import { Animal } from '../../shared/animal';
import { AnimalService } from '../../shared/animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-and-update',
  templateUrl: './create-and-update.component.html',
  styleUrls: ['./create-and-update.component.css'],
})
export class CreateAndUpdateComponent implements OnInit {
  public animal!: Animal;
  constructor(private animalService: AnimalService, private router: Router) {}

  ngOnInit() {
    this.animal = this.animalService.getter();
  }

  createAndUpdate() {
    if (this.animal._id == undefined) {
      // Creating a new animal entry if ID does not exist
      this.animalService.createAnimal(this.animal).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['ReadAndDelete']); // Navigating back to table route
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.animalService.updateAnimal(this.animal).subscribe(
        // Updating an animal entry if ID does exist
        (data) => {
          console.log(data);
          this.router.navigate(['ReadAndDelete']); // Navigating back to table route
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
