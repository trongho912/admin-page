import { Observable } from 'rxjs';

export interface Keyword {
  _id: number;
  keyword: [string];
  script_id: number;
}

export abstract class KeywordData {
    abstract getKeywordData(): any[];
    // abstract getData(): Observable<Keyword>;
  }