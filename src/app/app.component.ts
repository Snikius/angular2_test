import { Component } from '@angular/core';
import {EmployeeService} from "../services/employee.service";
import Employee from "../models/employee.model";

@Component({
    selector: 'employee-app',
    templateUrl: 'src/app/app.component.html',
    providers: [EmployeeService],
})
export class AppComponent {
    window: any;
    showClear: boolean;

    constructor(private service: EmployeeService) { }
    clear() {
        this.service.clear();
    }
    openForm() {
        if(!this.window || this.window.closed) {
            this.window = window.open("form.html");
        } else {
            alert("Form already open");
        }
    }
    ngOnInit() {
        this.showClear = this.service.list.length ? true : false;
        this.service.onChangeEvent = (list: Employee[]) => {
            this.showClear = list.length ? true : false;
        };
    }
}