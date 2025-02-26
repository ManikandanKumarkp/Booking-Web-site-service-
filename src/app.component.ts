import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
      AppComponent
        ],
          imports: [
              BrowserModule,
                  HttpClientModule
                    ],
                      providers: [DataService],
                        bootstrap: [AppComponent]
                        })
                        export class AppModule { }