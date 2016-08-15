import { Component } from '@angular/core';
import Employee from "../models/employee.model";
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'employee-form',
    templateUrl: 'src/app/form.component.html'
})
export default class FormComponent {
    employeeForm: FormGroup;
    constructor() { }
    model = new Employee();
    active = true;
    submitted = false;
    onSubmit() {
        this.submitted = true;
    }
    
    log(x) {
        console.log(x);
    }
}

//street: ['', Validators.minLength(3)],
//    city: ['', Validators.maxLength(10)],
//    zip: ['', Validators.pattern('[A-Za-z]{5}')]