const myObjects = [
    {id:1,name:'john',age:23,phone:1234567890},
    {id:2,name:' monti',age:24,phone:1234567890},
    {id: 2,name:'rinti',age:25,phone:1234567890},
    {id: 3,name:'pinky',age:26,phone:1234567890},
    {id: 4,name:'jhinky',age:27,phone:1234567890},
    {id: 5,name:'tinkyk',age:28,phone:1234567890}

]

const result=myObjects.map(obj=>obj.name)
console.log(result)