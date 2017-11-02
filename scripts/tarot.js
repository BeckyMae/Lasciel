		$.getScript('scripts/cards.js');
		$.getScript('scripts/zodiacs.js');
		$.getScript('scripts/gypsy.js')

		var pZodiac = "none";
		var pElm = "none";
		var pCard1 = "none";
		var pCard2 = "none";
		var pCard3 = "none";
		var tempCard = "none";
		var pState = "none";
		var auraLevel = 50;
		var tempAura = 50;
		var readingT = "none";

		
		function pSelectZ (){
			$("#avatar").css("transform","rotateY(540deg)");
			$(".answerImg").css("display","flex");
			$("#dialog").html("<p>You have choosen<br>" +pZodiac + "<br>Is this correct?</p>");
			$(".zodiac").css("display","none");
			$(".dialog").css("height","55%");
			$("#gypsyW").css("width","100%");
			$("#zodiacB").css("width","50%");
			
		}

		function pSelectN (){
			$(".answerImg").css("display","none");
			$(".zodiac").css("display","inline-block");
			$("#board").css("display","none");			
			$(".dialog").css("height","13%");
			$(".tarot").css("background-image","url('images/tarotB.png')");
			pElm = "none";
			$("#dialog").html("<p> Welcome to<br>Xander's Tarot Card Game<br>Please choose a Zodiac </p>");
			$("#avatar").css("transform","rotateY(0deg)");
			$("#pYes").attr("src","images/yes.png");
			$(".history").css("display","none");	
			resetDeck();			
		}

		function pSelectY (){
			resetDeck();
			$("#pYes").css("display","none");
			$("#pNo").css("display","none");
			$("#avatar").css("transform","rotateY(0deg)");	
			$(".dialog").css("height","20%");
			$("#zodiac").css("display","none");
			$("#choice").css("display","flex");
			$("#choice1").attr("onclick","rType(1)");
			$("#choice2").attr("onclick","rType(2)");
			$("#choice3").attr("onclick","rType(3)");
			$("#igypsy").attr("src","images/gypsy.jpg");
			$("#dialog").html(gypsyDialog[0]);
			shuffleDeck(deck);
			$("#pYes").attr("onclick","0");
			$("#pNo").attr("onclick","0");
			
		}

		function resetDeck (){
			$("#card1").css("transform","rotateY(0deg)");
			$("#card2").css("transform","rotateY(0deg)");
			$("#card3").css("transform","rotateY(0deg)");
			$("#card2B").attr("src","images/card_coverDark.jpg");
			$("#card3B").attr("src","images/card_coverDark.jpg");
			$("#clickM").css("display","none");
			$(".history").css("display","none");
			$("#card1").attr("onclick","0");
			$("#card2").attr("onclick","0");
			$("#card3").attr("onclick","0");
			$("#board").css("display","none");
			gypsyDialog.splice(1, gypsyDialog.length);
			auraLevel = 50;
			pState = 0;
			tempCard = 0;
			readingT = "none";
			$("#choice1").css("transform","rotateY(0deg)");
			$("#choice2").css("transform","rotateY(0deg)");
			$("#choice3").css("transform","rotateY(0deg)");
			$("#zodiacB").css("width","0%");

		}

	
		function z1(){			
			pZodiac = zodiacs[1].name;
			pElm = zodiacs[1].elm;
			pSelectZ();
			$("#avatarB").attr("src",zodiacs[1].img);
			$("#tarot").css("background-image",zodiacs[1].bgi);
		}

		function z2(){
			pZodiac = zodiacs[2].name;
			pElm = zodiacs[2].elm;
			pSelectZ();
			$("#avatarB").attr("src",zodiacs[2].img);
			$("#tarot").css("background-image",zodiacs[2].bgi);
		}

		function z3(){
			pZodiac = zodiacs[3].name;
			pElm = zodiacs[3].elm;
			pSelectZ();
			$("#avatarB").attr("src",zodiacs[3].img);
			$("#tarot").css("background-image",zodiacs[3].bgi);
		}

		function z4(){
			pZodiac = zodiacs[4].name;
			pElm = zodiacs[4].elm;
			pSelectZ();
			$("#avatarB").attr("src",zodiacs[4].img);
			$("#tarot").css("background-image",zodiacs[4].bgi);
		}

		function z5(){
			pZodiac = zodiacs[5].name;
			pElm = zodiacs[5].elm;
			pSelectZ();
			$("#avatarB").attr("src",zodiacs[5].img);
			$("#tarot").css("background-image",zodiacs[5].bgi);
		}

		function z6(){
			pZodiac = zodiacs[6].name;
			pElm = zodiacs[6].elm;
			pSelectZ();
			$("#avatarB").attr("src",zodiacs[6].img);
			$("#tarot").css("background-image",zodiacs[6].bgi);
		}

		function z7(){
			pZodiac = zodiacs[7].name;
			pElm = zodiacs[7].elm;
			pSelectZ();
			$("#avatarB").attr("src",zodiacs[7].img);
			$("#tarot").css("background-image",zodiacs[7].bgi);
		}

		function z8(){
			pZodiac = zodiacs[8].name;
			pElm = zodiacs[8].elm;
			pSelectZ();
			$("#avatarB").attr("src",zodiacs[8].img);
			$("#tarot").css("background-image",zodiacs[8].bgi);
		}

		function z9(){
			pZodiac = zodiacs[9].name;
			pElm = zodiacs[9].elm;
			pSelectZ();
			$("#avatarB").attr("src",zodiacs[9].img);
			$("#tarot").css("background-image",zodiacs[9].bgi);
		}

		function z10(){
			pZodiac = zodiacs[10].name;
			pElm = zodiacs[10].elm;
			pSelectZ();
			$("#avatarB").attr("src",zodiacs[10].img);
			$("#tarot").css("background-image",zodiacs[10].bgi);
		}

		function z11(){
			pZodiac = zodiacs[11].name;
			pElm = zodiacs[11].elm;
			pSelectZ();
			$("#avatarB").attr("src",zodiacs[11].img);
			$("#tarot").css("background-image",zodiacs[11].bgi);
		}

		function z12(){
			pZodiac = zodiacs[12].name;
			pElm = zodiacs[12].elm;
			pSelectZ();
			$("#avatarB").attr("src",zodiacs[12].img);
			$("#tarot").css("background-image",zodiacs[12].bgi);
		}


		function shuffleDeck(deck){
			var currentIndex = deck.length, temporaryValue, randomIndex;
			while (0 !== currentIndex){
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;
				temporaryValue = deck[currentIndex];
				deck[currentIndex] = deck[randomIndex];
				deck[randomIndex] = temporaryValue;
			}
			pCard1 = deck[0];
			pCard2 = deck[1];
			pCard3 = deck[2];
			$("#card1F").attr("src",pCard1.img);
			$("#card2F").attr("src",pCard2.img);
			$("#card3F").attr("src",pCard3.img);

			shuffleDialog(lvn);
			shuffleDialog(lne);
			shuffleDialog(lnu);
			shuffleDialog(lpo);
			shuffleDialog(lvp);

			shuffleDialog(wvn);
			shuffleDialog(wne);
			shuffleDialog(wnu);
			shuffleDialog(wpo);
			shuffleDialog(wvp);

			shuffleDialog(svn);
			shuffleDialog(sne);
			shuffleDialog(snu);
			shuffleDialog(spo);
			shuffleDialog(svp);

			return deck;
		}


		function cAura() {
			if (pElm == tempCard.elm){
				auraLevel = auraLevel + 20;
			} else if (pZodiac == tempCard.elm) {
				auraLevel = auraLevel + 40;
			} else if (pElm == "Earth" && tempCard.elm == "Fire") {
				auraLevel = auraLevel + 10;
			} else if (pElm == "Earth" && tempCard.elm == "Water" ) {
				auraLevel = auraLevel - 20;
			} else if (pElm == "Air" && tempCard.elm == "Water") {
				auraLevel = auraLevel + 10;				
			} else if (pElm == "Air" && tempCard.elm == "Fire") {
				auraLevel = auraLevel - 20;	
			} else if (pElm == "Fire" && tempCard.elm == "Air") {
				auraLevel = auraLevel + 10;
			} else if (pElm == "Fire" && tempCard.elm == "Earth") {
				auraLevel = auraLevel - 20;
			} else if (pElm == "Water" && tempCard.elm == "Earth") {
				auraLevel = auraLevel + 10;
			} else if (pElm == "Water" && tempCard.elm == "Air") {
				auraLevel = auraLevel - 20;
			}

		}


		function flipCard1() {
			tempCard = pCard1;
			$("#pYes").attr("src","images/backD.png");
			$("#pNo").attr("src","images/next.png");	
			$("#card1").css("transform","rotateY(180deg)");
			$("#dialog").html("<p>You have drawn<br>The " + tempCard.cName + "<br>" + tempCard.tlt + "</p>");
			gypsyDialog.push("<p>You have drawn<br>The " + tempCard.cName + "<br>" + tempCard.tlt + "</p>");
			$("#card1").attr("onclick","bigCard(pCard1)");
			$("#pYes").css("display","block");			
			$("#pNo").css("display","block");			
			$("#pNo").attr("onclick","nextD()");			
		}

		
		function flipCard2() {
			tempCard = pCard2;
			$("#card2").css("transform","rotateY(180deg)");
			$("#dialog").html("<p>You have drawn<br>The " + tempCard.cName + "<br>" + tempCard.tlt + "</p>");
			gypsyDialog.push("<p>You have drawn<br>The " + tempCard.cName + "<br>" + tempCard.tlt + "</p>");
			$("#card2").attr("onclick","bigCard(pCard2)");
			$("#pNo").attr("onclick","nextD2a()");
			$("#pNo").attr("src","images/next.png");			
		}

		function flipCard3() {
			tempCard = pCard3;
			$("#card3").css("transform","rotateY(180deg)");
			$("#dialog").html("<p>You have drawn<br>The " + tempCard.cName + "<br>" + tempCard.tlt + "</p>");
			gypsyDialog.push("<p>You have drawn<br>The " + tempCard.cName + "<br>" + tempCard.tlt + "</p>");
			$("#card3").attr("onclick","bigCard(pCard3)");
			$("#pNo").attr("onclick","nextD4a()");
			$("#pNo").attr("src","images/next.png");		
		}

		function historyG() {
			$("#cardBF").css("transform","scaleX(-1)");
			$("#goBack").attr("onclick","goBack()");
			$("#cardDes").css("opacity",0);
			$("#cardBF").attr("src", "images/gypsy.jpg");
			$("#bigCard").css("display","block");
			$("#goBackImg").css("display","block");
			$("#tarot").css("display","none");
			$("#dialog").css("display","none");
			$("#zodiac").css("display","none");
			$("#board").css("height","100%");
			$("#board").css("min-width","100%");
			$("#board").css("position","absolute");
			$("#card1w").css("display","none");
			$("#card2w").css("display","none");
			$("#card3w").css("display","none");
			$("#bigCard").attr("onclick","flipHistoryF()");	
		}
		
		function flipHistoryF(bCard) {
			$("#bigCardW").css("transform","rotateY(180deg)");
			$("#bigCard").attr("onclick","flipHistoryB()");
			$("#cardDes").css("opacity",100);
			$("#cardDes").html(gypsyDialog.toString());
		}
		
		function flipHistoryB() {
			$("#cardDes").css("opacity",0);
			$("#bigCardW").css("transform","rotateY(0deg)");
			$("#bigCard").attr("onclick","flipHistoryF()");
		}


		function bigCard(bCard) {
			$("#goBack").attr("onclick","goBack()");
			tempCard = bCard;
			$("#cardDes").css("opacity",0);
			$("#cardBF").attr("src", tempCard.img);
			$("#bigCard").css("display","block");
			$("#goBackImg").css("display","block");
			$("#tarot").css("display","none");
			$("#dialog").css("display","none");
			$("#zodiac").css("display","none");
			$("#board").css("height","100%");
			$("#board").css("min-width","100%");
			$("#board").css("position","absolute");
			$("#card1w").css("display","none");
			$("#card2w").css("display","none");
			$("#card3w").css("display","none");
		}

		function flipCardBF(bCard) {
			$("#bigCardW").css("transform","rotateY(180deg)");
			$("#bigCard").attr("onclick","flipCardBB()");
			$("#cardDes").css("opacity",100);
			$("#cardDes").html(tempCard.des);
		}
		
		function flipCardBB() {
			$("#cardDes").css("opacity",0);
			$("#bigCardW").css("transform","rotateY(0deg)");
			$("#bigCard").attr("onclick","flipCardBF()");
		}

		function goBack() {
			$("#cardDes").css("opacity",0);
			$("#bigCard").css("display","none");
			$("#goBackImg").css("display","none");
			$("#bigCardW").css("transform","rotateY(0deg)");
			$("#bigCard").attr("onclick","flipCardBF()");
			$("#tarot").css("display","flex");
			$("#dialog").css("display","flex");
			$("#zodiac").css("display","flex-inline");
			$("#board").css("height","37%");
			$("#board").css("min-width","");
			$("#board").css("position","relative");
			$("#card1w").css("display","block");
			$("#card2w").css("display","block");
			$("#card3w").css("display","block");
			$("#cardBF").css("transform","scaleX(1)");

		}

	


		
