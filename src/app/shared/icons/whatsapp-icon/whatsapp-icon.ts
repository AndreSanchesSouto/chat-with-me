import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-whatsapp-icon',
  imports: [],
  templateUrl: './whatsapp-icon.html',
  styleUrl: './whatsapp-icon.css'
})
export class WhatsappIcon {
  @Input() size: number = 24;
  @Input() color: string = "#FFFF"
}
