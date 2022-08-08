import { createAction , props } from "@ngrx/store";
import { Article } from "../state/article.state";
import * as ArticleAction from "../action/article.action";
export const getPaginate  = createAction(
  '[Article] Get Paginate',
  props<{ page : number, perPage: number }>());

  export const getPaginateSucess = createAction(
    '[Article] Get Paginate Success' ,
    props<{list: Article[]} >()
  );

  export const getPaginateFail = createAction(
    '[Article] Get Paginate Fail',
    props<{error: String}  > ()
  );


