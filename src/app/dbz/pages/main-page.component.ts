import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzSvc: DbzService) {}

  get characters(): Character[] {
    return [...this.dbzSvc.characters];
  }

  onNewCharacter(character: Character): void {
    this.dbzSvc.addCharacter(character);
  }

  onDeleteCharacter(id: string): void {
    this.dbzSvc.deleteCharacterById(id);
  }
}
