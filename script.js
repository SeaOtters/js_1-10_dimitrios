
//write first method
function sleepIn(x,y) {
    return x;
}

//write second method
function nextOne(param1, param2) {
    return param1;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += fizz_buzz(15);

    //document.getElementById("output").innerHTML += caughtSpeeding(60, false);
    //document.getElementById("output").innerHTML += sleepIn(true, false);
    //document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}
     function sleep_in(x , y){
    var check = false;
    if( y == true){
        check = true;
    }else if(x == true){
        check = false;
    } else{
        check = true;
    }
    return check;
}


     function monkey_trouble(a_smile , b_smile){
    var trouble = false;
    if( a_smile && b_smile){
        trouble = true;
    }else if(!a_smile && !b_smile){
        trouble = true;
    }else{
        trouble == false;
    }
    return trouble;
}

    function string_times(x , y){
    var printing = "";

    for( i = 0; i < y; i++){
        printing += x;
    }
    return printing;
}

     function front_times (x ,y){
    var printing = "";
    var str = x.substr(0, 3);
    for ( i = 0; i < y; i++){
        printing += str;
    }
    return printing;
}

function string_bits (word){
    var y = word.length
    var x = word
    var printing = "";
    for ( i = 0; i < y; i += 2){
        printing += x.substring(i, i + 1)
    }
    return printing;
}



function caughtSpeeding(x , y){
    var speed = x;
    var birthday = y;
    var result = 0;
    if(birthday == true){
        speed = speed - 5;
    }
    if (speed <= 60){
        result = 0;
    }else if(speed > 60 && speed < 81){
        result = 1;
    }else if(speed > 81){
        result = 2;
    }
    return result;
}



function fizz_buzz(x) {
    var answer1 = "Fizz"
    var answer2 = "Buzz"
    var answer3 = "FizzBuzz"
    var answer = 0;
    var other = x + "!";
    if (x % 3 == 0 && x % 5 == 0) {
        answer = answer3;
    } else if (x % 5 == 0) {
        answer = answer2;
    } else if(x % 3 == 0){
        answer = answer1;
    }else{
        answer = other;
    }
    return answer;
}


function teaParty(x , y) {
    var answer = 0;
    if (x < 5 || y < 5) {
        answer = 0;
    } else if (x >= 2*y && x >= 10 || y >= x*2 && y >= 10) {
        answer = 2;
    } else if (x >= 5 && y >= 5) {
        answer = 1;
    }
    return answer;
}

function blackjack(x,y){
    var result = 0;
    if(x <= 21 && y > 21){
        result = x;
    }else if(x > 21 && y <= 21){
        result = y;
    }else if(x <= 21 && x > y){
        result = x;
    }else if(y <= 21 && y > x) {
        result = y;
    }else if(x > 21 && y > 21){
        result = 0;
    }
     return result;
}

function loneSum(a,b,c){
    var sum = 0;
    if(a != b && b != c && c != a){
        sum = a + b + c;
    }else if(a == b && b != c && c != a){
        sum = c;
    }else if(a != b && b == c && c != a){
        sum = a;
    }else if(a != b && b != c && c == a){
        sum = b;
    }else if (a == b && b == c && c == a){
        sum = 0;
    }
    return sum;
}