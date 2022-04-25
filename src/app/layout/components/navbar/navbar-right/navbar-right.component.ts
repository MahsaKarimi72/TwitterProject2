import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BaseComponent } from 'src/app/components/base-component/base-component';
import { SuggestionModel } from 'src/app/model/suggestion.model';

@Component({
  selector: 'app-navbar-right',
  templateUrl: './navbar-right.component.html',
  styleUrls: ['./navbar-right.component.scss'],
})
export class NavbarRightComponent extends BaseComponent implements OnInit {
  /**
   *  لیست پیشنهادات
   */
  list: Array<SuggestionModel> = [];

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.getSuggestion();
  }

  /**
   *  گرفتن لیست پیشنهادات
   */
  getSuggestion() {
    let model: SuggestionModel = new SuggestionModel();
    model.UserName = '#Angular Developer';
    model.FollowingNumber = 24000000;
    for (let i = 0; i < 5; i++) {
      this.list.push(model);
    }
  }


}
