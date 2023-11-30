import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { WorkflowsComponent } from './workflows/workflows.component';
import { MapComponent } from './map/map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TitleBarComponent, SubmissionsComponent, WorkflowsComponent, MapComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zendu-submissions';
}
