/**
 * Класс отвечает за хранение информации о сотруднике
 */
class Employee
{
    constructor(
        public firstName: string,
        public lastName: string,
        public address: string,
        public age: number,
        public id?: number
    ) {  }
}

export default Employee;