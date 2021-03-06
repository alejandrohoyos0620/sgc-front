import { Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { hiredService } from '@core/models/hiredService.model';
import { Employee } from '@core/models/employee.model';
@Component({
  selector: 'app-dialog-customer',
  templateUrl: './dialog-customer.component.html',
  styleUrls: ['./dialog-customer.component.scss']
})
export class DialogCustomerComponent  {

  selected: any;
  isShowRepairmans = false;
  repairmans: Partial<Employee>[];
  constructor(
    public dialogRef: MatDialogRef<DialogCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: hiredService) {}
  onNoClick(): void {
    this.dialogRef.close('true');
  }
}
