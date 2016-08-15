import { Injectable } from '@angular/core';
import Employee from "../models/employee.model";

@Injectable()

export class EmployeeService
{
    private onChange: ((list: Employee[])=>any)[];

    constructor() {
        this.onChange = [];
        window.addEventListener('storage', () => {
            this.notify(this.list);
        }, false);
    }

    private notify(list: Employee[]) {
        for(let cb of this.onChange) {
            cb(list);
        }
    }

    /**
     * Добавляем сотрудника в хранилище
     * @param e
     */
    public add(e: Employee) {
        // Получаем из хранилища текущий список сотрудиков
        let listJson = localStorage.getItem('employeeList');
        let list = [];
        if(listJson !== null) {
            list = JSON.parse(listJson);
        }
        // Добавляем id элементу
        e.id = list.length;
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
    set onChangeEvent(cb: (list: Employee[])=>any) {
        this.onChange.push(cb);
        console.log("set", this.onChange);
    }

    /**
     * Очистить список
     */
    public clear() {
        localStorage.setItem('employeeList', '[]');
        console.log("clear", this.onChange);
        this.notify([]);
    }

    /**
     * Удаляем сотрудника
     * @param id
     */
    public delete(id) {
        // Получаем из хранилища текущий список сотрудиков
        let list = JSON.parse(localStorage.getItem('employeeList'));
        let cleared = [];
        // Обходим удаляемый
        for(let employee of list) {
            if(employee.id != id) {
                cleared.push(employee);
            }
        }
        // Сохраняем в хранилище
        localStorage.setItem('employeeList', JSON.stringify(cleared));
        this.notify(cleared);
    }
}