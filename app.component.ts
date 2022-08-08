import { ArticleEffects } from './../effects/article.effects';
import { Article, ArticleState } from './ngrx/state/article.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { enterNumber, enterOperator } from './ngrx/action/caculator.action';
import { articleReducer } from './ngrx/reducer/article.reducer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  resCalculator$: Observable<string>;


  res = '0'

  constructor(private store: Store<{ count: number, calcultor: string, Article: ArticleState }>){

    this.resCalculator$ = store.select('calcultor');
    this.resCalculator$.subscribe((e:any)=>{
       this.res = e.currentNum
    })


  }
  clickNum(a:string){
    this.store.dispatch(enterNumber({number: a}))
  }
  clickOperator(a:string){
    this.store.dispatch(enterOperator({operator: a}))
  }
  Article$: Observable<Article[]>;


  loadArticle(){
    this.store.dispatch(ArticleEffects.getPaginate({
      page: 1,
      perPage: 10
    }));
  }
}


