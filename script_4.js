const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
// année 70
console.log("voici les entrepreneurs nés pendant l'année 70");
for (let i = 0 ; i <= entrepreneurs.length - 1; i++){
let r = (entrepreneurs[i].year);
let tab = String(r);
if (tab[2] === "7"){
	console.log(entrepreneurs[i].first);
}
}
// le nom et prénom en un array
let tab = []
for (let i = 0 ; i <= entrepreneurs.length - 1; i++){
	tab.push(entrepreneurs[i].first + " " + entrepreneurs[i].last);
}
console.log(tab);
// l'age des entrepreneurs aujourd'hui
for (let i in entrepreneurs){
	console.log(entrepreneurs[i].first + " "+ (2019 - entrepreneurs[i].year)+"ans");
}
// ordre alphabetique
var tableau = [ ];
for (let i in entrepreneurs){
	tableau.push(entrepreneurs[i].last);
}
console.log(tableau.sort());
 
alert( tableau.join('\r') );