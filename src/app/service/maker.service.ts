import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopUpService } from '../service/pop-up.service';
import { AuthService } from '../service/auth.service';

import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MakerService {
  capitals: string = '/assets/data/usa-capitals.geojson';

  constructor(private http: HttpClient,
    private popupService: PopUpService,
    private auth: AuthService) { }

    makePymesMarkers(map: L.map, estado, municipio): void {
   
      this.auth.getPymes(estado, municipio).subscribe((res: any) => {
        for (const c of res) {
          const lat = parseFloat(c.latitud);
          const lon = parseFloat(c.longitud);
          const marker = L.marker([lat, lon],
            {
              icon: L.icon({
              iconSize: [ 25, 41 ],
              iconAnchor: [ 13, 41 ],
              iconUrl: 'assets/pymes.png',
              })
            }); 

          marker.bindPopup(this.popupService.makePymesPopup(c));
          marker.addTo(map);

          //.addTo(map);
        }
      });
    
  }

  makeCapitalMarkers(map: L.map): void {
  
          this.http.get(this.capitals).subscribe((res: any) => {
        for (const c of res.features) {
          const lat = c.geometry.coordinates[0];
          const lon = c.geometry.coordinates[1];
          const marker = L.marker([lon, lat]);

          marker.bindPopup(this.popupService.makeCapitalPopup(c.properties));
          marker.addTo(map);

          //.addTo(map);
        }
      });
    
  }







}
