// PART 1 (loop,destructure,function,sort,filter,reduce,find,fill,set,constructor,class,getter,setter)

// 1) for in loop and for of loop
// const arr=[1,2,3,4,'adnan','arif']
// for(let x of arr){
//     console.log(x);
// }

// for(let x in arr){
//     console.log(arr[x]);
// }

// 2) for in loop in  obj
// let obj={
//     name:"adnan",
//     age:21,
//     gender:"male"
// }

// for(let key in obj){
//     console.log(key);
//     console.log(obj[key]);
// }

// for each loop

// let arr=[12,3,4,8]
// arr.forEach(
//         (num,i)=>{console.log(`num is:${num} and index is:${i}`);}
// )
// ...........................................

// 3) obj destructure
// let obj={name:"adnan",
//         age:21,
//         address:"hutton road"
// }
// let {name,age,address}=obj
// console.log(name);

// let b={...obj,name:"razy",age:22}
// console.log(name);
// console.log(b);
// .........................................
// let a="adann"
// let b="adann"
// let c="adann"
// const arr=[
//         { name:"adnan",age:21,gender:"male"},
//         { name:"prince",age:22,gender:"male"},
//         { name:"razy",age:29,gender:"male"},
//         {a,b,c}
// ]
// for(let value of arr){
//         console.log(value);
// }
// let [{name},{gender},{age},val4]=arr
// console.log(name,gender,age,val4);
// .....................................

// 4) FUNCTION

// let res=function index(arr,num){
//         for(let i=0;i<arr.length;i++){
//                 if(arr[i]==num){
//                         return i
//                 }

//         }
//         return -1

// }...
// function prime(n){
//         let c=0;
//         for(let i=0;i<=n;i++){
//                 if(n%i==0){
//                         c++;
//                 }

//         }
//         if(c==2){
//                 console.log("prime");
//         }
//         else{
//                 console.log("not prime");
//         }
// }
// prime(9)....
// function des(...a){
//         let s=0
//         for(let x of a){
//                 s=s+x
//         }
//         console.log(s);
// }
// des(2,4,6,8)

// .............................

// 5) MAP AND FILTER

// const arr=[1,2,3,4,5,6,7,8]

// const res=arr.map(
//         (num,i)=>{
//                 return num*2
//         }
// )
// console.log(res);

// const res1=arr.filter(
//         (num,i)=>{
//                 return num%2===0
//         }
// )
// console.log(res1);

// ...........................

// 6) Reduce and sorting
// a)
// let arr=[1,2,3,4,5,6,7,8,9,10]

// let res=arr.reduce(
// *** here acc=1 and cur=2 in first time and then acc=3(return value) and cur=3(next value)
//         (acc,cur)=>{
//                 return acc+cur
//         }
// )
// console.log(res)

// b)

// const arr=[
//                 { name:"adnan",age:21,salary:40000},
//                 { name:"prince",age:22,salary:60000},
//                 { name:"razy",age:29,salary:100000},
//         ]
// let res=arr.reduce(
//         // sum=0 inital avlue
//         (sum,total)=>{
//                 return sum+total.salary
//         },0
// )
// console.log(res)
// .....................
// a)
// const arr=[2,34,4,5,67,97]
// const res=arr.sort(
//                 (a,b)=>{return a-b}
//         )

//         console.log(res)
// ...................................
// b)const arr=[
//                 { name:"adnan",age:21,salary:40000},
//                 { name:"prince",age:22,salary:60000},
//                 { name:"razy",age:29,salary:100000},
//         ]

// const res=arr.sort(
//         (a,b)=>{return b.salary-a.salary}
// )

// console.log(res)
// ......................................

// FIND (it will return only one value )

// const employee=[
//         {id:1,name:"adnan"},
//         {id:2,name:"prince"},
//         {id:3,name:"razy"},
// ]
// const res=employee.find(
//         (val)=>{
//                 return val.id===3
//         }
// )
// console.log(res);
// Some And Every ()

// const array = [
//   { date: "07-06-22", temperature: 30, time: 12.3 },
//   { date: "07-06-22", temperature: 36, time: 14.3 },
//   { date: "07-06-22", temperature: 28, time: 16.3 },
//   { date: "08-06-22", temperature: 30, time: 12.3 },
//   { date: "08-06-22", temperature: 32, time: 12.5 },
//   { date: "08-06-22", temperature: 38, time: 2.3 },
//   { date: "08-06-22", temperature: 29, time: 15.3 },
//   { date: "08-06-22", temperature: 39, time: 17.3 },
//   { date: "09-06-22", temperature: 39, time: 17.3 },
//   { date: "09-06-22", temperature: 39, time: 17.3 },
//   { date: "09-06-22", temperature: 45, time: 17.3 },
//   { date: "10-06-22", temperature: 30, time: 17.3 },
//   { date: "10-06-22", temperature: 60, time: 17.3 },
// ];

// function check(arr) {(wrong way)
//   let newArray = [];
//   let newArray1 = [];
//   let newArray2 = [];
//   let temp=[]
//   let temp2=[]
// const date1=array.map((e)=>e.date)
// console.log(date1);
//   for (let item of arr) {
//         for(let i=0;i<date1.length;i++){
//                 if (item.date === date1[i]) {
//                         temp.push(item)
//                         console.log(temp,"temp");
//                       let min1 = Math.min(...temp.map((item) => item.temperature));
//                       let max1 = Math.max(...temp.map((item) => item.temperature));
//                       newArray1.push(
//                         { date:date1[i], min: min1, max: max1 });
//         }
// //     console.log(newArray1[newArray1.length-1],"newarray1");
// //     console.log(newArray2[newArray2.length-1],"newarray2");
// //     let finalarr=[newArray1[newArray1.length-1],newArray2[newArray2.length-1]]
// //     console.log(finalarr);
//   }
//   }}

// check(array);

// let myarr=[{id:1,name:"afaan"},{id:2,name:"aaa"},{id:3,name:"nnnn"}]
 
// var min = Math.min(...myarr.map(item => item.id));
// var max = Math.max(...myarr.map(item => item.id));

// console.log("min: " + min);
// console.log("max: " + max);

// var myArray = [
//         { id: 1, cost: 200},
//         { id: 2, cost: 1000},
//         { id: 3, cost: 50},
//         { id: 4, cost: 500}
//     ]
    
    
//     var min = Math.min(...myArray.map(item => item.cost));
//     var max = Math.max(...myArray.map(item => item.cost));
    
//     console.log("min: " + min);
//     console.log("max: " + max);
// .................................................................

// const array = [
//         { date: "07-06-22", temperature: 30, time: 12.3 },
//         { date: "07-06-22", temperature: 36, time: 14.3 },
//         { date: "07-06-22", temperature: 28, time: 16.3 },
//         { date: "08-06-22", temperature: 30, time: 12.3 },
//         { date: "08-06-22", temperature: 32, time: 12.5 },
//         { date: "08-06-22", temperature: 38, time: 2.3 },
//         { date: "08-06-22", temperature: 29, time: 15.3 },
//         { date: "08-06-22", temperature: 39, time: 17.3 },
//         { date: "09-06-22", temperature: 39, time: 17.3 },
//         { date: "09-06-22", temperature: 39, time: 17.3 },
//         { date: "09-06-22", temperature: 45, time: 17.3 },
//         { date: "10-06-22", temperature: 30, time: 17.3 },
//         { date: "10-06-22", temperature: 60, time: 17.3 },
//       ];
      


// let date=array.map((e)=>e.date)
// let finalrresult=[]
// date=[...new Set(date)]
// console.log(date);
// date.map(
//         (e)=>{
//                 let extract=array.filter((i)=>i.date==e)
//                 // console.log(extract,"extract");
//                 let min = Math.min(...extract.map((item) => item.temperature));("array ko htane k liye extract m ... diye")
//                 let max = Math.max(...extract.map((item) => item.temperature));
                
//                 let dummy={date:e,min:min,max:max}
//                 // console.log(extract);
//                 finalrresult.push(dummy)
                
//         }
        

// )
// console.log(finalrresult);

// ..............................................

//  FIND

// const myarr=["dog","cat","bird","squirrel","lion"]
// const user=[
//         {id:1,name:'adnan',salary:100000},
//         {id:2,name:'prince',salary:60000},
//         {id:3,name:'razy',salary:200000},
//         {id:4,name:'danish',salary:50000},
// ]

// const res1=myarr.find((item)=>item.length===4)
// const res2=user.find((item)=>item.id===3)
// console.log(res1);
// console.log(res2);

// ..................................................

// FILL METHOD

// let arr=[1,2,3,4,5,6,7,8,9]
// let arr1=[1,2,3,4,5,6,7,8,9]
// arr.fill(0)
// console.log(arr);
// arr1.fill("adnan",2,5)
// console.log(arr1);

// ......................

// SET 

// const arr=[1,2,2,3,3,3,3,4,5,6,7,7]
// const res=new Set(arr)
// console.log(res);
// let c=0;
// for(let v of res){
//         console.log(v);
//         c++;
// }
// console.log(c,"count");

// ................................................
// Multiple object create using function
// const userMethods={
//         about:function() {
//                 return `name is ${this.fname} and age is ${this.age}`
//         },
//         is18:function() {
//                 return this.age>=18
//         }
// }


// function userInfo(fname,lname,age,adress){
//         let obj={}
//         obj.fname=fname
//         obj.lname=lname
//         obj.age=age
//         obj.adress=adress
//         obj.about=userMethods.about
//         obj.is18=userMethods.is18
//         return obj
// }
// const user1=userInfo("shams","alam",21,"hutton road")
// console.log(user1.about(),user1);

// .......................................

// let obj1={
//         key1:1,key2:2
// }
// let obj2=Object.create(obj1)   ("it will store obj1 in proto of obj2")
// obj2.key3=3

// console.log(obj2.key1);

// ..............................................

// NEW KEYWORD
// *** 1)new keyword return an empty object(this={})  
//     2)return this
//     3) it will assign prototype object to __proto__ of this(mtlb agar koi key this obj m nhi h to phir uska proto m wo key hai ya nhi check kre ga or agr hoga to show hoga)
// function user(name,age){
//         this.name=name
//         this.age=age
// }
// user.prototype.about=function(){
//         console.log(this.name,this.age);
// }
// const user1=new  user("adnan",21)
// user1.about();
// ..............................................

// CLASS 


// class Animal{
//         constructor(name,age){
//                 this.name=name
//                 this.age=age
//         }
//         about() {
//                    return `name is ${this.name} and age is ${this.age}`
//                 }
//         is18() {
//                    return this.age>=18
//                 }

// }
// class Dog extends Animal{

//         constructor(name,age,speed){
//                 super(name,age)
//                 this.speed=speed
//         }
//         isSpeed(){
//                 return `${this.name} is running at ${this.speed}KMPH`
//         }
// }

// const animal1=new Animal("cat",7)
// const dog=new Dog("dog",17,40)

// console.log(animal1,dog.isSpeed());

// .............................................


// GETTER AND SETTERS

// "in getter we dont have to call the function"

// class Person{
//         constructor(fname,lname,age){
//                 this.firstname=fname
//                 this.lastname=lname
//                 this.age=age
//         }
//         get about() {
//                    return `name is ${this.firstname} ${this.lastname} and age is ${this.age}`
//                 }
//         setAbout(fullname){
//                         const[fname,lname]=fullname.split(" ")
//                         this.firstname=fname
//                         this.lastname=lname
//         }
//         setName(fname,lname,age){
//                 this.firstname=fname;
//                 this.lastname=lname
//                 this.age=age
//         }
//         }
// const person1=new Person("shams","alam",21)
// console.log(person1);
// console.log(person1.about);
// person1.setName("adnan","akhter",20)
// console.log(person1);
// person1.setAbout("akib alam")
// console.log(person1);

// ................................................

// STATIC METHODS AND PROPERTY IN CLASS

// class Person{
//                 constructor(fname,lname,age){
//                         this.firstname=fname
//                         this.lastname=lname
//                         this.age=age
//                 }
//                 static info(){
//                         return "this is person class"
//                 }
//                 static property="static property"
//                 get about() {
//                            return `name is ${this.firstname} ${this.lastname} and age is ${this.age}`
//                         }
//                 }
//                 console.log(Person.info());
//                 console.log(Person.property);
// .......................................................
// console.dir(window);
// // 1)
// let vowelCount="abcdEFU"
// let a=vowelCount.toLowerCase();
// console.log(a);
// for(let a of vowelCount){
//     let c=0;
//     console.log(a);
//     if(a=="a" || a=="e" || a=="i" || a=="o" ||a=="u"){
//         c++;
//         console.log(c);
//     }
// }
//  char=a.split("")
//  console.log(char);
//  // console.log(char);
// let c=0;
// for(let i=0;i<char.length;i++){
//     if(char[i]=="a" || char[i]=="e" || char[i]=="i" || char[i]=="o" ||char[i]=="u"){
//         c++;
//     }
// }
    
//     console.log(c,"count");

// 2)

// function max(arr){
//     let finalarr=[]
//     for(let  item of arr){
//         let maximum=Math.max(...item)
//         finalarr.push(maximum)
//     }
//     return finalarr
// }
// let a=max([[2,3,4,5],[6,8,7,2],[3,9,12,13,41]])
// console.log(a);


// output=[5,8,41]
// .......................................................................

                            // PART 2

// 1)     CLOSURES EXAMPLE

// function power(n){
//     return function(x){
//         return x**n
//     }
// }
// const ans=power(2)
// console.log(ans(5));
// .................................................
// function name(){
//     let counter=0;
//     return function(){
//         if(counter<1){
//             console.log("you called me");;
//             counter++;
//         }
//         else{
//             console.log("Already call ho chuka h"); 
//         }
//     }
   
// }

// const b=name()
// b()
// b()
// b()
// ............................................


// const h1=console.log(document.getElementById("hello"));
// document.querySelector("#h1")
// console.log(document.getElementsByTagName("h1"));

// h1.getBoundingClientRect()
// let a=max([[2,3,4,5],[6,8,7,2],[3,9,12,13,41]])
// console.log(a);


// output=[5,8,41]



// function max(arr){
// let finalarr=[];
// for(let item of arr){
//     console.log(item);
//     let max=Math.max(...item)
//     console.log(max);
//     finalarr.push(max)


// }
// return finalarr

// }
// let a=max([[2,3,4,5],[6,8,7,2],[3,9,12,13,41]])
// console.log(a);

// ................................................

// const body=document.querySelector("body")

// const button=document.querySelector("button")

// function changeColor(){
//     const red=Math.random()*256
//     const blue=Math.random()*256
//     const green=Math.random()*256
//     const rgb=`rgb(${red},${blue},${green})`
//     body.style.backgroundColor=rgb
// }
// button.addEventListener("click",changeColor)

// .........................................................................


// const body=document.querySelector("body")

// const button=document.querySelector("button")
// button.textContent="Stop Changing"
// function changeColor(){
//     const red=Math.random()*256
//     const blue=Math.random()*256
//     const green=Math.random()*256
//     const rgb=`rgb(${red},${blue},${green})`
//     body.style.backgroundColor=rgb
    
// }
// const id=setInterval(()=>changeColor(),2000)

// button.addEventListener("click",()=>{clearInterval(id);
//                             button.textContent= body.style.backgroundColor
//                         })


// .........................................................................
                                // PYRAMID OF DOM

// const h1=document.querySelector("#one")
// const h2=document.querySelector("#two")
// const h3=document.querySelector("#three")
// const h4=document.querySelector("#four")
// const h5=document.querySelector("#five")
// const h6=document.querySelector("#six")
// const h7=document.querySelector("#seven")

// setTimeout(
//     ()=>{
//         h1.textContent="one"
//         h1.style.color="red"
//         setTimeout(
//             ()=>{
//                 h2.textContent="two"
//                 h2.style.color="red"
//                 setTimeout(
//                     ()=>{
//                         h3.textContent="three"
//                         h3.style.color="red"
//                         setTimeout(
//                             ()=>{
//                                 h4.textContent="four"
//                                 h4.style.color="red"
//                                 setTimeout(
//                                     ()=>{
//                                         h5.textContent="five"
//                                         h5.style.color="red"
//                                         setTimeout(
//                                             ()=>{
//                                                 h6.textContent="six"
//                                                 h6.style.color="red"
//                                                 setTimeout(
//                                                     ()=>{
//                                                         h7.textContent="seven"
//                                                         h7.style.color="red"
//                                                     },2000
//                                                 )
//                                             },2000
//                                         )
//                                     },2000
//                                 )
//                             },2000
//                         )
//                     },2000
//                 )
//             },2000
//         )
//     },2000
// )

// ................................................................................
//                                              CALLBACK HELL

// const h1=document.querySelector("#one")
// const h2=document.querySelector("#two")
// const h3=document.querySelector("#three")
// const h4=document.querySelector("#four")
// const h5=document.querySelector("#five")
// const h6=document.querySelector("#six")
// const h7=document.querySelector("#seven")


// function change(element,text,color,time,onSuccess,onFailure){
//     setTimeout(()=>{
//         if(element){
//             element.textContent=text
//             element.style.color=color
    
//         if(onSuccess){
//             onSuccess()
//         }
//     }
//     else{
//         if(onFailure)
//         onFailure()
//     }
//     },time)
    
// }
// change(h1,"one","red",2000,()=>{
//     change(h2,"two","red",2000,()=>{ 
//         change(h3,"three","red",2000,()=>{  
//             change(h4,"four","red",2000,()=>{
//                 change(h5,"five","red",2000,()=>{  
//                     change(h6,"six","red",2000,()=>{
//                         change(h7,"seven","red",2000,()=>{  
//                         },()=>{console.log("not exist");}
//                         )  
//                     },()=>{console.log("not exist");}
//                     )
//                 },()=>{console.log("not exist");}
//                 ) 
//             },()=>{console.log("not exist");}
//             )
//         },()=>{console.log("not exist");}
//         )
//     },()=>{console.log("not exist");}
//     )
// },()=>{console.log("not exist");}
// )
// change(h1,"one","red",2000,()=>{  
// },()=>{console.log("not exist");}
// )
// ................................................................................................

//                              PROMISE

// const bucket=["rices","salt","vegetables","cake","choclate"]

// const promise=new Promise(
//     (res,rej)=>{
//         if(bucket.includes("rice") && bucket.includes("salt") && bucket.includes("vegetables")){
//             res("Fried rice")
//         }
//         else{
//             rej("couldn't make it")
//         }
//     }
// )

// console.log(promise);
// promise.then((res)=>{console.log(res);}).catch((error)=>{console.log(error);})

// ..............................................................

// function myPromise(){
// const bucket=["rice","salt","vegetables","cake","choclate"]
//     return new Promise(
//         (res,rej)=>{
//             if(bucket.includes("rice") && bucket.includes("salt") && bucket.includes("vegetables")){
//                 res("Fried rice")
//             }
//             else{
//                 rej("couldn't make it")
//             }
//         }
//     )
// }

// myPromise().then((res)=>{console.log(res);}).catch((error)=>{console.log(error);})

// .......................................................

// function promise(){
//     return new Promise((res,rej)=>
//     {
//         res("foo")
//     }
//     )
// }
// promise().then(val=>{
//     console.log(val);
//     val+="baar"
//     return val
// }).then(val=>{
//     console.log(val);
//     val+="baaaz"
//     return val
// }).then(val=>{console.log(val);})

// ..............................................

// const h1=document.querySelector("#one")
// const h2=document.querySelector("#two")
// const h3=document.querySelector("#three")
// const h4=document.querySelector("#four")
// const h5=document.querySelector("#five")
// const h6=document.querySelector("#six")
// const h7=document.querySelector("#seven")
// function change(element,text,color,time){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             if(element){
//                 element.textContent=text
//                 element.style.color=color
//                 res()
//             }
//             else{
//                 rej("rejected")
//             }
//         },time)
//     })
// }

// change(h1,"one","red",2000)
// .then(()=>change(h1,"one","red",2000))
// .then(()=>change(h2,"two","red",2000))
// .then(()=>change(h3,"three","red",2000))
// .then(()=>change(h4,"four","red",2000))
// .then(()=>change(h5,"five","red",2000))
// .then(()=>change(h6,"six","red",2000))
// .then(()=>change(h7,"seven","red",2000))
// .catch((error)=>{console.log(error)})

// ...............................................
//                       XML HTTP REQUEST

// const url="https://jsonplaceholder.typicode.com/posts"
// const xhr=new XMLHttpRequest()

// xhr.open("GET",url)

// xhr.onload=function(){
//     if(xhr.status>=200 && xhr.status<300){
//         const response=xhr.response
//         const data=JSON.parse(response)
//         console.log(data);
//     }
//     else{
//         console.log("something wrong");
//     }
   
// }
// xhr.onerror=()=>{
//     console.log("network error");
// }
// xhr.send()

// ............................