class Employee {
    constructor (name, id, email, title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee";
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }
    
    getEmail(){
        return this.email;

    }
    getTitle(){
        return this.title;

    }

    getRole(){
        return "Employee";
    }

}

const Employee1 = new Employee ("Eric Lee", 01, "Manager");
var name = Employee1.getName();
console.log(name);

module.exports = Employee;