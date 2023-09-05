import { Component, EventEmitter, Output } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {

    constructor(private gifsService: GifsService) {}

    get tags() {
        return this.gifsService.tagsHistory;
    }

    searchTag(tag: string) {
        this.gifsService.searchTag(tag);
    }
}
