import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: String[] = ['spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Dead Pool', 'Coloso']
  public deletedHero?: String;

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }

}
