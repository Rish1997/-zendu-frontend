import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownComponent} from '../dropdown/dropdown.component';

@Component({
  selector: 'app-submissions',
  standalone: true,
  imports: [CommonModule, DropdownComponent],
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.css'
})
export class SubmissionsComponent {
  @Input() isMapChecked: boolean = false;

  check(value: string) {
    console.log("isMapChecked", this.isMapChecked);
    this.isMapChecked = value === "Map";
  }
}
