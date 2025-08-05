import { Component, Input, Type } from '@angular/core';
import { ChatApp } from '../../features/chat/models/chat.interface';

@Component({
  selector: 'app-chat-chooser',
  standalone: true,
  imports: [ ],
  templateUrl: './chat-chooser.html',
  styleUrl: './chat-chooser.css'
})
export class ChatChooser {
  @Input() iconComponent!: Type<any>;
  @Input() name!: string;
}
