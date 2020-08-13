var allbutton=document.getElementsByTagName('button');

var copybutton=[];
for(var i=0 ; i<allbutton.length ;i++){
    copybutton.push(allbutton[i].classList[1])

}


function changecolor(selectcolor){
    if(selectcolor.value=='red'){
        redcolor();

    }
    else if(selectcolor.value=='blue'){
        bluecolor();
    }
    else if(selectcolor.value=='green'){
        greencolor();
    }
    else if(selectcolor.value=='reset'){
        resetcolor();
    }
    else{
        randomcolor();
    }  
}

function redcolor(){
    for(var i=0; i<allbutton.length;i++){
        allbutton[i].classList.remove(allbutton[i].classList[1]);
        allbutton[i].classList.add('btn-danger');

    }
}

function greencolor(){
    for(var i=0; i<allbutton.length;i++){
        allbutton[i].classList.remove(allbutton[i].classList[1]);
        allbutton[i].classList.add('btn-success');

    }
}

function bluecolor(){
    for(var i=0; i<allbutton.length;i++){
        allbutton[i].classList.remove(allbutton[i].classList[1]);
        allbutton[i].classList.add('btn-primary');

    }
}

 
