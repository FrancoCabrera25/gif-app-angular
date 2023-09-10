import { Component, Input } from '@angular/core';
import { Gif } from '../../interface/gifs.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() 
  public gif!: Gif;
}
