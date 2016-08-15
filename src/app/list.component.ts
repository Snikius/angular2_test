import {EmployeeService} from "../services/employee.service";
import {OnInit, Input} from "@angular/core";
import Employee from "../models/employee.model";
import { Component } from '@angular/core';

@Component({
    selector: 'list',
    templateUrl: 'src/app/list.component.html',
})
export class ListComponent implements OnInit {
    list: Employee[];

    @Input('empService') service: EmployeeService;

    constructor() { }

    ngOnInit() {
        this.list = this.service.list;
        this.service.onChangeEvent = (list: Employee[]) => {
            this.list = list;
        };
    }

    delete(id) {
        this.service.delete(id);
    }
}