import { Component, ViewChild } from '@angular/core';
//import { ViewChild } from '@angular/forms';
import {EmployeeService} from "../services/employee.service";
import Employee from "../models/employee.model";

@Component({
    selector: 'employee-form',
    templateUrl: 'src/app/form.component.html',
    providers: [EmployeeService],
})
export default class FormComponent {
    constructor(private service: EmployeeService) { }
    @ViewChild('employeeForm') form;

    model = new Employee('', '', '', null);
    active = true;
    submitted = false;
    
    onSubmit() {
        this.submitted = true;
        // Добавляем в список через сервис
        this.service.add(this.model);
        // Очищаем форму
        this.model = new Employee('', '', '', null);
    }
}