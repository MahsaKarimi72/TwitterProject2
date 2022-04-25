import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/components/base-component/base-component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends BaseComponent implements OnInit {
  search: string;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.search = '# Explore';
  }
}
