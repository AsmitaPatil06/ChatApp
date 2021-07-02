import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-main',
  templateUrl: './chat-main.component.html',
  styleUrls: ['./chat-main.component.css']
})
export class ChatMainComponent implements OnInit {

  coversation;
  // main = "Asitaa";
  main;

  constructor() { }

  ngOnInit(): void {
  }

  onConversationSelected(conversations) {

    console.log("main", conversations);
    this.coversation = conversations;
    this.main = conversations.name;
    // console.log(this.currunt1);
  }

}
