let castle = {
    isAvailable: true,
    Name: "Parks",
    Cost: 50000,
    roomsAvailable: [302,101,32,456]
}
console.log(castle.Name);
console.log(castle.Cost);

let Person = {
    name: "Sahil",
    age: 20,
    country: "India",
    logData: function(){
        console.log(Person.name + " is " + "from " + Person.country + " and is " + Person.age + " years old."  )
    }
}

Person.logData()

let arr = [1,2,3,4,5]
arr.push(6) // 1 2 3 4 5 6
console.log(arr)
arr.push(7) // 1 2 3 4 5 6 7
console.log(arr)
arr.pop() // 1 2 3 4 5 6
console.log(arr)
arr.shift() // 2 3 4 5 6
console.log(arr)
arr.shift() // 3 4 5 6
console.log(arr)
arr.unshift(8) // 8 3 4 5 6
console.log(arr)
arr.unshift(9) // 9 8 3 4 5 6 
console.log(arr)
arr.shift() // 8 3 4 5 6
console.log(arr)
arr.push(10) // 8 3 4 5 6 10
console.log(arr)