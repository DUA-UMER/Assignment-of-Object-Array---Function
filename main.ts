//QUESTION NO 01 : BUILDING YOUR FRIEND LIST

//Creat a program that manages a simple friend list.
//1. define an object named people containing an empty array called friends.
//2. Create three separate objects, each representing a friend a friend, with
//properties like firstName, lastName, and optionally id.
//3.Add these friend objects to the friends array within the people object.
//4. Output the entire people object to the console, displaying your information
//& your friend list.


let people : any = {
    friends : []
};
type friend ={
    firstName : string; 
    lastName : string;
    ID : number;
}
let friend1 = {
    firstName : "dua",
    lastName : "umer",
    ID : 8,
};
let friend2 = {
    firstName : "malik",
    lastName : "Rimsha",
};
let friend3 = {
    firstName : "saba",
    lastName : "siddique",
    ID : 9,
}

people.friends.push(friend1, friend2, friend3);
console.log(people);

//QUESTION NO 02 : MANIPULATING AN ARRAY:REARRANGEING WORDS

//1.'SCRAMBLED ARRAY': start with an array of elements in a scrambled order, like
//const scrambledArray = ["sudent", "of", true, 123, "am", "a", "GIAIC", "I" ];
//*Modify the array:use methodes like split(), join(), push(), pop(),shift(),& unshift() to:
//.Convert non-string (booleans,numbers)to string if needed.
//.split elements into character arrays(optional).
//.Reaarange characters or elements in the desired order (modify original array or 
//create temporary arrays).
//*Output the Result: Use join() to combine elements back into a single string: 
//"I am a student of GIAIC".

const scrambledArray = ["sudent", "of", true, 123, "am", "a", "GIAIC", "I" ];
scrambledArray.unshift( "I" );
scrambledArray.splice( 1, 3, "am" );
scrambledArray.push("a");
scrambledArray.splice(2, 1, "a")
scrambledArray.splice(2, 3, "student", "of");
scrambledArray.pop();
console.log(scrambledArray.join(''));


//QUESTION NO 03: COMPANY PRODUCT CATALOG

//Task:Create a program to represent a product catalog using an array & perform basic
//queries.
//1.Define an array named inventory to store product information.
//2.Create three separate objects, each representing a product, with properties like
//name, model, cost, & quantity.
//3.Add these product objects to the enventory array using an appropriate array methode.
//4. Access & log the quantity property of a specific product (e.g,third product)
//in the inventory array.
//5.Explore adding & accessing more elements within the inventory array to understand
//how to manage product data.

let inventory = [];
 let product1 = {
    name : "seiko5",
    model : "6217-7000",
    cost : 52000,
    quantity : 5
 };
 let product2 = {
    name : "ipad",
    model : "13",
    cost : 700000,
    quantity : 3
 };
 let product3 = {
    name : "bike",
    model : "2024",
    cost : 200000,
    quantity : 2
 };
 inventory = [product1, product2, product3];
 console.log(inventory);

let accessThiredProperty = [inventory[2].cost];
 console.log(accessThiredProperty);

 let newProduct = {
    name : "iphone",
    model : "15",
    cost : 700000,
    quantity : 2
 };
 let updateInventry = [product1, product2, product3];
 console.log(updateInventry);
 let accessFirstProperty = [updateInventry[0].model];
 console.log(accessFirstProperty);

//QUESTION NO 04: STUDENT LIST ORGANIZER

//1.STUDENT DATA:The provided code defines an interface named Student that describes
//student information like name, senior status(true/false), and whether they've  
//completed their assaignments (true/false).
//.Imagine this as a template for organizing student details.
//2.STUDENT LIST: an array named Students stores information about several students
//using the student template. Think of this array as your class list!
//3.FIND SENIOR STUDENT WITH ASSIGNMENTS (Optional):
//.The code has a function that might find students who are seniors & have completed
//their assignments.
//.Can you guess why this information might be helpful?
//4.CLASS LIST UPDATE: 
//.Imagine you need update your class list! The code might have a function that removes 
//students who haven't completed their assignments(assuming only seniors are responsible).
//.Can you think of any resons why this might be useful(consider Limitations)?

let students  = [
    {
        name : "dua",
        senior : true,
        completedAssignment : true,
    },
    {
        name : "malik Rimsha",
        senior : false,
        completedAssignment : true,
    },
    {
        name : "maham",
        senior : false,
        completedAssignment : false,
    },
    {
        name : "Hiba",
        senior : true,
        completedAssignment : true,
    },
    {
        name : "MEER HADI",
        senior : true,
        completedAssignment : false,
    },
    {
        name : "saba",
        senior : false,
        completedAssignment : true,
    },
    
];
console.log("student claas list:");
let studentsList = students;
console.log(studentsList);
function findSeniorStudent(){
    let seniorStudent = students.filter(student => student. senior  === true && student.completedAssignment === true);
 return seniorStudent;

};
console.log("This is a list of student whose completed their asssignment:");
console.log(findSeniorStudent());

function updateClassList(){
    let removeStudent = students.filter(student => student.completedAssignment === false);
    return removeStudent;
};
console.log("These student haven't completed their assignment:");
console.log(updateClassList());