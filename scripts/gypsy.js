var gypsyDialog = ["<p>Please choose what kind of<br>reading you would like to have.</p>"];

var lastDialog = gypsyDialog[gypsyDialog.length - 1];

function rType(T) {
	$("#choice1").css("transform","rotateY(540deg)");
	$("#choice2").css("transform","rotateY(540deg)");
	$("#choice3").css("transform","rotateY(540deg)");

	var type = T;
	switch(T) {
		case 1: 
		gypsyDialog.push("<p>So you want to know about Love</p>");
		readingT = "love";
		break;
		case 2:
		gypsyDialog.push("<p>So you want to know about Wealth</p>");
		readingT = "wealth";
		break;
		case 3:
		gypsyDialog.push("<p>So you want to know about the Spirit</p>");
		readingT = "spirit";
		break;
		default:
		gypsyDialog.push(0);
	}

	lastDialog = gypsyDialog[gypsyDialog.length - 1];
	$("#dialog").html(lastDialog);
	$(".answerImg").css("display","flex");
	$("#pYes").attr("onclick","startRead()");
	$("#pNo").attr("onclick","choiceAgain()");
	$("#choice1").attr("onclick","0");
	$("#choice2").attr("onclick","0");
	$("#choice3").attr("onclick","0");
	
}

function choiceAgain() {
	$("#choice1").css("transform","rotateY(0deg)");
	$("#choice2").css("transform","rotateY(0deg)");
	$("#choice3").css("transform","rotateY(0deg)");
	$("#choice1").attr("onclick","rType(1)");
	$("#choice2").attr("onclick","rType(2)");
	$("#choice3").attr("onclick","rType(3)");
	$("#dialog").html("<p>Maybe you want to know about something else?</p>");
	$(".answerImg").css("display","none");
}

function startRead() {
	$("#choice").css("display","none");
	$(".answerImg").css("display","none");
	$("#board").css("display","table");
	$("#card1B").attr("src","images/card_cover.jpg");
	$("#card2B").attr("src","images/card_coverDark.jpg");
	$("#card3B").attr("src","images/card_coverDark.jpg");
	$("#card1").attr("onclick","flipCard1()");
	$(".history").css("display","block");
	$("#clickM").css("display","block");
	gypsyDialog.push("<p>This card represents your past</p>");
	lastDialog = gypsyDialog[gypsyDialog.length - 1];
	$("#dialog").html(lastDialog);
	$("#choice1").attr("onclick","0");
	$("#choice2").attr("onclick","0");
	$("#choice3").attr("onclick","0");
}


function nextD() {
	gReact();
	$("#pNo").attr("onclick","nextD1()");
}

var D = 0;

function nextD1() {

	switch(readingT) {
		case "love": 

		if (auraLevel > 79){
			
			randomD = lvp[0];

			if (D < randomD.length){
				
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD1a();	
			};

		} else if (auraLevel > 59) {

			randomD = lpo[0];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD1a();		
			};

		} else if (auraLevel > 39) {

			randomD = lnu[0];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD1a();		
			};

		}else if (auraLevel > 19) {

			randomD = lne[0];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD1a();		
			};

		}else if (auraLevel > 0) {

			randomD = lvn[0];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD1a();		
			};

		} else {};

		break;

		case "wealth": 

		if (auraLevel > 79){

			randomD = wvp[0];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD1a();		
			};

		} else if (auraLevel > 59) {

			randomD = wpo[0];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD1a();		
			};

		} else if (auraLevel > 39) {

			randomD = wnu[0];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD1a();		
			};

		}else if (auraLevel > 19) {

			randomD = wne[0];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD1a();		
			};

		}else if (auraLevel > 0) {

			randomD = wvn[0];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD1a();		
			};

		} else {};

		break;

		case "spirit": 

		if (auraLevel > 79){
			
			randomD = svp[0];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD1a();		
			};

		} else if (auraLevel > 59) {
			
			randomD = spo[0];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD1a();		
			};

		} else if (auraLevel > 39) {
			
			randomD = snu[0];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD1a();		
			};

		}else if (auraLevel > 19) {
			
			randomD = sne[0];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD1a();		
			};

		}else if (auraLevel > 0) {
			
			randomD = svn[0];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD1a();		
			};

		} else {};
		break;

		default:
		gypsyDialog.push(0);
	}
}

function nextD1a() {
	$("#card2B").attr("src","images/card_cover.jpg");
	$("#card2B").css("cursor","pointer");
	$("#card2").attr("onclick","flipCard2()");
	$("#pNo").attr("onclick","0");
	$("#pNo").attr("src","images/nextD.png");
	$("#dialog").html("<p>This card represesnts<br>your present</p>");
	gypsyDialog.push("<p>This card represesnts your present</p>");
}

function nextD2a() {
	gReact();
	$("#pNo").attr("onclick","nextD3()");
}

function nextD3() {

	switch(readingT) {
		case "love": 

		if (auraLevel > 79){
			
			randomD = lvp[1];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD3a();	
			};

		} else if (auraLevel > 59) {
			
			randomD = lpo[1];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD3a();		
			};

		} else if (auraLevel > 39) {
			
			randomD = lnu[1];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD3a();		
			};

		}else if (auraLevel > 19) {
			
			randomD = lne[1];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD3a();		
			};

		}else if (auraLevel > 0) {
			
			randomD = lvn[1];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD3a();		
			};

		} else {};

		break;

		case "wealth": 

		if (auraLevel > 79){
			
			randomD = wvp[1];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD3a();		
			};

		} else if (auraLevel > 59) {
			
			randomD = wpo[1];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD3a();		
			};

		} else if (auraLevel > 39) {
			
			randomD = wnu[1];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD3a();		
			};

		}else if (auraLevel > 19) {
			
			randomD = wne[1];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD3a();		
			};

		}else if (auraLevel > 0) {
			
			randomD = wvn[1];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD3a();		
			};

		} else {};

		break;

		case "spirit": 

		if (auraLevel > 79){
			
			randomD = svp[1];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD3a();		
			};

		} else if (auraLevel > 59) {
			
			randomD = spo[1];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD3a();		
			};

		} else if (auraLevel > 39) {
			
			randomD = snu[1];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD3a();		
			};

		}else if (auraLevel > 19) {
			
			randomD = sne[1];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD3a();		
			};

		}else if (auraLevel > 0) {
			
			randomD = svn[1];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD3a();		
			};

		} else {};
		break;

		default:
		gypsyDialog.push(0);
	}
}

function nextD3a() {
	$("#card3B").attr("src","images/card_cover.jpg");
	$("#card3B").css("cursor","pointer");
	$("#card3").attr("onclick","flipCard3()");
	$("#pNo").attr("onclick","0");
	$("#pNo").attr("src","images/nextD.png");
	$("#dialog").html("<p>This card is about<br>your future</p>");
	gypsyDialog.push("<p>This card is about your future</p>");
}

function nextD4a() {
	gReact();
	$("#pNo").attr("onclick","nextD5()");
}

function nextD5() {

	switch(readingT) {
		case "love": 

		if (auraLevel > 79){
			
			randomD = lvp[2];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD5a();	
			};

		} else if (auraLevel > 59) {
			
			randomD = lpo[2];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD5a();		
			};

		} else if (auraLevel > 39) {
			
			randomD = lnu[2];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD5a();		
			};

		}else if (auraLevel > 19) {
			
			randomD = lne[2];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD5a();		
			};

		}else if (auraLevel > 0) {
			
			randomD = lvn[2];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD5a();		
			};

		} else {};

		break;

		case "wealth": 

		if (auraLevel > 79){
			
			randomD = wvp[2];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD5a();		
			};

		} else if (auraLevel > 59) {
			
			randomD = wpo[2];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD5a();		
			};

		} else if (auraLevel > 39) {
			
			randomD = wnu[2];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD5a();		
			};

		}else if (auraLevel > 19) {
			
			randomD = wne[2];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD5a();		
			};

		}else if (auraLevel > 0) {
			
			randomD = wvn[2];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD5a();		
			};

		} else {};

		break;

		case "spirit": 

		if (auraLevel > 79){
			
			randomD = svp[2];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD5a();		
			};

		} else if (auraLevel > 59) {
			
			randomD = spo[2];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD5a();		
			};

		} else if (auraLevel > 39) {
			
			randomD = snu[2];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD5a();		
			};

		}else if (auraLevel > 19) {
			
			randomD = sne[2];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD5a();		
			};

		}else if (auraLevel > 0) {
			
			randomD = svn[2];

			if (D < randomD.length){
				$("#dialog").html("<p>" + randomD[D] + "</p>");
				gypsyDialog.push("<p>" + randomD[D] + "</p>");
				D++;		

			} else {
				D = 0;
				nextD5a();		
			};

		} else {};
		break;

		default:
		gypsyDialog.push(0);
	}
}

function nextD5a() {
	$("#dialog").html("<p>Would you like another reading?</p>");
	gypsyDialog.push("<p>Would you like another reading?<p>");
	$("#pYes").attr("src","images/yes.png");
	$("#pNo").attr("src","images/no.png");
	$("#pYes").attr("onclick","pSelectY()");
	$("#pNo").attr("onclick","pSelectN()");
}


function gReact() {

	cAura();
	
	pState = pState + 1;

	if (tempAura == auraLevel){
		shuffleDialog(gNeutral);
		$("#dialog").html("<p>"+gNeutral[0]+"</p>");
		gypsyDialog.push("<p>"+gNeutral[0]);
	} else if (tempAura >= auraLevel) {
		shuffleDialog(gNegative);	
		$("#dialog").html("<p>"+gNegative[0]+"</p>");
		gypsyDialog.push("<p>"+gNegative[0]+"</p>");
	} else if (tempAura <= auraLevel) {
		shuffleDialog(gPositive);	
		$("#dialog").html("<p>"+gPositive[0]+"</p>");
		gypsyDialog.push("<p>"+gPositive[0]+"</p>");
	} else {};
}

function shuffleDialog(dialog){
	var currentIndex = dialog.length, temporaryValue, randomIndex;
	while (0 !== currentIndex){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = dialog[currentIndex];
		dialog[currentIndex] = dialog[randomIndex];
		dialog[randomIndex] = temporaryValue;
	}
}


var gPositive = [
"This is a good card",
"I have a good feeling about this card",
"It seems like the stars are in your favor",
"I really like this card, I think you will too",
"I have good news for you",
"I really like it when I draw good cards",
"This is a really good sign",
"This card is reacting positive towards your aura",
"Looks like Fate is in your favor",
"The stars are on your side",
"Good fortune is around you",
"I see good things for you",
"This is a blessing from the Universe",
"I'm glad this card came up",
"This must be carrying a lucky charm",
"It seems like good Karma is with you",
"This is a very fortunate card indded",
"The planets must be aligned with your Zodiac sign",
"What a pleasant surprise"
];

var gNegative = [
"This is a bad card for you",
"This is most unfortunate",
"...hmmm I wasn't expecting this",
"Okay this isn't as bad as it looks",
"Just remember that things are going to be okay",
"I don't want you to worry but...",
"It seems like bad Karma has came back to you",
"This is a bad omen",
"I suddendly feel a cold chill up my spine",
"Maybe you should get blessing when this is over",
"Has a black cat crossed your path?",
"Why did it have to be this card?",
"I hate to be the bearer of bad news",
"I sense a dark shadow over your aura",
"It looks like your luck took a turn for the worst",
"I wish I had better news but I will not lie",
"This isn't the worst card to come up, but it's still bad",
"I wonder if you are making up for a past life",
"I only read the cards, I don't bring bad fortune",
"With your luck, you probably already saw this coming",
"It seems like you are going through a rough spell",
"What's life without a few challenges",
"This seems pretty ominous"
];

var gNeutral = [
"Hmmm that's strange...",
"I expected something like this",
"I haven't seen this card in awhile",
"Let's see what the cards have to say",
"This seems really interesting",
"I sense the Universe revealing the signs",
"It seems Fate wanted you to know this",
"You can learn a lot from this card",
"Not bad, could be better though",
"I wonder why this card showed up now",
"You'll probably think this is a fortune cookie",
"How did I know this was going to be your card",
"This is pretty obvious",
"You probably already saw this coming",
"This card didn't seem very random",
"I think you will agree with this one",
"This seems important",
"You probably won't believe me",
"I find it odd that this card showed up",
"Do you just get a feeling of déjà vu?",
"Interesting...",
"It looks like Karma just did a full circle",
"It was only a matter of time before this card showed up",
"The Tarot knows all...",
"This card is a little difficult to read",
"You will have to trust me"
];

var lvn =[ /*love very negative*/
["You lost a relationship that you cared about because you lacked faith in yourself","You are overwhelmed with all of the possible new beginnings","You hesistated too long and will never get that chance again."],
["It's possible that you are having trouble in your relationships","There are certain expectations that you are looking for that are unrealistic","You need to sort out what you want vs is realistic","This may be difficult to do at this moment, so please be patient with yourself"],
["You pushed away the people that care about you","You have lacked empathy and selfishly","This is causing a bad feedback loop","You are cynical and bitter because of your relationships","Your relationships are bad because you are cynical and bitter","Thus the cycle can not break"], 
["Someone that you look up to is disappointment in you","You may find it difficult to cope with this disappointment","This relationship may take a while to repair"],
["You feel drained and tired about relationships","You lack the will to put in effort to change your situation", "Things wont change or get better until you find the will to"]];

var lne =[ /*love negative*/
["You are at a crossroads in your life","You are unsure between the choices before you","Somebody in your life needs for you to make a decision"],
["You want to things to improve in your relationships","You find it difficult to find the will to change", "Be patient and recharge your will before trying again"],
["You might be a little confused right now","You have a sense that secrets or some truth is being hidden from you","You see signs that indicate that there might be a problem but you are sure what it is","The universe is trying to tell you what you need to know","Be patient and take time trying to figure what these signs really mean"],
["You are putting a strain on your relationships","You are torn between being selfish and feeling guilty for not doing more","You have lost your faith in others","Your relationships haven't given up on you","There is still time to change if you really want to"],
["You let down someone that you really look up to","Although this person forgave you","You have a sense that things will never be the same agian"]];

var lnu =[ /*love neutral*/
["You are between relationships","Or maybe you want to restart a relationship you already have","Take this opportunity to make changes in your life"],
["This card reminds you that with willpower all things are possible","Once you have this willpower all your efforts will bear fruit", "Find out if you really want to put the effort in changing your relationships"],
["This card represents your intuition","When this card comes up it means you need to look out for signs","The answers you are looking for are there","The truth is ready to be revealed and secrets discoverd"],
["This card represents the kind a love that a mother has for a child","This doesn't mean it has to be a mother child relationship","It's about want to love and nurture someone","This card is in a neutral state towards you","I am unsure if it's representing you being the mohter or child figure","However if it's coming up in a reading","It means you must seek out this person because something important with that person is imminent"],
["This card represents a father figure or mentor in your life","This person really wants the best for you","The relationship with this person might be a little complicated","If this card shows up somehow this person is important to your overall reading"]];

var lpo =[ /*love positive*/
["You started a new relationship","Things are looking good for you two","Try to enjoy this moment and don't be afraid of new experiences"],
["Your relationships have been turning in your favor","This is because you have a strong will","Things are looking good in your relationships"],
["You have a sense that you already know the answer to your question","Trust in your instincts because this time they are not wrong","This card is proof that your intution is correct"],
["You made a realization about someone in your life","There is someone that truly cares about you in a way only a mother could","This person truly loves you and wants to see you happy and well"]];

var lvp =[ /*love very positive*/
["You have found someone very special","This person could very well be your soulmate","This new will be the beginning of something wonderful"],
["You have found it easy to get what you want in your relationships","Your willpower has easily move others to your favor","This must be a great time for your relationships"],
["You are in tune with the universe","This card is having a very positive reaction to you","Since this card represents your intuition","It means that all secrets are open before you","Talk to the person you had in mind when choosing this reading","You will confirm the answer that you already know in your heart"],
["There are relationships more important than a romantic ones","The love between a mother and child is as old as time","This card radiates with this love","Something wonderful and special is happning with this person in your life"]];

var wvn =[ /*wealth very negative*/
["You missed a great opportunity because you lacked faith in yourself","You are overwhelmed with all of the things that could go wrong","You hesistated too long and will never get that chance again."],
["You lack the willpower to make changes in your life","There might be good ideas or opportunities you have available","but without the require willpower it is difficult to impossible for good results"],
["You are having a difficult time with your finances","You can't seem to know what the is the right direction to go","The Universe is giving you signs but you are not able to discern them"],
["...","Your mother or someone in your life that takes on a motherly role","is going to have a rough spell with her finances","Be careful to handle this situation with care","Try to preserve a positive relationship during this difficult time"]];

var wne =[ /*wealth negative*/
["You started a new job or project","You tried to be enthusiastic about this new venture","Because you couldn't commit, this new opportunity will fail"],
["You find it difficult to follow through on your projects","You are lacking the willpower to commit enough for success","This moment will pass, use this time to recover your wil."],
["You have been trying to improve your finances","You aren't sure what to do","This card represents your intution","I'm afraid it not reacting to you very well","You should try taking a step back and mediate on the signs you've seen so far"],
["It seems someone close to you is going to have a breif financial difficulty","This person is either your mother or someone in your life that takes on this role","Your relationship with her will be unaffected by this challange"]];

var wnu =[ /*wealth neutral*/
["A new job or project has been offered to you","This opportunity will open up doors to others","It is unsure if this new venture will be fruitful"],
["This card is the manifestation of will power","Will power is what changes thoughts into actions","Ideas into reality, you are encouraged to act now","Change the world around you"],
["Since you asked about your finances","It's more likely a sign from the universe","Advising you to that someone needs your help in this way"]];

var wpo =[ /*wealth positive*/
["A new opportunity has been offered to you","This has been the moment you've been waiting for","This new venture will lead to increase wealth"],
["You have been having good luck in your projects","People around you are wanting to follow your lead","Your willpower is allowing you to influence others","Turn your ideas into reality"],
["Your mother or someone in your life like a mother","Is going to have a bit of a windfall with moeny","I'm not sure if this amount of money will be enough to affect your life","But it will definately be enough to make a positive impact on her"]];

var wvp =[ /*wealth very positive*/
["Fate has knocked on your door with a great gift","You have an opportunity of a life time before you","This new venture will lead to riches"],
["Things are falling to place around you","You have found the perfect balance in manfesting your will into reality","Now is the perfect time to start a new project or to ask for a raise at work"],
["I see good fortune with wealth","Although this good fortune is for your mother or someone in your life that takes that role","This good fortune is enough that it will spill over into your life to a certain extent"],
["I think you should buy a lottery ticket","Seriously, I'm sensing a very strong attraction to wealth","I am not sure how long this period will last","You should take advantage of this brief opportunity"]];

var svn =[ /*spirit very negative*/
["You have to start all over from the beginning","Everything that you built up has been reset","You are forced to decide a new destiny"],
["I'm afraid I have bad news for you","The Magician represents willpower","Right now this card is reacting very negative to your aura","You will find it difficult to finish anything you start","This period of time might last a while for you I'm afraid..."],
["Everyone is made of 3 things","Body, Mind, and Spirit","The first 2 are easy to notice if it is not well","It is much harder to tell if the Spirit isn't well","I can see you have negleted your Spirit","During this period of time, you might find yourself very unhappy","This moment will not pass on it's own","You will need to change something in your life"],
["I can see you are in a bad situation","A part of this is not your fault","However it is your choice to stay in this negative enviroment","There are other people around you that will continue to","drain away your positive energy as soon as you build some up"]];

var	sne =[ /*spirit negative*/
["You are looking for inspiration but nothing seems concrete","You are overwhelmed with all of the possible new beginnings","So many possibilities but nothing really seems to stand out"],
["You have trouble manfesting willpower","There are things you want to do but can't seem to find the strength to do so","This period of time will pass and your will power will eventually return"],
["I sense a shift in your Karma","It seems you have recently been building up the bad kind","Maybe due to some dishonesty or being a bit selfish","This isn't as bad I've seen before","I advise to do something positive to balance your Karma before it can pop","into something truly bad for you"]];

var snu =[ /*spirit neutral*/
["Normally cards have a positive or negetive reaction to peoples auras","This can affect how the card is apply","or how it needs to be interpetated","This card is right the in the middle of negetive and positive reactions","Please click on the card to read more details on a standard interpitaton"],
["I am having a hard time seeing the details of your spirit at this moment","You seem to be caught in a crossroads of some type","Not quite good, not quite bad","Unfortunately I do not see a clear answer on which direction to choose"],
["Please shake your 8-ball and try asking your question again","I'm sorry just a little bit of fortune telling humor","Honestly it does seem a little difficult to determine what answer to give you","This card isn't reacting very strongly to your aura right now","Sometimes this means that you are between something positive and negative energies"]];

var spo =[ /*spirit positive*/
["Inspiration will come to you","You may have felt stuck before but I sense a positive","shift in your aura","This would be a great time to finish that project you've been putting off"],
["You have an aboundance of willpower","This is a great time to change things around you","Turn your ideas to reality"],
["You are close to getting the spiritual fullfillment you desire","You are on the right track","Keep believing in yourself and trust your intuition"],
["There was an issue that you might have been in doubt about","Something that you felt unsure about","The truth is that you already know the answer","Soon you will realize this and have the confidence in your decision"],
["You have been looking for a mentor in your life","Someone to help you sort out the difficult questions about something important","This person will be revealed to you soon","It may even be someone you've known before but was anware","that this person could offer the insight you needed"]];

var svp =[ /*spirit very positive*/
["Your spirit is really strong right now","When the spirit is aligned all other things fall into place","While other might see things as luck, in reality it is just you being in tune","with the energy of the universe"],
["I am sensing a very powerful strong aura around you","You might have notice a lot of things going your way","You should take advantage of this time to change the world around you"],
["This is more than just good luck","It seems like you are really in tune with the Universe","Your spirit is aligned and your instincts are atune","This is the best time to change the reality around you"],
["I can sense a brilliant aura around you","You have managed to tap into the energy of the Universe","People around sense this and want to be around you","If possible, please share this aboundance of spirit with those in need"],
["I can sense great power from you","A force of will that is truly inspiring","You have found the balance between acceptance and self improvement"]];