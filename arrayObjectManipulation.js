const employees = [
  { id: 1, name: "Amit", age: 25, department: "Engineering", salary: 50000, experience: 2 },
  { id: 2, name: "Neha", age: 30, department: "HR", salary: 40000, experience: 5 },
  { id: 3, name: "Rahul", age: 28, department: "Engineering", salary: 60000, experience: 4 },
  { id: 4, name: "Priya", age: 35, department: "Finance", salary: 70000, experience: 8 },
  { id: 5, name: "Suresh", age: 45, department: "HR", salary: 55000, experience: 15 },
  { id: 6, name: "Anjali", age: 26, department: "Engineering", salary: 48000, experience: 1 },
  { id: 7, name: "Vikram", age: 32, department: "Finance", salary: 65000, experience: 6 }
];

// Q6 - Sort by department (A–Z) then salary (desc)
let sortedArr = [...employees].sort((a,b)=>{
    if(a.department !== b.department){
        return a.department.localeCompare(b.department)
    }
    return b.salary - a.salary
})

console.log(sortedArr)



// Q5 - most expirence employee per department
// O/p - object - {department: name}
let mostExpPerDept = {};

mostExpPerDept = employees.reduce((acc, emp)=>{

        if(acc[emp.department]){
            if(emp.experience > acc[emp.department].experience) {
                acc[emp.department] = {name: emp.name, expirence: emp.experience}
            }
        }else{
            acc[emp.department] = {name: emp.name, experience: emp.experience}
        }

        return acc

},{})


for(let item in mostExpPerDept){
    mostExpPerDept[item] = mostExpPerDept[item].name
}

// console.log(mostExpPerDept)


// Query 01: Get all employee names in an array
// let getNames = (arr) => arr.map(item => item.name)
// console.log(getNames(employees))

// 02 - Count employees per department

// let deptArr={};
// for(let item of employees){
//     if(deptArr[item.department]){
//         deptArr[item.department]++;
//     }else deptArr[item.department] = 1;
// }

// console.log(deptArr)

// Q3 - Employees earning more that 55000
let aplEmployee = employees.filter(item => item.salary>=55000);
// console.log(aplEmployee)

// Q4 - Average Salary Per Department
let deptnSalary={};
deptnSalary = employees.reduce((acc, emp)=>{
    if(!acc[emp.department]){
        acc[emp.department]= {total: 0, count: 0}
    }
    acc[emp.department].total += emp.salary;
    acc[emp.department].count += 1

    return acc;
}, {})

for(let item in deptnSalary){   
    deptnSalary[item] = deptnSalary[item].total / deptnSalary[item].count
}

