import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  loading: boolean = false;
  constructor(private spotify: SpotifyService) {}
  artists: any[] = [];

  buscar(termino: string) {
    this.loading = true;
    this.spotify.getArtista(termino).subscribe((data: any) => {
      this.artists = data;
      this.loading = false;
    });
  }
}
