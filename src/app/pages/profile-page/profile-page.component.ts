import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  profile: object

  constructor(private route: ActivatedRoute, private profileService: ProfileService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.profileService.getOne(params.id)
          .then(data => this.profile = data);
      });
  }

}
