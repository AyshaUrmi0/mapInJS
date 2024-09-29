const obj=[
    {id:1,name:'john',age:23,phone:1234567890 ,price:1000,quantity:2},
    {id:2,name:'monti',age:24,phone:1234567890,price:500,quantity:5},
    {id: 2,name:'rinti',age:25,phone:1234567890,price:300,quantity:3},
]

const totalPrice=obj.map(obj=>obj.price*obj.quantity)
console.log(totalPrice)