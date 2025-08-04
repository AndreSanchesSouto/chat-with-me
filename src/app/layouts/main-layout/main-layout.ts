import { Component } from '@angular/core';
import { SidebarConnection } from '../../shared/sidebar-connection/sidebar-connection';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [SidebarConnection, RouterOutlet],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout {

}
