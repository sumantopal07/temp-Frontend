import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {AfterViewInit, ViewChild} from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { OppurtunityService } from 'src/app/Services/oppurtunity.service';
import Opp from '../../../Models/OppModel.model';

@Component({
  selector: 'app-opp',
  templateUrl: './opp.component.html',
  styleUrls: ['./opp.component.css'],
})
export class OppComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'location',
    'skills',
    'description',
    'client',
    'actions',
  ];
  opps: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  searchKey: String;

  constructor( private dialog: MatDialog, private oppService: OppurtunityService) {}

  ngOnInit(): void {
    this.oppService.getOpps().subscribe(
      (response: Opp[]) => {
        console.log(response);
        this.opps = new MatTableDataSource(response);
        this.opps.sort = this.sort;
        this.opps.paginator = this.paginator;
        this.opps.filterPredicate = (data: any, filter) => {
          console.log(filter);
          const dataStr = JSON.stringify(data).toLowerCase();
          return dataStr.indexOf(filter) !== -1;
        };
      },
      (err: HttpErrorResponse) => {
        alert(err.message);
      }
    );
  }

  onSearchClear() {
    // this.searchKey = '';
    // this.applyFilter();
  }
  applyFilter() {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.grads.filter = this.searchKey.trim().toLowerCase();

    // if (this.grads.paginator) {
    //   this.grads.paginator.firstPage();
    // }
  }
  onAddClick() {
    // this.gradService.initializeFormGroup();
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = '50%';
    // dialogConfig.data = {
    //   id: 1,
    //   title: 'Add New Grad',
    // };
    // // this.dialog.open(AddGradComponent, dialogConfig);
    // this.dialog.afterAllClosed.subscribe((res) => {
    //   //this.getGrads();
    // });
  }
  onUpdateClick(row) {
    // console.log(JSON.stringify(row));
    // // this.gradService.populateForm(row, row.id);
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.data = {
    //   id: 3,
    //   title: 'Update Grad',
    // };
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = '50%';
    // // this.dialog.open(AddGradComponent, dialogConfig);
    // this.dialog.afterAllClosed.subscribe((res) => {
    //   this.getGrads();
    // });
  }
  onInfoClick(row) {
    // console.log(JSON.stringify(row));
    // // this.gradService.populateForm(row, row.id);
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.data = {
    //   grad: row,
    // };
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = '50%';
    // this.dialog.open(DetailGradComponent, dialogConfig);
  }
  onDeleteClick(grad) {
    // this.oppService.populateFormId(grad);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30%';
    this.dialog.open(DeleteGradComponent, dialogConfig);
    this.dialog.afterAllClosed.subscribe((res) => {
      this.getGrads();
    });
  }

  public getGrads(): void {
    // this.gradService.getGrads().subscribe(
    //   (respone: Grad[]) => {
    //     this.grads = new MatTableDataSource(respone);
    //     // this.grads.sort=this.sort;
    //     // this.grads.paginator=this.paginator;
    //     // this.grads.filterPredicate=(data,filter)=>{
    //     //     return this.displayedColumns.some(ele=>{
    //     //       return ele!='actions'&& data[ele].toLowerCase().indexOf(filter)!=-1;
    //     //     })
    //     // };
    //   },
    //   (err: HttpErrorResponse) => {
    //     alert(err.message);
    //   }
    // );
  }
}
