import { Component } from '@angular/core';
import { InstagramIcon } from '../icons/instagram-icon/instagram-icon';
import { WhatsappIcon } from '../icons/whatsapp-icon/whatsapp-icon';
import { ThreePointsIcon } from '../icons/three-points-icon/three-points-icon';
import { ChatChooser } from '../../components/chat-chooser/chat-chooser';
import { ChatApp } from '../../features/chat/models/chat.interface';

@Component({
  selector: 'sidebar-connection',
  imports: [ChatChooser, InstagramIcon, WhatsappIcon, ThreePointsIcon],
  templateUrl: './sidebar-connection.html',
  styleUrl: './sidebar-connection.css'
})
export class SidebarConnection {

}
