import { Component, OnInit } from '@angular/core';

import { Animal } from '../../shared/animal';
import { AnimalService } from '../../shared/animal.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private animalService: AnimalService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {}

  newAnimal(event: any) {
    event.preventDefault();
    this.animalService.setter(new Animal()); // Sets a new Animal to be created
    this.router.navigate(['/CreateAndUpdate']); // Navigates to Create page
  }
}
