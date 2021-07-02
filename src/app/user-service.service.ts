import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chat } from "../app/chat.model";


@Injectable()
export class UserService {

  selectedChat: Chat;
  chats: Chat[];

  baseUrl = 'http://127.0.0.1:4000/chatmsgs';
  constructor(private _http: HttpClient) { }

  getChat() {
    return this._http.get(`${this.baseUrl}`)
  }

  // submitChat(data) {
  //   console.log("id ==>", data.id)
  //   // `${baseUrl}/product/${product.id}`
  //   return this._http.post('http://127.0.0.1:4000/chatmsgs', data)
  // }
  updateChat(data, id) {

    // return this._http.put('http://127.0.0.1:4000/chatmsgs', data);
    return this._http.put(`${this.baseUrl}`, { "id": id, "latestMessage": data, "time": "9:21", "me": true });
  }




}
