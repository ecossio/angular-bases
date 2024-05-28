import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;
  public showButtonChangeHero: boolean = true;
  public showButtonChangeAge: boolean = true;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'spiderman';
    this.showButtonChangeHero = false;
  }

  changeAge(): void {
    this.age = 30;
    this.showButtonChangeAge = false;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
    this.showButtonChangeHero = true;
    this.showButtonChangeAge = true;
  }
}
