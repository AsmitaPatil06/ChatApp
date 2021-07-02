export class Chat {

    _id: String;
    name: String;
    time: String;
    latestMessage: String;
    latestMessageRead: Boolean;
    messages: [{ id: Number, body: String, time: String, me: Boolean }]
}