import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.scss']
})
export class LazyImageComponent {
 @Input() 
 public url!: string;

 @Input() 
 public alt!: string;

 public hasLoaded: boolean = false;


 onLoad(): void {
  setTimeout(() => {
    this.hasLoaded = true;
  }, 1000);

 }
}
