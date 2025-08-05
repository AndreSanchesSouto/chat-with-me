import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-three-points-icon',
  imports: [],
  templateUrl: './three-points-icon.html',
  styleUrl: './three-points-icon.css'
})
export class ThreePointsIcon {
  @Input() size: number | string = 24;
  @Input() color: string = "#FFFF";
}
