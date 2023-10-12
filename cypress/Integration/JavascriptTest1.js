console.log("Learning javascript")
let a=5
console.log(a)
console.log(typeof(a))

let b="chaitali"
console.log(typeof(b))

let booleanval=true
console.log(booleanval)

let val
console.log(val)

var number=0
console.log(number)


//Array declaration type 1

var marks= Array(6)
var marks= new Array(10,20,30,40,50,60)

//Array declaration type 2

var marks= [10,20,30,40,50,60]
marks[2]=3

console.log(marks)

let total= marks.reduce((sum,mark)=>sum+mark,0)
console.log(total)

var source=[12,13,14,15]
var Even_source=[]
for(let j=0; j<source.length; j++)
{
if(source[j]%2==0)
{
    Even_Number=source[j]
    Even_source.push(Even_Number)
    console.log(Even_source)
}
let Even= source.filter(source=>source%2==0)
console.log(Even)

let mapArray=source.map(source=>source*3)
console.log(mapArray)

//sort

var fruits=["banana", "apple", "mango", "chiku"]
console.log(fruits.sort())

var number=[500,275,133, 895]
console.log(number.sort())






}