import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './sections/footer/footer.component';
import { HeaderComponent } from './sections/header/header.component';
import { MainComponent } from './sections/main/main.component';
import { HomeComponent } from './home.component';
import { AppHomeRoutingModule } from './app-home-routing.module';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { CardPokeComponent } from './components/card-poke/card-poke.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CardPokeComponent,
  ],
  imports: [CommonModule, AppHomeRoutingModule, ToolbarModule, CardModule],
})
export class HomeModule {}
