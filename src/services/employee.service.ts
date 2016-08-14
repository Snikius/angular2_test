import { Injectable } from '@angular/core';
import Employee from "../models/employee.model";

@Injectable()

export class EmployeeService
{
    /**
     * Добавляем сотрудника в хранилище
     * @param e
     */
    private add(e: Employee) {
        // Получаем из хранилища текущий список сотрудиков
        let listJson = localStorage.getItem('employeeList');
        let list = [];
        if(listJson !== null) {
            list = JSON.parse(listJson);
        }
        // Добавляем нового
        list.push(e);
        // Сохраняем в хранилище
        localStorage.setItem('employeeList', JSON.stringify(list));
    }

    /**
     * Получаем список сотрудников
     * @returns {Array}
     */
    get list() {
        let listJson = localStorage.getItem('employeeList');
        return listJson === null ? [] : JSON.parse(listJson);
    }

    /**
     * Нзначаем слушателя на обновление хранилища
     * @param cb
     */
    public onChange(cb: (list: Employee[])=>any) {
        window.addEventListener('storage', () => {
            cb(this.list);
        }, false);
    }
}