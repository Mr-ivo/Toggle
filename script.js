//undefined dataytype
// var a;
//console.log(a);


//null data type
// var userName = null;
// console.log(userName);


// userName = prompt("Enter user name");

// console.log(userName);
// document.write("this is your name"+userName)

// var surename = prompt("please enter your first name")
// var name = prompt ("please enter your last name")
// console.log("this is my name"+" "+ surename+" "+nom)


 

//object data type

// var user = {
//     "Name": "Ebong Thierry",
//     "email": "assignment@assignment.com",
//     "age": 18,
//     "adress": {
//         "streetAddress": "alfal",
//         "country": "cameroon",
//         "city": "Douala"
//     }
// }

// document.write("Your name are"+" "+user.first_name+" "+user.last_name )

//array

// var fruits = ["apple","orange", "mango", "annanas"];

// console.log(fruits(0));
// console.log(fruits(1));
// console.log(fruits(2));
// console.log(fruits(3));

// // short array function

// fruits.forEach(function(fruits){
//     console.log(fruit);
// })

//function data type
// var x = 10;
// var y = 9;

// function addition(){
//     alert(x+y)
// }


//Operator

  

// Switch case

// let day = new Date().getDate();

// // alert(day)

// switch(day){
//     case 0 :
//         document.write("<h1>We are sunday</h1>");
//         break;
//     case 1:
//         document.write("<h1>We are Monday</h1>");
//         break;
//     case 2:
//         document.write("<h1>We are Tuesday</h1>");
//         break;
//     case 3:
//         document.write("<h1>We are Wednesday</h1>");
//         break;
//     case  4:
//         document.write("<h1>We are Thursday</h1>");
//         break;
//     case 5:
//         document.alert("<h1>We are saturday</h1>");
//         break;
//         // default : alert("no information available for that day")/
        
        
// }

//  var num1 = 8;
//  var num2 = 5;
//  var operation = "subtraction"; //you need to define the operation being performed

//  switch(operation){
//     case "addition":
//          document.write(num1 + num2) ; 
//          break;
//     case "subtraction":
//          document.write(num1 - num2) ;
//           break;
//     case "division":
//          document.write(num1 / num2) ; 
//          break;
//     case "multiplication":
//          document.write(num1 * num2) ; 
//          break;
//     case "modulus":
//          document.write(num1 % num2) ; 
//          break;
//  }


//  //array

//  let colors = ["#00ff", "#000", "#fff", "#cccc", "#f80"];
//  var fruits = ["mangoes", "apple", "orange", "pear", "pineapple", "pawpaw"];


// //  document.write(fruits.length)

// //loop through an array elements

// // for(let i = 0; i < colors.length; i++){
// //     document.write("<br>" + "<h1>"+ i + ": " + colors[i] + "</h1>");
// // }

// //adding a new element push() adding at the end of the list
// // fruits.push("Ananas")

// // for(let i = 0; i < fruits.length; i++){
// //     document.write("<br>" + "<h1>"+ i + ": " + fruits[i] + "</h1>");
// // }

// //adding a new element unshift() adding at the end of the list
// // fruits.unshift("Ananas")

// // for(let i = 0; i < fruits.length; i++){
// //     document.write("<br>" + "<h1>"+ i + ": " + fruits[i] + "</h1>");
// // }

//  //removing an element with pop = removing the last position
// //  color.pop();
// // for(let i = 0; i < colors.length; i++){
// //     document.write("<br>" + "<h1>"+ i + ": " + colors[i] + "</h1>");
// // }
// //removing an element with shift = removing the first position

// // splice(position, numberOfElementToRemove)

// // fruits.splice(3,1,)

// // for(let i = 0; i < fruits.length; i++){
// //     document.write("<br>" + "<h1>"+ i + ": " + fruits[i] + "</h1>");
// // }

// //contact()

// // var joinOfArrays = fruits.concat(colors)

// // for(let i = 0; i < joinOfArrays.length; i++){
// //     document.write("<br>" + "<h1>"+ i + ": " + joinOfArrays[i] + "</h1>");
// // }

// //assignment 
// //indexOf()
// //includes()
// //find()
// //filter()


// //   find

// var numbers = [4,5,6,7,8,0,1,2,3,];

// var result = numbers.find(function(element){
//     return element < 5;
// }) 
// //  alert(result)
 
// //  filter()

// // var numbers = [4,5,6,7,8,0,1,2,3,];

// // var result = numbers.filter(function(element){
// //     return element > 5;
// // }) 
// //  document.write(result)
// //  console.log(result)
// // for(let i = 0; i < result.length; i++){
// //     document.write("<br>" + "<h1>"+ i + ": " + result[i] + "</h1>");
// // }

// //Objects

// let person = {
//     name : 'John',
//     age : 34,
//     gender :'Male',
//     displayName: function() {
//         alert(person.John)
//     },
//     images: {
//         image1:"http://",
//         image2:"http://"
//     }
// };
// let vehicle = {
//     color: "red",
//     size : {width: 200, height: 100},
//     speed:"200km"

// }

// // person.displayName()

// // how to get a method and run it
// alert(vehicle["speed"])
// console.log(vehicle)
// for(let vehicleSize in vehicle.size) {
//      document.write("<h1>"+vehicle.size[vehicleSize]+"</h1>"+"<br>")
// }
// vehicle.brand = "Lambo";
// alert(vehicle.brand)

// // delete property of an object

// delete vehicle["color"];
// alert(vehicle.color)

// // Assignment
// _ArrowFunction
// _scoeOfAVarable
// _loops


//storing a single data in a local storage
// var themeColors = {
//     'primary':'#fff',
//     'secondary':'#f80',
//     'dark':'#000',
// }

// var webTheme = themeColors.dark;

// localStorage.setItem('theme',webTheme)

// var bgColor = localStorage.getItem('theme');

//  document.getElementById('card').style.backgroundColor = bgColor;

// var products = [
//     {
//         title : 'product 1',
//         price : 120.00,
//         category : 'cloths'
//     },
//     {
//         title : 'product 2',
//         price : 135.00,
//         category : 'shoes'
//     },
//     {
//         title : 'product 3',
//         price : 11.00,
//         category : 'chains '
//     },
// ]

// localStorage.setItem('products', JSON.stringify(products));

// var storedProducts = JSON.parse(localStorage.getItem('product'));

// console.log(storedProducts);

//old version
// function getProduct(product) {
//     console.log(product)
// }

//new version

// const test =()=>{
//     console.log('hello world');
//     console.log('sdsfound');
// }

// test()

// window.addEventListener('scroll', function(){
//     console.log('hello world');
// })
// window.addEventListener('scroll', ()=>console.log('hello'))
//v1
// let is_online = false

// if(is_online==true) {
//     alert('You are online')
// }else {
//     alert('You are offline');
// }

// if(is_online==false)console.log('You are offline')
// else console.log('You are online')
// //v2
// if(is_online==false)console.log('You are offline')
// else console.log('You are online')
//v3
// is_online==true?console.log('You are online'):console.log('You are offline');

// let age = 10

// age > 18?console.log('You are an adult'):age<21?console.log('You are adolescent'):console.log('You are a Legend')

// Assignment theme

const checkbox =
 document.getElementById('checkbox');
 document.addEventListener('change', () => {
    document.body.classList.toggle('dark');

 });




