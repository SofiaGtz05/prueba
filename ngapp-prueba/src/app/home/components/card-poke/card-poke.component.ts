import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-poke',
  templateUrl: './card-poke.component.html',
  styleUrls: ['./card-poke.component.scss'],
})
export class CardPokeComponent {
  @Input() name!: string;
}
