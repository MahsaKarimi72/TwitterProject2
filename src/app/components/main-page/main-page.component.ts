import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PostModel } from 'src/app/model/post.model';
import { v4 as uuid } from 'uuid';
import { BaseComponent } from '../base-component/base-component';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent extends BaseComponent implements OnInit {
  /**
   *  لیست پست ها
   */
  list: Array<PostModel> = [];

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.getPostList();
  }

  /**
   *  گرفتن لیست پستها
   */

  getPostList() {
    for (let i = 0; i < 10; i++) {
      let model: PostModel = new PostModel();
      model.Id = uuid();
      model.CreatorId = uuid();
      model.Like = false;
      model.LikeNumbers = 241000;
      model.CreateTime = 'few minuets go';
      if (i % 2 == 0) {
        model.CreatorName = 'Elon Musk';
        model.PosttType = 1;
        model.PostContent =
          'The Boring Company just raised $675M at a $5.675B valuation from A-list investors . Purpose is to recruit amazing people, scale up boring machine production & build thousands of miles of tunnels';
      } else {
        model.CreatorName = 'Android Developer';
        model.PosttType = 2;
        model.PostContent =
          'What are your thoughts about probable inflation rate over next few years?';
        model.PostImageUrl = '../../../assets/images/android-developer.png';
      }
      this.list.push(model);
    }
  }


}
