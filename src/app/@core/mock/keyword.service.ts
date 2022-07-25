import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { Keyword, KeywordData } from '../data/keyword';
// import { botReplies } from '../extra-components/chat/bot-replies';

@Injectable({
  providedIn: 'root'
})
export class KeywordService extends KeywordData {
  data = [{
    _id: 1,
    keyword: ['hello','hi','xin chào','chào',],
    script_id: 1,
  }, {
    _id: 2,
    keyword: ['tài liệu','file','thông tin',],
    script_id: 2,
  }]

  getKeywordData() {
    return this.data;
  }
}