console.log("Bonjour,veuiller saisir un nom si vous voulez jouer avec bot");
// name = prompt('Bonjour,veuiller saisir un nom si vous voulez jouer avec bot');
ask = prompt('Bienvenue dans notre espace ' + name + " ,on peut donc commencer,pose moi une question et je te reponderai");
function giving_answer(question) {
	if (question[question.length-1] === "?"){
		console.log("Ouais Ouais...");
	}
	else{ 
		if (question.length === 0 ){
			console.log("t'es en PLS ?");
			}
		else{
			if (question === question.toUpperCase()){
			console.log("Pwa, calme-toi...");
			console.log("P" + question);

			}

			else{
				
				var d = question.split(" ")
				for (var i = 0; i<= question.length-1; i++){
					if  (d[i] === "Fortnite"){
						 var give = 1;
						break
					}
					// else{
					// 	var give = 0;
					// }
				}
				if (give === 1) {
					console.log("on s' fait une partie soum-soum ?");
				}
				else {
				console.log("balek.");
				}	
			}
		}		
	}
		
}
giving_answer(ask)