import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../services/staff.service';
import { Staff } from '../../interfaces/staffs.interface';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  staffs: any = [];
  constructor(private staffService: StaffService) { }

  ngOnInit(): void {
    this.getStaff();
  }

  getStaff() {
    this.staffService.getStaffs().subscribe((data: Staff) => {
      this.staffs= data;
    });
  }
}
