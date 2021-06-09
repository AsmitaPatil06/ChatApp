import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-main',
  templateUrl: './chat-main.component.html',
  styleUrls: ['./chat-main.component.css']
})
export class ChatMainComponent implements OnInit {

  coversation;
  constructor() { }

  ngOnInit(): void {
  }

  onConversationSelected(conversations) {

    this.coversation = conversations;
  }
}
