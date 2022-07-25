import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ScriptService extends BaseService {
  constructor(
    apollo: Apollo,
    httpService: HttpClient,
  ) {
    super(apollo, httpService);
  }

  // data = [
  //   {
  //     _id: 1,
  //     parent_id: 0,
  //     description: 'Welcome script',
  //     messages: [{
  //         sender: 'bot',
  //         type: 'text',
  //         content: 'Xin chào, tôi có thể giúp gì cho bạn',
  //     },{
  //         sender: 'bot',
  //         type: 'text',
  //         content: 'Xin chào, tôi có thể giúp gì cho bạn',
  //     },{
  //         sender: 'bot',
  //         type: 'text',
  //         content: 'Xin chào, tôi có thể giúp gì cho bạn',
  //     }]
  //   }, 
  //   {
  //     _id: 2,
  //     parent_id: 1,
  //     description: 'Finding info script',
  //     messages: [{
  //         sender: 'bot',
  //         type: 'text',
  //         content: 'Xin chào, tôi có thể giúp gì cho bạn',
  //     },{
  //         sender: 'bot',
  //         type: 'text',
  //         content: 'Xin chào, tôi có thể giúp gì cho bạn',
  //     },{
  //         sender: 'bot',
  //         type: 'text',
  //         content: 'Xin chào, tôi có thể giúp gì cho bạn',
  //     }]
  //   }
  // ];

  getScriptData = async() => {
    const result = await this.apollo
      .query({
        query: gql `
        {
          biz_scripts {
            _id
            # parent_id
            description
            messages
          }
        } `
      })
      .toPromise();
    return result;
  }

  addScriptData = async(description: string) => {
    return await this.apollo
      .mutate({
        mutation: gql `
          mutation{
            createBiz_script (
              input: {
                description: "${description}",
              }
            ){
              _id
            } 
          } `
      })
      .toPromise();
  }
  
  removeScriptData = async (id: string) => {
    return await this.apollo
      .mutate({
        mutation: gql `
          mutation{
            removeBiz_script (
              id: "${id}"
            ){
              description
            }
          }`
      })
      .toPromise();
  }

  updateScriptData = async (id: string, 
                            description: string,
                            messages: [string],
                            parent_id: string ) => {
    return await this.apollo
      .mutate({
        mutation: gql `
          mutation{
            updateBiz_script (
              input: {
                _id: "${id}",
                description: "${description}",
                messages: "${messages}",
                parent_id: "${parent_id}",
              }
            )
          }`
      })
      .toPromise();
  }
}
