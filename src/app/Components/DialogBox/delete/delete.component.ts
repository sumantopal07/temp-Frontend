import { Component, OnInit } from '@angular/core';
import { OppurtunityService } from 'src/app/Services/oppurtunity.service';
import { MatDialogRef } from '@angular/material/dialog';
import { OppComponent } from '../../home/opp/opp.component';
import { NotificationService } from 'src/app/Services/notification.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  constructor(
    public oppService: OppurtunityService,
    public dialogRef: MatDialogRef<OppComponent>,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {}
  onDelete(): void {
    this.oppService.deleteOpps(this.oppService.getId()).subscribe(() => {});
    this.notificationService.success(
      'Row deleted successfully refresh if change not reflected'
    );
  }
}
