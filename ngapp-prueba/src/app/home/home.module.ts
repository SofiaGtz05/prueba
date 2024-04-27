import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './sections/footer/footer.component';
import { HeaderComponent } from './sections/header/header.component';
import { MainComponent } from './sections/main/main.component';
import { HomeComponent } from './home.component';
import { AppHomeRoutingModule } from './app-home-routing.module';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
  ],
  imports: [CommonModule, AppHomeRoutingModule, ToolbarModule],
})
export class HomeModule {}
