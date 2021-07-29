import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from '../../shared/animal.service';
import { Animal } from '../../animal';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private animalService:AnimalService, public authService: AuthService) { }

  ngOnInit(): void {
  }

  newAnimal(event:any){
    event.preventDefault();
    this.animalService.setter(new Animal());
    this.router.navigate(['/CreateAndUpdate']);
  }

}
