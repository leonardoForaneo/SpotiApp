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
        'Bearer BQD8TRyeMn68GODSMcnWMgaIOPDWBu1ZbXNm28UnbrKPKM4wwRZH5syU_Wv949XNbwILQPAJBpDmsLp-fxM',
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
