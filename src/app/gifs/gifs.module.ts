import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/homepage/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    HomePageComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[HomePageComponent]
})
export class GifsModule { }
