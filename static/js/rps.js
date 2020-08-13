function rps(yourchoice){
    console.log('human choice',yourchoice.id);
    var humanchoice,computerchoice;
    humanchoice=yourchoice.id;
    computerchoice=numbertochoice(botchoice());
    console.log('computer choice',computerchoice)
    result=decide(humanchoice,computerchoice);//[0,1] yeha  0 aayo vanne human lost 1 computer won
    console.log(result)
    message=finalmessage(result);
    console.log('final result',message);
    frontend=rpsfrontend(yourchoice.id,computerchoice,message);
}


function botchoice(){
    return parseInt(Math.random()*3);
}

function numbertochoice(number){
    return ['rock','paper','scissors'][number]
}

function decide(yourchoice,bot){
    var rpsdata={
        'rock':{'scissors':1,'rock':0.5,'paper':0},// rock ley k sanga harxa .. harcha lai 0 define garne 
        'paper':{'rock':1,'paper':0.5,'scissors':0},//paper ley k sanga harxa .. harcha lai 0 define garne
        'scissors':{'paper':1,'scissors':0.5,'rock':0},//scissors ley k sanga harxa .. harcha lai 0 define garne

    };

    var yourScore = rpsdata[yourchoice][bot];
    console.log(yourScore);
    var computerscore = rpsdata[bot][yourchoice];
    console.log(computerscore);

    return [yourScore,computerscore];
}

function finalmessage([yourScore,computerscore]){
    if(yourScore==0){
        return{'message':'You Lost','color':'red'}
    }
    else if(yourScore==0.5){
        return{'message':'Draw','color':'yellow'}

    }

    else{
        return{'message':'You win','color':'green'}

    }
}


function rpsfrontend(humanImageChoice,computerImagechoice,finalmessage){
    var images={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src,

    };

    // removing the all images for the final result
document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();


var humandiv = document.createElement('div');
var computerdiv = document.createElement('div');
var messagediv = document.createElement('div');
var playagaindiv = document.createElement('div');

 
humandiv.innerHTML = "<h3 style='margin-top:0px;'>Your Choice </h3>"+"<img src='"+images[humanImageChoice]+"'height=150px width=150px>";

computerdiv.innerHTML ="<h3 style='margin-top:0px;'>Computer Choice </h3>"+"<img src='"+images[computerImagechoice]+"'height=150px width=150px>"
messagediv.innerHTML = "<h1 style='color:"+finalmessage.color+"; font-size:50px; padding:30px;'>" +finalmessage.message + "</h1>"
playagaindiv.innerHTML = "<h1 style=' font-size:50px; padding:30px;'> <a href='rockpaper.html' style='text-decoration: none; color:CFEE9E;'> Play again</a></h1>"


document.getElementById('flex-container-div').appendChild(humandiv);
document.getElementById('flex-container-div').appendChild(messagediv);
document.getElementById('flex-container-div').appendChild(computerdiv);
document.getElementById('flex-container-div').appendChild(playagaindiv);



}