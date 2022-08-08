import { createReducer, on } from '@ngrx/store';
import { ArticleState } from '../state/article.state';
import * as ArticleAction from '../action/article.action';

const initialState: ArticleState = {
  list: [],
  error: '',
  isSucces: false,
  isLoading: false
};

export const articleReducer = createReducer(
  initialState,
  on(ArticleAction.getPaginate, (state) => (
    {
      ...state,
      isLoading: true
    })),
  on(ArticleAction.getPaginateSucess, (state) => (
    {
      ...state,
      isSucces: true,
      list: state.list
    })),
  on(ArticleAction.getPaginateFail, (state) => (
    {
      ...state,

      error: state.error
    })),
)
