import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppInjector } from 'src/app/service/app-injector.service';

@Component({
  selector: 'app-base-component',
  template: ` no-ui] `,
})
export class BaseComponent implements OnInit {
  public toastr: ToastrService;
  constructor() {
    this.toastr = AppInjector.injector.get(ToastrService);
  }

  ngOnInit(): void {}

  /**
   * نمایش پیغام
   * @param {string} button  نام دکمه کلیک شده
   */
  showToast(button: string) {
    this.toastr.info('', 'You press ' + button);
  }
}
