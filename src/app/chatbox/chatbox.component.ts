import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../user-service.service';
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

  constructor(private cs: UserService) { }

  ngOnInit(): void {

  }

  submitMsg() {

    // console.log(this.textMsg);
    let value = this.textMsg.trim();
    // this.message = '';

    if (value.length < 1) return false

    this.coversation.latestMessage = value;
    console.log(this.textMsg)
    console.log("id==>", this.coversation._id);
    this.coversation.messages.unshift(
      { id: 1, body: value, time: "9:21", me: true }
    )
  }

  // submitMsg() {

  //   if (this.coversation._id === null) { }
  //   else {
  //     let id = this.coversation._id;
  //     let value = this.textMsg.trim();

  //     this.cs.updateChat(value, id).subscribe((res) => {
  //       console.log("Post Value", res);
  //     })
  //   }
  // }
  addEmoji(event) {

    this.message += event.emoji.native;
    this.emojiPickerVisible = false;
  }

}
