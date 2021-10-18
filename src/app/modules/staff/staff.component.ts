// Modulos de Angular
import { Component, OnInit } from '@angular/core';

// Servicios
import { StaffService } from '../../services/staff.service';

// Interfaces
import { Staff } from '../../interfaces/staffs.interface';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  // Atributos
  staffs: any = [];

  // Constructor
  constructor(private staffService: StaffService) { }

  // Metodos
  ngOnInit(): void {
    this.getStaff();
  }

  getStaff() {
    this.staffService.getStaffs().subscribe((data: Staff) => {
      this.staffs= data;
    });
  }
}
