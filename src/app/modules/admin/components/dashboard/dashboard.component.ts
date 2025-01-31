import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Project } from '@data/models/project';
import { NewCompanyComponent } from '../new-company/new-company.component';
import { NewDepartmentComponent } from '../new-department/new-department.component';
import { NewSpecializationComponent } from '../new-specialization/new-specialization.component';
import { NewEmployeeComponent } from '../new-employee/new-employee.component';

@Component({
  selector: 'do-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  projects: Project[] = [];
  public today = Date.now();

  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {
    const active: Project = {
      id: '1',
      name: 'Меркурий – лечу на орбиту',
      shortName: 'shortName',
      departmentId: '1',
      isActive: true,
      consumer: {
        name: 'Роскосмос',
        description: '',
      },
      description:
        'Внедряем ПО на железки Роскосмоса для полета к орбите Меркурия. Человечество надеется на нас! Внедряем ПО на железки Роскосмоса для полета к орбите Меркурия. Человечество надеется на нас!',
      contributors: [
        {
          user: {
            firstName: 'Вася',
            lastName: 'Пчелкин',
            photo: './assets/images/girl.png',
          },
          totalTime: {
            hours: 280,
            minutes: 40,
          },
        },
        {
          user: {
            firstName: 'Вася',
            lastName: 'Пчелкин',
            photo: './assets/images/girl.png',
          },
          totalTime: {
            hours: 280,
            minutes: 40,
          },
        },
        {
          user: {
            firstName: 'Вася',
            lastName: 'Пчелкин',
            photo: './assets/images/girl.png',
          },
          totalTime: {
            hours: 280,
            minutes: 40,
          },
        },
        {
          user: {
            firstName: 'Вася',
            lastName: 'Пчелкин',
            photo: './assets/images/girl.png',
          },
          totalTime: {
            hours: 280,
            minutes: 40,
          },
        },
        {
          user: {
            firstName: 'Вася',
            lastName: 'Пчелкин',
            photo: './assets/images/girl.png',
          },
          totalTime: {
            hours: 280,
            minutes: 40,
          },
        },
      ],
    };

    this.projects.push(active, active, active, active);
  }

  onOpenNewProject() {
    this.router.navigate(['admin/new-project']);
  }

  onOpenNewCompany(): void {
    const dialogRef = this.dialog.open(NewCompanyComponent, {
      width: '503px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onOpenNewDepartment(): void {
    const dialogRef = this.dialog.open(NewDepartmentComponent, {
      width: '503px',
    });
    /*dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });*/
  }
  onOpenNewSpecialization(): void {
    const dialogRef = this.dialog.open(NewSpecializationComponent, {});
  }

  onOpenNewEmployee(): void {
    const dialogRef = this.dialog.open(NewEmployeeComponent, {});
  }
}
