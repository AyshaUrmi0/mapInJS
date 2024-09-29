//add property
const myObjects = [
    {id:1,name:'john',age:23,phone:1234567890},
    {id:2,name:'monti',age:24,phone:1234567890},
    {id: 2,name:'rinti',age:25,phone:1234567890},
    {id: 3,name:'pinky',age:26,phone:1234567890},
    {id: 4,name:'jhinky',age:27,phone:1234567890},
    {id: 5,name:'tinkyk',age:28,phone:1234567890}
]

const result=myObjects.map(obj=>obj.name)
console.log(result)
//add property
const result1=myObjects.map(obj=>({...obj,city:'kolkata'}))
console.log(result1)
//add property
const result2=myObjects.map(obj=>({...obj,city:'kolkata',country:'india'}))
console.log(result2)
//add property
const result3=myObjects.map(obj=>({...obj,city:'kolkata',country:'india',state:'westbengal'}))
console.log(result3)
//add property
const result4=myObjects.map(obj=>({...obj,city:'kolkata',country:'india',state:'westbengal',zip:'700001'})) 
console.log(result4)
//add property
const result5=myObjects.map(obj=>({...obj,city:'kolkata',country:'india',state:'westbengal',zip:'700001',address:'kolkata'}))
console.log(result5)
//add property
const result6=myObjects.map(obj=>({...obj,city:'kolkata',country:'india',state:'westbengal',zip:'700001',address:'kolkata',pincode:'700001'}))
console.log(result6)
//add property
const result7=myObjects.map(obj=>({...obj,city:'kolkata',country:'india',state:'westbengal',zip:'700001',address:'kolkata',pincode:'700001',pincode:'700001'}))
console.log(result7)

