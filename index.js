/*

function greeting(){
	var age=prompt('what is your age?');
	var result='your age is '+' '+age;
	console.log(result)
}

greeting();
*/

// function argument

function sum(a,b){
	var result=a+b;
	console.log(result);
}

sum(10,50)


// loop
// while loop
var num=0;
while(num<=100){
	num=num+1;
	console.log(num)
}

// forloop
for(var num=0 ; num<=100; num++){
	console.log(num)
}

// string in javascript
var fruit='apple';
console.log(fruit.length);
console.log(fruit.indexOf('p'))

 // array
 fruits = new Array('banana','apple','pineapple','orange');
 console.log(fruits.length)//length of the array

 // converting array in string
 console.log(fruits.toString());
 console.log(fruits.pop()); //pop the last element
 vegetables= new Array('tomato','carrot','lauka');
 console.log(vegetables)
 var addarray=fruits.concat(vegetables)//add two array
 console.log(addarray)
console.log(addarray.sort())//sort two array

// adding element in empty array
var emptyarray = new Array()
for(var i=0;i<=10;i++){
	emptyarray.push(i)
}
console.log(emptyarray)

// objects


var student={
	firstname:'sudan',
	lastname:'bhandari',
	age:60,
	studentinfo:function(){
		return this.firstname + ' '+this.lastname + ' ' + this.age 
	}
};


console.log(student.studentinfo())
console.log(student.firstname + student.age )



// conditions
// switch conditions

var day=prompt('what the days ??')
console.log(day)
switch(0){
	case 0:
		text = 'weekend';
		break;
	case 5:
		text = 'weekend';
		break;
	case 6:
		text = 'weekend';
		break;
	default:
		text = 'weekday';

}
console.log(text)


// json
