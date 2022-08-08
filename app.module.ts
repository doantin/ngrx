import { ArticleEffects } from './../effects/article.effects';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx/reducer/counter.reducer';
import { MyComponentComponent } from './tang/my-component/my-component.component';
import { caculatorReducer } from './ngrx/reducer/calculator.reducer';
import { EffectsModule } from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ count: counterReducer, calcultor: caculatorReducer }, {}),
    EffectsModule.forRoot([ArticleEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
