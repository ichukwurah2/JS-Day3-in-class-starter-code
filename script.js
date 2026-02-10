console.log("JS file loaded ✅");

const members = [
  { first_name: "John", last_name: "Doe", email: "johndoe@example.com", birthdate: "1999-12-31", salary: 80000 },
  { first_name: "Jane", last_name: "Smith", email: "janesmith@example.com", birthdate: "2015-09-01", salary: 75000 }
];

// ==============================
// OLD WAY DEMO – Constructor Function
// ==============================
function EmployeeOld(firstName, lastName, email, birthdate, salary) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.birthdate = birthdate;
  this.salary = salary;
}

EmployeeOld.addEmployee = function (firstName, lastName, email, birthdate, salary) {
  return new EmployeeOld(firstName, lastName, email, birthdate, salary);
};

EmployeeOld.prototype.editEmployee = function (updates) {
  Object.assign(this, updates);
};

// Test old way
const bill = EmployeeOld.addEmployee("Bill", "Doe", "bill@example.com", "1990-01-01", 50000);
console.log("OLD WAY:", bill);

bill.editEmployee({ salary: 7777777, email: "xxxxxxx@example.com" });
console.log("OLD WAY UPDATED:", bill);

// ==============================
// ES6 WAY – Classes
// ==============================
class Employee {
  constructor(firstName, lastName, email, birthdate, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthdate = birthdate;
    this.salary = salary;
  }

  getEmployees() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      birthdate: this.birthdate,
      salary: this.salary
    };
  }

  static addEmployee(firstName, lastName, email, birthdate, salary) {
    return new Employee(firstName, lastName, email, birthdate, salary);
  }

  editEmployee(updates) {
    Object.assign(this, updates);
  }
}

// Step 2 + 3 – your instance
const ify = new Employee(
  "Ifeanyi",
  "Chukwurah",
  "ichukwurah@example.com",
  "2004-01-01",
  80000
);

console.log("CLASS INSTANCE:", ify);
console.log("NAME + EMAIL:", ify.firstName, ify.email);

// Step 4 – array of employees
const employees = members.map(m =>
  new Employee(m.first_name, m.last_name, m.email, m.birthdate, m.salary)
);

console.log("EMPLOYEE ARRAY:", employees);
console.log("FIRST EMPLOYEE:", employees[0].getEmployees());

// Step 5 – test static + edit
const newEmp = Employee.addEmployee("Bill", "Doe", "bill@example.com", "1990-01-01", 50000);
console.log("STATIC ADD:", newEmp);

newEmp.editEmployee({ salary: 90000 });
console.log("EDITED:", newEmp);

// ==============================
// LAB CHALLENGE 2 – Async / Await
// ==============================
async function getTodoById(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch failed:", error);
    throw error;
  }
}

// Test async function
async function testGetTodo() {
  try {
    const todo = await getTodoById(1);
    console.log("TODO:", todo);
  } catch (error) {
    console.error(error);
  }
}

testGetTodo();
// PART B Why we can't us synchrnous code
 



// Callbacks




// Promises




// Async/Await
 
