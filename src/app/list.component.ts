import {EmployeeService} from "../services/employee.service";
import {OnInit} from "@angular/core";
import Employee from "../models/employee.model";
import { Component } from '@angular/core';

@Component({
    selector: 'list',
    providers: [EmployeeService],
    templateUrl: 'src/app/list.component.html',
})
export class ListComponent implements OnInit {
    list: Employee[];

    constructor(private service: EmployeeService) { }

    ngOnInit() {
        this.list = this.service.list;
        this.service.onChange((list: Employee[])=>{
            this.list = list;
        })
    }
}