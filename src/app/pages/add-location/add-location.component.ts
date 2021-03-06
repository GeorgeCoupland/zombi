import { Component, OnInit } from '@angular/core';
import { SightingService } from '../../services/sighting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {
  processing: boolean;
  feedbackEnabled: boolean;
  lat: number = 41.38086598684855;
  lng: number = 2.1718597412109375;
  size: string;
  type: string;

  constructor(private sightingService: SightingService, private router: Router) { }

  ngOnInit() {
  }

  mapClicked(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }

  submitForm(form) {
    this.feedbackEnabled = true;
    if (form.valid) {
      const coordinates = [this.lat, this.lng];
      const newSighting = {
        coordinates,
        size: this.size,
        type: this.type
      }
      this.processing = true;
      this.sightingService.createOne(newSighting)
      .then((result) => {
        console.log(result);
        this.router.navigate(["/map"])
      })
      .catch((err) => {
        this.processing = false;
        console.error(err);
      })
    }

  }

}
