import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  constructor(private spotify: SpotifyService) {}
  artists: any[] = [];
  buscar(termino: string) {
    this.spotify.getArtista(termino).subscribe((data: any) => {
      this.artists = data;
    });
  }
}
