import { Component, OnInit } from '@angular/core';
import {ChatMessage} from "../models/chat-message.model";
import {UserService} from "../../services/user.service";
import {User} from "../models/user.model";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  friend: User;

  messages: ChatMessage[] = [
    {content: 'Perfect. What\'s on the agenda today?', sender: 'friend'},
    {content: 'It\'s currently 19°C, we have crisp blue skies with a beautiful sunshine. Wanna go running?', sender: 'user'},
    {content: 'Yeah sure, meet up at 6pm?', sender: 'friend'},
    {content: 'See ya @ neubad.', sender: 'user'},
  ]

  constructor(private userService: UserService) {
    this.friend = userService.getFriend();
  }

  ngOnInit() {}

}
