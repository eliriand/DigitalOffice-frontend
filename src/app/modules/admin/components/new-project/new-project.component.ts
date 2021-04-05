import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentApiService } from '@data/api/company-service/services/department-api.service';
import { PositionResponse } from '@data/api/company-service/models/position-response';
import { CompanyApiModule } from '@data/api/company-service/company-api.module';
import { PositionApiService } from '@data/api/company-service/services/position-api.service';
import { NewMembersBoardComponent } from '../new-members-board/new-members-board.component';
import { teamCards, TeamCard } from './team-cards';

@Component({
  selector: 'do-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
})
export class NewProjectComponent implements OnInit {
  public projectForm: FormGroup;
  public teams: TeamCard[] = teamCards;
  public departments = [];
  public team = [
    {
      name: 'Olya',
      profileImgSrc: '',
    },
    {
      name: 'Slava',
      profileImgSrc: '',
    },
  ];

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private departmentApiService: DepartmentApiService
  ) {}

  ngOnInit(): void {
    this.getDepartments();
    this.projectForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(80)]],
      shortName: ['', [Validators.required, Validators.maxLength(32)]],
      department: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      checkControl: ['', [Validators.required]],
      isActive: true,
    });
  }

  public getDepartments(): void {
    /*this.departmentApiService
      .
      .subscribe((data: Response[]) => {
        this.departments = data;
      });*/
  }

  public addMember(): void {
    this.dialog.open(NewMembersBoardComponent, {
      width: '720px',
      height: '650px',
    });
  }

  public createProject(): void {}
  public saveDraft(): void {
    console.log('Сохранить черновик');
  }
}
