var matches = document.getElementById('Marks');
matches.style.fontsize = '40px';
matches.style.color = "red";
//matches.style.backgroundcolor = 'blue';

var matches = document.getElementsByTagName('div');
for(var ele in matches){
    matches[ele].style.background = 'green';
}

var matches = document.getElementsByClassName('test');
   ////document.write('Number of elements selected:' +matches.length);  //2
matches[0].style.fontWeight = 'bold';   //first element
matches[0].style.color = 'purple';
matches[matches.length-1].style.fontStyle = 'Arial';


for(var ele in matches){
    matches[ele].style.background = 'Red';
}

//querySelectorAll
var listsEle = document.querySelectorAll('ul li');

for(var ele of listsEle){
    document.write(ele.innerHTML + '<br>');
}

listsEle = document.querySelectorAll('ul li.tick');
listsEle[0].style.backgroundColor = 'blue';
listsEle[1].style.backgroundColor = 'orange';


//querySelector
var paraEle = document.querySelector('.test');
paraEle.style.color = 'purple';
paraEle.style.fontSize = '50px';