import { Component, OnInit } from '@angular/core';
import { SightingService } from '../../services/sighting.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

  lat: number = 41.38086598684855;
  lng: number = 2.1718597412109375;
  size: number;
  type: string;

  constructor(private sightingService: SightingService) { }

  ngOnInit() {
  }

  mapClicked(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }

  submitForm() {
    const coordinates = [this.lat, this.lng];
    const newSighting = {
      coordinates,
      size: this.size,
      type: this.type
    }

    this.sightingService.createOne(newSighting)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error(err);
    })

  }

}
