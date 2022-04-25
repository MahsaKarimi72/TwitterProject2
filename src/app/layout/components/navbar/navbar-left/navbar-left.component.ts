import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/components/base-component/base-component';
import { ProfileModel } from 'src/app/model/profile.model';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss'],
})
export class NavbarLeftComponent extends BaseComponent implements OnInit {
  /**
   *  مدل پروفایل کاربر
   */
  model: ProfileModel = new ProfileModel();

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.getUserProfile();
  }

  /**
   *  دریافت مدل پروفایل کاربر
   */

  getUserProfile() {
    this.model.FirstName = 'Gal';
    this.model.LastName = 'Gadot';
    this.model.UserName = 'GalGadot';
    this.model.Bio = 'instagram.com/gal_gadot';
    this.model.FollowerNumber = 3000000;
    this.model.FollowingNumber = 162;
  }
}
