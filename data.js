const filteredCommerceCore = commerceCore.filter(
sub => sub.name !== "Accounting Standards"
);

const data = {

"B.Com General - Semester 6": [
...commonLanguages,
...commerceCore
],

"B.Com Honors - Semester 6": [
...commonLanguages,
{
name:"International Finance",
channels:[
{name:"Hasham Ali Khan",links:[
"https://www.youtube.com/playlist?list=PLWJDzVuPkXAnNpRjN6InK65R7ndvpYZUf"
]}
]
},
...commerceCore
],

"B.Com Computer Applications - Semester 6": [
...commonLanguages,
...filteredCommerceCore,
{
name:"Cybersecurity",
channels:[
{name:"Whole Subject",links:[
"https://www.youtube.com/playlist?list=PLtfg0YD2YYUQMZp4bRkeZI0JXWHGqh8vo"
]}
]
}
],

"B.Com Business Analytics - Semester 6": [
...commonLanguages,
...filteredCommerceCore,
{
name:"Business Application of Emerging Technologies",
channels:[
{name:"(Add Playlist Here)",links:["#"]}
]
}
]

};
