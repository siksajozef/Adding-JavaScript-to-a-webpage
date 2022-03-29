console.log("Jozef");

/*let bookCount = 10;

for (let i = 0; i < bookCount; i++) {
    console.log(i);
};*/

/*let bookCount = 10;

for (let i = 0; i < bookCount; i++) {
    console.log(i+1);
};*/


/*let bookCount = 20;

for (let i = 0; i < bookCount; i++) {
    if ((i+1)%2===0){
        console.log(i+1);
    }
};*/

let printNumbersTill = (N) =>{
    count = N;
    for(let i = 0; i < count; i++) {
        console.log(i+1);
    }
}
printNumbersTill(20);


let getGreetingTo = (person) =>{
    return ("Hello " + person);
}

/*let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  };*/


  let myNumbers = [10, 20, 30, 50, 12];

  // here we say, we want to do something with each item
  myNumbers.forEach((number) => {
    // within the function I can tell what I want to do with the items
    console.log(number);
  });

let printValues = (array) => 
{
    array.forEach
    (
        (number) => 
        {console.log(number);}
    );
}
