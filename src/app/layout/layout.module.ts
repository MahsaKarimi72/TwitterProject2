import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { RouterModule } from '@angular/router';
import { NavbarLeftComponent } from './components/navbar/navbar-left/navbar-left.component';
import { NavbarRightComponent } from './components/navbar/navbar-right/navbar-right.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    NavbarLeftComponent,
    NavbarRightComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    NavbarLeftComponent,
    NavbarRightComponent,
  ],
})
export class LayoutModule {}
