//longhand
function sayhello(name){
    console.log("hai..",name)
}
sayhello("Sunny");

setTimeout(function(){
    console.log("loading done..")
}, 3000);


var list = ['cat','dog','cow','ox','hen'];
list.forEach(function(item){
    console.log(item);
})



//arrow function
sayhello = (name) => console.log("hallo",name);
sayhello('Deepu');

setTimeout(() => console.log("Started"), 5000);

var list = ['pen','paper','page','lines'];
list.forEach((item) => console.log(item));