/*
Email:utsav_patel@student.uml.edu
	Name: Utsav Patel
	I am a junior/senoir at Umass Lowell in  91.61 GUI Programming I
	91.461 Assignment:  Creating Your First Web Page
	Utsav Patel, UMass Lowell Computer Science, upatel@cs.uml.edu
	Copyright (c) 2019 by Utsav Patel.  All rights reserved.  May be
	freely copied or excerpted for educational purposes with credit to
	the author.
	updated by UP on december 20th, 2019 at 9:23 AM
	This website was checked using validator.nu which provided no errors*/
var pieces= [
	{"letter":"A", "value":1,  "amount":9},
	{"letter":"B", "value":3,  "amount":2},
	{"letter":"C", "value":3,  "amount":2},
	{"letter":"D", "value":2,  "amount":4},
	{"letter":"E", "value":1,  "amount":12},
	{"letter":"F", "value":4,  "amount":2},
	{"letter":"G", "value":2,  "amount":3},
	{"letter":"H", "value":4,  "amount":2},
	{"letter":"I", "value":1,  "amount":9},
	{"letter":"J", "value":8,  "amount":1},
	{"letter":"K", "value":5,  "amount":1},
	{"letter":"L", "value":1,  "amount":4},
	{"letter":"M", "value":3,  "amount":2},
	{"letter":"N", "value":1,  "amount":6},
	{"letter":"O", "value":1,  "amount":8},
	{"letter":"P", "value":3,  "amount":2},
	{"letter":"Q", "value":10, "amount":1},
	{"letter":"R", "value":1,  "amount":6},
	{"letter":"S", "value":1,  "amount":4},
	{"letter":"T", "value":1,  "amount":6},
	{"letter":"U", "value":1,  "amount":4},
	{"letter":"V", "value":4,  "amount":2},
	{"letter":"W", "value":4,  "amount":2},
	{"letter":"X", "value":8,  "amount":1},
	{"letter":"Y", "value":4,  "amount":2},
	{"letter":"Z", "value":10, "amount":1},
];

var START_Number = 111;
var tilecount = 0;
//score which will be set to 0
var score=0;
var verticalletters = new Array(7);
var horizontalletters = new Array(7);
//start game and start the movetile function so user can drag and drop
$( document ).ready(function() {
localStorage.clear();
start();
movetile();
});

//This will be submmiting the word and printing message if when check is clicked
function submit(){
	var message = "";
    if (verticalletters !== "") {
        if (!check(verticalletters)) {
            message = "Invalid vertical word/not in dict\n";
        } else {
            message = "Vertical word:success please click next word to continue\n";
        }
    }
    if (horizontalletters !== "") {
        if (!check(horizontalletters)) {
            message += "Invalid Horizontal word /not in dict";
        } else {
            message += "Horizontal word: success please click next word to continue";
        }
    }
    alert(message);
}
//it will validate the word in dictionary
function check(word){
	var presentletters = "";
	for (var i = 0; i < word.length; i++) {
			if (typeof word[i] === 'undefined') {

			} else {
					presentletters += word[i];
			}
	}
	if (dict[ presentletters] === true) {
			return true;
	}
	return false;
}
//this will  show/update the word
function updateWord(word,id) {
    var presentletters = "";
    for (var i = 0; i < word.length; i++) {
        if (typeof word[i] === 'undefined') {

        } else {
            presentletters += word[i];
        }
    }
    if (presentletters) {
        $('#'+id).html(presentletters);

    }
}
//this feature will be used to drag and drop the tiles on the board
function movetile(){
    $("#rack").droppable({accept: '.image'});
    $(".image").draggable({snap: ".blocks", snapMode: "inner", revert: 'invalid'});
    function Drag(event, ui) {

        if (ui.draggable.attr("id") == verticalletters[$(this).attr("id")]) {
            verticalletters[$(this).attr("id")] = "";
 	    updateWord(verticalletters,"verticalletters");
        }
	if (ui.draggable.attr("id") == horizontalletters[$(this).attr("id")]) {
            horizontalletters[$(this).attr("id")] = "";
 	    updateWord(horizontalletters,"horizontalletters");
        }

    }
    $(".blocks").droppable({accept: '.image', drop: Drop, out: Drag});

    //this will be used when a title is droped in the board
    function Drop(event, ui) {
        var letter = ui.draggable.prop('id');
        var piece = $(this).attr("id");
        var number = parseInt(piece);
				if(number==6){
					score=0;
  	   		verticalletters[number] = letter;
           updateWord(verticalletters,"verticalletters");
	 			 	horizontalletters[0] = letter;
           updateWord(horizontalletters,"horizontalletters");
				 	}
					else if(number<6){
						score=0;
	  			verticalletters[number] = letter;
          updateWord(verticalletters,"verticalletters");
				}
				else if(number>6){
					score=0;
					horizontalletters[number-6] = letter;
        updateWord(horizontalletters,"horizontalletters");

	}
       scorecounter(verticalletters);
       scorecounter(horizontalletters);
    }
}
//this will update the score on the side
function scorecounter(word) {
    var scoretotal = 0;
    var scoringdouble = 0;
    for (var i = 0; i < word.length; i++) {
        for (var j = 0; j < pieces.length; j++) {
            if (word[i] != "" && (word[i] == pieces[j].letter)) {
		//if there is a double word it will count the points in that way and
		//if it is not matched then add the values
                if (i == 2) {
                    scoretotal +=pieces[j].value * 2;
                }
								if (i == 5) {
                    scoringdouble++;
                    scoretotal += pieces[j].value;
                }
								if(i!=2 && i != 5)
                {
                    scoretotal += pieces[j].value;
                }
            }
        }
    }
    //Double the score
    if(scoringdouble!=0)
    {
        score += scoretotal * 2;
    }else{
 	 score += scoretotal
   }
	 //this will have the score/ouput the score in the html file/on the screen
    $('#scoretrack').html(score);
}
//start game
function resetgame(){
	localStorage.clear();
	start();
	movetile();
}
function nextlevel() {
    learning();
    localStorage.setItem("tilecount", tilecount);
    localStorage.setItem("scoretrack", score);
    start();
    movetile();
}
//When next button is clicked it will check whether  or not  it has succeed if not it will tell what can be done next time
function learning(){
	var message = "";
    if (verticalletters !== "") {
        if (!check(verticalletters)) {
            message = "Invalid vertical word,not in dict but now you decided to contiune if you want to become expert in your learning please use check/submit \n";
        } else {
            message = "Vertical word:success\n";
        }
    }
    if (horizontalletters !== "") {
        if (!check(horizontalletters)) {
            message += "Invalid Horizontal word,not in dict but now you decided to contiune if you want to become expert in your learning please use check/submit";
        } else {
            message += "Horizontal word: success";
        }
    }
    alert(message);
}
//this will start the game
function start(){
	//when reset option is clicked it will reset the tiel count otherwise to 98
	if (localStorage.getItem("tilecount") !== null && localStorage.getItem("tilecount") !== "undefined") {
		tilecount = localStorage.getItem("tilecount");
} else {
		tilecount = 0;
}
//when reset option is clicked it will reset the score to 0
if (localStorage.getItem("scoretrack") !== null && localStorage.getItem("scoretrack") !== "undefined") {
		score = localStorage.getItem("scoretrack");
}
else{
	score=0;
}
var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	var presenttile = "";
	var tiles = START_Number - tilecount;

	if (tiles > 13)
			tiles = 13;
	for (i = 0; i < tiles; i++) {
			var num = Math.floor((Math.random() * 26));
			letter = alpha[num];
			presenttile += '<image class="image" id="' + letter + '" src="images/Scrabble_Tile_' + letter + '.jpg" height="62" width="62"/>';
			tilecount++;
	}
	//check how many titles
	var lefttitle = START_Number - tilecount;
	if (lefttitle < 0)
			lefttitle = 0;

 verticalletters = new Array(7);
 horizontalletters = new Array(7);

$("#verticalletters").html(verticalletters);
$("#horizontalletters").html(horizontalletters);
$("#scoretrack").html(score);
  $("#tilecount").html(lefttitle);
$("#titlerack").html(presenttile);
movetile();
}
