function greet(){
    document.write("This is text");
}

//to create element multiple times
function elementCreation(){
    var ele = document.createElement('h2');
    ele.textContent = 'TechM';
    document.body.appendChild(ele);
}


//to create element only once
var ele = document.createElement('p');
document.body.appendChild(ele);

function elementCreation(){
    ele.textContent = 'Training';
}


//to print data in console by clicking on a text
function showDate(){
  var ele=document.getElementById('show');
  console.log(ele.textContent);
}