import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  @Input() coversation;
  emojiPickerVisible;
  message = '';


  // messages = [];
  public textMsg: string;

  constructor() { }

  ngOnInit(): void {
  }

  submitMsg() {

    console.log(this.textMsg);
    let value = this.textMsg.trim();
    this.message = '';

    if (value.length < 1) return false

    this.coversation.latestMessage = value;
    this.coversation.messages.unshift(
      { id: 1, body: value, time: "9:21", me: true }
    )
  }
  // submitMsg() {

  //   console.log(this.textMsg);
  //   let value = this.textMsg.trim();
  //   this.message = '';

  //   if (value.length < 1) return false

  //   this.coversation.latestMessage = value;
  //   this.httpClient.post('http://localhost:3000/chatmsg', value).subscribe(res => {
  //   });

  // }


  addEmoji(event) {

    this.message += event.emoji.native;
    this.emojiPickerVisible = false;
  }

}
