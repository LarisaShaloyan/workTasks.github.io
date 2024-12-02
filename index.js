                
const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',

    },
];
                  ///  1 question

////////   1 option   ///////////////////////////
const names = characters.map((character) => character.name);
console.log(names)


////////   2 option   ////////////////////////////
const array=characters.map(({name})=> {
    return({name})
})
console.log(array)


              ///////   3 question
 
const arrayLength=characters.reduce((length,characters)=>{
    return length+characters.name.length
},0)
console.log(arrayLength)

              ////   4 question
              
const colorCount=characters.reduce((count,characters)=>{
    const color=characters.eye_color
    count[color]=(count[color]||0)+1
    return count
},{})


console.log(colorCount)


////////      5 question  
const genderCount =characters.reduce((count,characters)=>{
    const color=characters.gender
    count[color]=(count[color]||0)+1
    return count
},{})
console .log(genderCount)

///////////////  6   question

const  female=characters.filter(props=>props.gender==='female')
console.log (female)


///////////// 7  
let countMass=true
for(let character of characters){
    if ( parseInt(character.mass)<=40){
        countMass=false;
        break
    }
}
console.log (countMass)

/////////////    8 
let count=true
for(let character of characters){
    if ( parseInt(character.mass>200)){
        countMass=false;
        break
    }
}
console.log (count)

//////////////////// 9./*
// Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// Expected Output :
// [1, 2, 4, 0]
// [1, 2, [4, 0]]
// */ /////////////// 9
function deepClone (array){
return JSON.parse(JSON.stringify(array))
}
console.log(deepClone([1,2,4,0]))

////////////////// 9
const array7=[1,2,4,0]
const array8=[...array7]
console.log(array8)
////////////////////////// 10 
function last(array, n = 1) { 
    if (n <= 0) 
     return [];
    if (n >= array.length) 
        return array;
     return array.slice(-n);
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));


11./*    

We provide you with a starting array listing the names of some birds.
const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];

1.Find the index of the "Eagles" item, and use that to remove the "Eagles" item.

2.Make a new array from this one, called eBirds, that contains only birds from the
original array whose names begin with the letter "E".

Note that startsWith() is a great way to check whether a string starts with a given character.
If it works, you should see "Emus,Egrets" appear in the page.
 */

const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];

const arrayBirds =birds.indexOf("Eagles")
if (arrayBirds !== -1) { 
    birds.splice(arrayBirds, 1);
}
console.log(birds)

  /////////////////////////////////////////////////////////////////
const lastIndex=birds.filter((props=>props.startsWith('E')))
console.log(lastIndex)


