import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
// import { ServerComponent } from './server/server.component';
// import { ServersComponent } from './servers/servers.component';
// import { WarningAlertComponent } from './warning-alert/warning-alert.component';
// import { SuccessAlertComponent } from './success-alert/success-alert.component';
// import { Exercise1Component } from './exercise1/exercise1.component';
// import { Exercise2Component } from './exercise2/exercise2.component';
// import { Exercise3Component } from './exercise3/exercise3.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    // ServerComponent,
    // ServersComponent,
    // WarningAlertComponent,
    // SuccessAlertComponent,
    // Exercise1Component,
    // Exercise2Component,
    // Exercise3Component,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
