function is_what(valeur){
	if (valeur == "UCU" || 
	valeur == "UCC" || 
	valeur == "UCA" || 
	valeur == "UCG" || 
	valeur == "AGU" || 
	valeur == "AGC") {
	valeur = "Sérine";
	return valeur;
	}
	if (valeur == "CCU" ||
	valeur == "CCC" ||
	valeur == "CCA" ||
	valeur == "CCG"){
	valeur = 'Proline';
	return valeur;
	}
	if (valeur == "UUA" ||
	valeur == "UUG"){
	valeur = 'Leucine';
	return valeur;
	}
	if (valeur == "UUU" ||
	valeur == "UUC"){
	valeur = 'PhÉnylalanine';
	return valeur;
	}
	if (valeur == "CGU" ||
	valeur == "CGC" ||
	valeur == "CGA" ||
	valeur == "CGG" ||
	valeur == "AGA" ||
	valeur == "AGG"){
	valeur = 'Arginine';
	return valeur;
	}
	if (valeur == "UAU" ||
	valeur == "UAC"){
	valeur = 'Tyrosine';
	return valeur;
	}
}
var decompose = prompt("donne l' ARN tous en majuscule")
var inter = [ ]
var count = 0;
while (count < decompose.length) {
	// console.log (decompose[count]+decompose[count+1]+decompose[count + 2]);
	inter.push(decompose[count]+decompose[count+1]+decompose[count + 2]);
	count += 3;
}
console.log (inter);
var arn = []
for (let i in inter){
	arn.push(is_what(inter[i]))
}
console.log (arn);
console.log (decompose.length);