import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from 'src/app/shared/services/pokemon-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private apiService: PokemonApiService) {}

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    this.apiService.getAllPokemon().subscribe((res) => console.log(res));
  }
}
