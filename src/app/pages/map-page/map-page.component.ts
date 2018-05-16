import { Component, OnInit } from '@angular/core';
import { SightingService } from '../../services/sighting.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {

  lat: number = 41.38086598684855;
  lng: number = 2.1718597412109375;
  sightings: Array<any>;

  constructor(private sightingService: SightingService) { }

  ngOnInit() {
    this.sightingService.allSightings()
      .then((result) => {
        this.sightings = result.places;
      })
      .catch((err) => {
        console.error(err);
      })
    }
  



}
 // here talk with the service for getting all the sightings