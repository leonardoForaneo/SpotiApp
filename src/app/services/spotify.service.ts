import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBSwGv2rK1FWnmefVgjHbjQfeZbcNMhxLPfIRO01w0kn5g0Zjf7rJ6vd3t8u9Hhb8gmeAH9PiJGfaVz-jw',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data: any) => data['albums'].items)
    );
  }

  getArtista(termino: string) {
    return this.getQuery(
      `search?query=${termino}&type=artist&offset=0&limit=15`
    ).pipe(map((data: any) => data['artists'].items));
  }
}
