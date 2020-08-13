function age(){
var birthyear=prompt('what is your birthday year');
var result=(2020-birthyear)*365
var h2=document.createElement('h2');
var text=document.createTextNode('You are'+ ' '+result + ' ' + 'days')
h2.setAttribute('id','getdays')
h2.appendChild(text)
document.getElementById('result').appendChild(h2)
} 

function reset(){
    document.getElementById('getdays').remove();
}