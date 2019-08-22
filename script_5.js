const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];
// Est-ce que tous les livres ont été au moins empruntés une fois ?
for (let count in books){
	if (books[count].rented !== 0)
		console.log("le livre a été au moins empruntés une fois");
	else
		console.log("le livre n'a pas été empruntés même pas d'une fois");
}
// Quel est livre le plus emprunté ?
var book = 0
for (let count in books){
	if (book < books[count].rented){
		book = books[count].rented
		var max = books[count].title
	}
	else{
		book = book
	}
}
console.log(max)
 // Quel est le livre le moins emprunté ?
var blok = books[0].rented
for (let count in books){
	if (blok > books[count].rented){
		blok = books[count].rented
		var  min = books[count].title
	}
	else{
		blok = blok
	}
}
console.log(min) 
  // Trouve le livre avec l'ID: 873495 ;
  	console.log("here is the books which id=873495")
for (let count in books){
  if (books[count].id === 873495 ){
  console.log(books[count].title)
}
}
// Supprime le livre avec l'ID: 133712 ;
for (let count in books){
  if (books[count].id === 133712 ){
	books.splice(books[count],1)
	console.log(books);
}
}
// Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
// ordre alphabetique
var tableau = [ ];
for (let i = 0; i <= books.length - 1 ; i ++ ){
	tableau.push(books[i].title);
}
console.log(tableau.sort());
 
alert( tableau.join('\r'));
