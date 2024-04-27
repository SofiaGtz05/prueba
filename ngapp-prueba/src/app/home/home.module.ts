import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/sections/footer/footer.component';
import { HeaderComponent } from '../components/sections/header/header.component';
import { MainComponent } from '../components/sections/main/main.component';
import { HomeComponent } from './home.component';
import { AppHomeRoutingModule } from './app-home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
  ],
  imports: [CommonModule, AppHomeRoutingModule],
})
export class HomeModule {}