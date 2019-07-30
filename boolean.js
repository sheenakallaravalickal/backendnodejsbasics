let value=false
if(!value){
    console.log('false value')
}
else{
    console.log('true value')
}
//object literals
let val={num:10,num1:15}
let sum=val.num+val.num1;
console.log(sum)

//profile
let vall={name:'sheena kallaravalickal',age:20,dob:'08-08-1998',place:'palakkad',address:{houseno:25,lane:'mannarkad',pin:678593},hello:function(){
    console.log('heloooooo')
    }

    }

    console.log(vall.address.pin)
vall.hello();
let hey=vall
let hoy=vall
hoy.name='faizal'
hey.name='angry moji'
console.log(hoy.name)
//constructor objectives
function person(name,age,place) {
    this.name=name
    this.age=age
    this.place=place

}
let obj=new person('sheena kallaravlickal',20,'palakkad')
let obj1=new person('shobin mathew',26,'palakkad')
console.log(obj.name)
console.log(obj1.place)