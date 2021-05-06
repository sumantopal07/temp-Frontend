import { Component, OnInit, Inject } from '@angular/core';
import { OppurtunityService } from 'src/app/Services/oppurtunity.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/Services/notification.service';
import { OppComponent } from '../../home/opp/opp.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-opp',
  templateUrl: './add-opp.component.html',
  styleUrls: ['./add-opp.component.css'],
})
export class AddOppComponent implements OnInit {
  // title: string;
  // dId: any = 0;
  // constructor(
  //   public oppService: OppurtunityService,
  //   public dialogRef: MatDialogRef<OppComponent>,
  //   private notificationService: NotificationService,
  //   @Inject(MAT_DIALOG_DATA) data
  // ) {
  //   this.title = data.title;
  //   this.dId = data.id;
  // }

  // locations: string[] = [];

  // skills: string[] = [];
  ngOnInit(): void {
    // this.getLocs();
    // //this.getInsti();
    // this.getSkills();
  }
  // public getLocs(): void {
  //    this.locations = ['Pune', 'Chennai', 'Bangalore', 'Mumbai'];
  // }
  // public getSkills(): void {
  //   this.skills = ['Angular', 'Python', 'Spring', '.NET', 'DevOps'];

  // }
  // public objectComparisonFunction = function(option, value): boolean {
  //   return option.id === value.id;
  // };
  // onClear() {
  //   this.oppService.form.reset();
  //   this.oppService.initializeFormGroup();
  // }
  // onSubmit() {
  //   // if (this.oppService.form.valid) {
  //   //   if (!this.oppService.form.get('$key').value) {
  //   //     console.log('nokey');
  //   //     this.oppService
  //   //       .addGrads(this.oppService.form.value)
  //   //       .subscribe((res) => {
  //   //         console.log(res);
  //   //       });
  //   //     this.notificationService.success(
  //   //       'Added successfully Refresh Page if Change not reflected'
  //   //     );
  //   //     this.onClose();
  //   //   } else {
  //   //     console.log('key');
  //   //     this.oppService
  //   //       .updateGrads(this.oppService.form.value)
  //   //       .subscribe((res) => {
  //   //         console.log(res);
  //   //       });
  //   //     this.oppService.form.reset();
  //   //     this.oppService.initializeFormGroup();
  //   //     this.notificationService.success(
  //   //       'Updated successfully Refresh Page if Change not reflected'
  //   //     );
  //   //     this.onClose();
  //   //   }
  //   // }
  // }

  // onClose() {
  //   this.oppService.form.reset();
  //   this.oppService.initializeFormGroup();
  //   this.dialogRef.close();
  // }
}
