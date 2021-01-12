import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { MakerService } from '../service/maker.service';
import {Apollo, gql} from 'apollo-angular';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  private map;
  arrEstados = [];
  arrMunicipio = [];
  selectedEstado;
  selectedMunicipio;



  constructor(private auth: AuthService, private router: Router, private marker: MakerService, private apollo: Apollo) { }

  ngAfterViewInit(): void {
    this.initMap();
    //this.getEstados();
    this.graphqlEstado();
  }

  private initMap(): void {
    this.map = L.map('map', {
      // ,
      center: [ 24.57182,-101.1490422],
      zoom: 5
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 4,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
  }

  private getEstados()
  {
   this.auth.getEstados().subscribe((estados: any) => {
     this.arrEstados = estados;
    });
  
  }

  graphqlEstado(){
    this.apollo
    .watchQuery({
      query: gql`
        {
          estados{
            estado
          }
        }
      `,
    })
    .valueChanges.subscribe((result: any) => {
      this.arrEstados = result?.data?.estados;
    });

  }

  changeEstado(){
    this.auth.getMunicipios(this.selectedEstado).subscribe((municipios: any) => {
      this.arrMunicipio = municipios;
  
     });
  }

  search(){
    this.marker.makePymesMarkers(this.map,
      this.selectedEstado,
      this.selectedMunicipio
      );
  }

  exit(){
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por Favor ...',
    });
    Swal.showLoading();
    this.auth.logout();
    Swal.close();
    this.router.navigateByUrl('/');
  }

}