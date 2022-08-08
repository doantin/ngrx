export interface Article {
  id: number;
  title: String;
  description: String;


}

export interface ArticleState {
  list: Article[];
   error: string;
   isSucces: boolean;
   isLoading: boolean;


}
