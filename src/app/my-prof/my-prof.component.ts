import { Component, EventEmitter, OnInit, Output } from '@angular/core';

//import { UserService } from "../user-service.service";
import { UserService } from "../user-service.service";

import { Observable, Subscriber } from 'rxjs';
import { Chat } from '../chat.model';
@Component({
  selector: 'app-my-prof',
  templateUrl: './my-prof.component.html',
  styleUrls: ['./my-prof.component.css']
})
export class MyProfComponent implements OnInit {

  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();


  searchText: string;
  conversations: any;

  chat: any;
  constructor(private cs: UserService) { }
  // conversations = [

  //   {
  //     name: "Lina Roy", time: "8:22", latestMessage: "Thank You", latestMessageRead: false,
  //     messages: [
  //       { id: 1, body: "hello world", time: "9:21", me: true },
  //       { id: 2, body: "How are u", time: "9:21", me: false },
  //       { id: 3, body: "I am fine Thanks", time: "9:21", me: true },
  //       { id: 4, body: "Glad to hear that", time: "9:21", me: false },
  //       { id: 5, body: "Glad to hear that", time: "9:21", me: false },
  //       { id: 6, body: "Glad to hear that", time: "9:21", me: false },
  //       { id: 7, body: "hello world", time: "9:21", me: true },
  //       { id: 8, body: "How are u", time: "9:21", me: false },
  //       { id: 9, body: "I am fine Thanks", time: "9:21", me: true },
  //     ]
  //   },

  //   {
  //     name: "David", time: "8:21", latestMessage: "Good Morning", latestMessageRead: true,
  //     messages: [
  //       { id: 1, body: "hello world", time: "9:21", me: true },
  //       { id: 2, body: "How are u", time: "9:21", me: false },
  //       { id: 3, body: "I am fine Thanks", time: "9:21", me: true },
  //       { id: 4, body: "Glad to hear that", time: "9:21", me: false },
  //     ]
  //   },


  //   {
  //     name: "Paul rish", time: "8:22", latestMessage: "Hii!!", latestMessageRead: false,
  //     messages: [
  //       { id: 1, body: "hello world", time: "9:21", me: true },
  //       { id: 2, body: "How are u", time: "9:21", me: false },
  //       { id: 3, body: "I am fine Thanks", time: "9:21", me: true },
  //       { id: 4, body: "Glad to hear that", time: "9:21", me: false },
  //     ]
  //   },

  //   {
  //     name: "David", time: "8:21", latestMessage: "Ok", latestMessageRead: false,
  //     messages: [
  //       { id: 1, body: "hello world", time: "9:21", me: true },
  //       { id: 2, body: "How are u", time: "9:21", me: false },
  //       { id: 3, body: "I am fine Thanks", time: "9:21", me: true },
  //       { id: 4, body: "Glad to hear that", time: "9:21", me: false },
  //     ]
  //   },

  //   {
  //     name: "Jessica", time: "8:22", latestMessage: "H r u ", latestMessageRead: true,
  //     messages: [
  //       { id: 1, body: "hello world", time: "9:21", me: true },
  //       { id: 2, body: "How are u", time: "9:21", me: false },
  //       { id: 3, body: "I am fine Thanks", time: "9:21", me: true },
  //       { id: 4, body: "Glad to hear that", time: "9:21", me: false },
  //     ]
  //   },

  //   {
  //     name: "John Doe", time: "8:21", latestMessage: "Good Morning", latestMessageRead: false,
  //     messages: [
  //       { id: 1, body: "hello world", time: "9:21", me: true },
  //       { id: 2, body: "How are u", time: "9:21", me: false },
  //       { id: 3, body: "I am fine Thanks", time: "9:21", me: true },
  //       { id: 4, body: "Glad to hear that", time: "9:21", me: false },
  //     ]
  //   },

  //   {
  //     name: "Eria", time: "8:22", latestMessage: "Thank You", latestMessageRead: false,
  //     messages: [
  //       { id: 1, body: "hello world", time: "9:21", me: true },
  //       { id: 2, body: "How are u", time: "9:21", me: false },
  //       { id: 3, body: "I am fine Thanks", time: "9:21", me: true },
  //       { id: 4, body: "Glad to hear that", time: "9:21", me: false },
  //     ]
  //   },

  //   {
  //     name: "Denis", time: "8:21", latestMessage: "Good Morning", latestMessageRead: true,
  //     messages: [
  //       { id: 1, body: "hello", time: "9:21", me: true },
  //       { id: 2, body: "How are u", time: "9:21", me: false },
  //       { id: 3, body: "I am fine Thanks!!", time: "9:21", me: true },
  //       { id: 4, body: "Glad to hear that", time: "9:21", me: false },
  //     ]
  //   },

  //   {
  //     name: "Lina Roy", time: "8:22", latestMessage: "Thank You", latestMessageRead: false,
  //     messages: [
  //       { id: 1, body: "Hii", time: "9:21", me: true },
  //       { id: 2, body: "H r u", time: "9:21", me: false },
  //       { id: 3, body: "I am fine Thanks", time: "9:21", me: true },
  //       { id: 4, body: "Glad to hear that", time: "9:21", me: false },
  //     ]
  //   },
  //   {
  //     name: "David", time: "8:21", latestMessage: "Good Morning", latestMessageRead: false,
  //     messages: [

  //       { id: 1, body: "hello world", time: "9:21", me: true },
  //       { id: 2, body: "How are u", time: "9:21", me: false },
  //       { id: 3, body: "I am fine Thanks", time: "9:21", me: true },
  //       { id: 4, body: "Glad to hear that", time: "9:21", me: false },
  //     ]
  //   },
  //   {
  //     name: "David", time: "8:21", latestMessage: "Good Morning", latestMessageRead: false,
  //     messages: [

  //       { id: 1, body: "hello world", time: "9:21", me: true },
  //       { id: 2, body: "How are u", time: "9:21", me: false },
  //       { id: 3, body: "I am fine Thanks", time: "9:21", me: true },
  //       { id: 4, body: "Glad to hear that", time: "9:21", me: false },
  //     ]
  //   },
  //   {
  //     name: "Lina Roy", time: "8:22", latestMessage: "Thank You", latestMessageRead: true,
  //     messages: [

  //       { id: 1, body: "hello world", time: "9:21", me: true },
  //       { id: 2, body: "How are u", time: "9:21", me: false },
  //       { id: 3, body: "I am fine Thanks", time: "9:21", me: true },
  //       { id: 4, body: "Glad to hear that", time: "9:21", me: false },
  //     ]
  //   },
  //   {
  //     name: "David", time: "8:21", latestMessage: "Good Morning", latestMessageRead: true,
  //     messages: [

  //       { id: 1, body: "hello world", time: "9:21", me: true },
  //       { id: 2, body: "How are u", time: "9:21", me: false },
  //       { id: 3, body: "I am fine Thanks", time: "9:21", me: true },
  //       { id: 4, body: "Glad to hear that", time: "9:21", me: false },
  //     ]
  //   },
  //   {
  //     name: "Lina Roy", time: "8:22", latestMessage: "Thank You", latestMessageRead: true,
  //     messages: [

  //       { id: 1, body: "hello world", time: "9:21", me: true },
  //       { id: 2, body: "How are u", time: "9:21", me: false },
  //       { id: 3, body: "I am fine Thanks", time: "9:21", me: true },
  //       { id: 4, body: "Glad to hear that", time: "9:21", me: false },
  //     ]
  //   },
  //   {
  //     name: "David", time: "8:21", latestMessage: "Good Morning", latestMessageRead: false,
  //     messages: [

  //       { id: 1, body: "hello world", time: "9:21", me: true },
  //       { id: 2, body: "How are u", time: "9:21", me: false },
  //       { id: 3, body: "I am fine Thanks", time: "9:21", me: true },
  //       { id: 4, body: "Glad to hear that", time: "9:21", me: false },
  //     ]
  //   },
  //   {
  //     name: "Lina Roy", time: "8:22", latestMessage: "Thank You", latestMessageRead: true,
  //     messages: [

  //       { id: 1, body: "hello world", time: "9:21", me: true },
  //       { id: 2, body: "How are u", time: "9:21", me: false },
  //       { id: 3, body: "I am fine Thanks", time: "9:21", me: true },
  //       { id: 4, body: "Glad to hear that", time: "9:21", me: false },
  //     ]
  //   },
  //   {
  //     name: "David", time: "8:21", latestMessage: "Good Morning", latestMessageRead: true,
  //     messages: [

  //       { id: 1, body: "hello world", time: "9:21", me: true },
  //       { id: 2, body: "How are u", time: "9:21", me: false },
  //       { id: 3, body: "I am fine Thanks", time: "9:21", me: true },
  //       { id: 4, body: "Glad to hear that", time: "9:21", me: false },
  //     ]
  //   },
  //   {
  //     name: "Lina Roy", time: "8:22", latestMessage: "Thank You", latestMessageRead: true,
  //     messages: [

  //       { id: 1, body: "hello world", time: "9:21", me: true },
  //       { id: 2, body: "How are u", time: "9:21", me: false },
  //       { id: 3, body: "I am fine Thanks", time: "9:21", me: true },
  //       { id: 4, body: "Glad to hear that", time: "9:21", me: false },
  //     ]
  //   },

  // ];

  ngOnInit(): void {

    this.getChat();
  }

  getChat() {
    this.cs.getChat().subscribe((response) => {
      this.conversations = response;
      console.log("All Chat from backend", this.conversations);
    });
  }

  get filteredConversation() {

    return this.conversations.filter((conversation) => {
      return conversation.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        conversation.latestMessage.toLowerCase().includes(this.searchText.toLowerCase());

    })
  }

  //  constructor() { }



}
