import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { AuthInterceptor } from './shared/auth.interceptor';

const DEBUG = false;

@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,

      // FlightBookingModule, // do not refereced lazy modules

      RouterModule.forRoot(APP_ROUTES, {
         preloadingStrategy: PreloadAllModules
            // Lade alle Lazy Module "wenn Zeit ist" (= nach Anwendungsstart)
      })
   ],
   providers: [
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      HomeComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

