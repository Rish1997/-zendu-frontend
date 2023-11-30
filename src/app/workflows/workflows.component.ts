import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workflows',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workflows.component.html',
  styleUrl: './workflows.component.css'
})
export class WorkflowsComponent {

  @Input() workflows = [{
    workflow: "Requires Location",
    from: "denisgordiyenya@gmail.com",
    to: "denisgordiyenya@gmail.com",
    dueDate: "06 December",
    status: "Incomplete",
    statusFill: "#FF3D00"
  },{
    workflow: "Requires Location",
    from: "denisgordiyenya@gmail.com",
    to: "denisgordiyenya@gmail.com",
    dueDate: "06 December",
    status: "Low Risk",
    statusFill: "#53D86A"
  },{
    workflow: "Requires Location",
    from: "denisgordiyenya@gmail.com",
    to: "denisgordiyenya@gmail.com",
    dueDate: "06 December",
    status: "Incomplete",
    statusFill: "#FF3D00"
  },{
    workflow: "Requires Location",
    from: "denisgordiyenya@gmail.com",
    to: "denisgordiyenya@gmail.com",
    dueDate: "06 December",
    status: "Needs Review",
    statusFill: "#B8B9BC"
  }];
}
