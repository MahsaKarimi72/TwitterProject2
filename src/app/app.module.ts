import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { LayoutModule } from './layout/layout.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BaseComponent } from './components/base-component/base-component';
import { AppInjector } from './service/app-injector.service';

@NgModule({
  declarations: [AppComponent, MainPageComponent, BaseComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    LayoutModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      easing: 'flyLeft',
      positionClass: 'toast-bottom-left',
      closeButton: true,
    }),
  ],
  exports: [MainPageComponent, BaseComponent, ToastrModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    AppInjector.injector = injector;
  }
}
