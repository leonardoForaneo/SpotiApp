import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCxAB5iKaI3d-pIsrthijp6b5ks6KxKU6ErLcsQTt0RWZkBpLDSO6XuvVkRz2L50MC0bxPFF_FxOX7ebrY',
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {
      headers,
    });
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCxAB5iKaI3d-pIsrthijp6b5ks6KxKU6ErLcsQTt0RWZkBpLDSO6XuvVkRz2L50MC0bxPFF_FxOX7ebrY',
    });
    return this.http.get(
      `https://api.spotify.com/v1/search?query=${termino}&type=artist&offset=0&limit=15`,
      {
        headers,
      }
    );
  }
}
