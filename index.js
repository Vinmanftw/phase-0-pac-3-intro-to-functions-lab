//returns
function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function sayHiToGrandma(string){
    if(string==="I love you, Grandma."){
        return "I love you, too.";
    }
    else if(string=== string.toLowerCase()){
        return "I can't hear you!";
    }
    else if(string=== string.toUpperCase()){
        return "YES INDEED!";
    }
}
//logs
function logShout(string){
    console.log(shout(string));
}

function logWhisper(string){
    console.log(whisper(string));
}

