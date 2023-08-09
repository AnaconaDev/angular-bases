import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: String = 'Ironman';
  public age: number = 45;

  get capitalizeName(): String {
    return this.name.toUpperCase();
  }

  get heroDescription(): String {
    return `${this.name} - ${this.age}`
  }

  changeHero(): void {
    this.name = 'Spiderman'
  }

  changeAge(): void {
    this.age = 26
  }

  resetForm(): void {
    this.name = 'Iroman'
    this.age = 45
  }
}
