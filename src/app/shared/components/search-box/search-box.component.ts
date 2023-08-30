import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
    selector: 'app-search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
    @ViewChild('txtTagInput') tagInput!: ElementRef<HTMLInputElement>;

    constructor(private gifsService: GifsService) {}

    searchTag(): void {
        const newTag = this.tagInput.nativeElement.value;

        this.gifsService.searchTag(newTag);

        this.tagInput.nativeElement.value = '';
    }
}
