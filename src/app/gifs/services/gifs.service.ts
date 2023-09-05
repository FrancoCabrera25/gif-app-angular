import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interface/gifs.interface';

@Injectable({
    providedIn: 'root',
})
export class GifsService {
    private _tagsHistory: string[] = [];
    public gifsList: Gif[] = [];
    private apiKey: string = '8avblfQHd0GqPCICPHAOw5ZYrrvhw0uI';
    private baseUrl: string = `https://api.giphy.com/v1/gifs`;

    constructor(private http: HttpClient) {
        this.loadLocalStorage();
    }

    public get tagsHistory() {
        return [...this._tagsHistory];
    }

    public searchTag(tag: string) {
        if (tag.length === 0) return;

        this.organizeHistory(tag);

        const params = new HttpParams()
            .set('api_key', this.apiKey)
            .set('limit', '10')
            .set('q', tag);

        this.http
            .get<SearchResponse>(`${this.baseUrl}/search`, {
                params,
            })
            .subscribe((resp) => {
                this.gifsList = resp.data;
            });
    }

    private organizeHistory(tag: string): void {
        tag = tag.toLowerCase();

        if (this._tagsHistory.includes(tag)) {
            this._tagsHistory = this._tagsHistory.filter(
                (oldTag) => oldTag !== tag
            );
        }

        this._tagsHistory.unshift(tag);
        this._tagsHistory = this._tagsHistory.splice(0, 10);
        this.saveLocalStorage();
    }

    private saveLocalStorage(): void {
        localStorage.setItem('history', JSON.stringify(this._tagsHistory));
    }

    private loadLocalStorage(): void {
        if (!localStorage.getItem('history')) return;

        this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

        if(this._tagsHistory.length > 0){
            this.searchTag(this._tagsHistory[0])
        }
    }
}
