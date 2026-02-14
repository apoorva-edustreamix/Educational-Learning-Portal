const commonLanguages = [
{
name:"English",
channels:[
{name:"Part A - English by Nisa",links:["https://www.youtube.com/playlist?list=PLUJXB7al70IB4mDWQIPyriRRylnwjPU2D"]},
{name:"Part B - English by Nisa",links:["https://www.youtube.com/playlist?list=PLUJXB7al70IBdkE4oiI4d40mycUq4JnQ8"]}
]
}
];

const commerceCore = [
{
name:"Cost Control and Management Accounting",
channels:[
{name:"Hasham Ali Khan - Part 1",links:["https://www.youtube.com/playlist?list=PLWJDzVuPkXAllmGP19jfhneNUdgOy1g2v"]},
{name:"Hasham Ali Khan - Part 2",links:["https://www.youtube.com/playlist?list=PLWJDzVuPkXAlg4vnE3ZhB7UVp9JWl6Mog"]}
]
},
{
name:"Theory and Practice of GST",
channels:[
{name:"Hasham Ali Khan - Whole Subject",links:["https://www.youtube.com/playlist?list=PLWJDzVuPkXAkNpdAIqufc2JxDoxjENrsj"]}
]
},
{
name:"Accounting Standards",
channels:[
{name:"Devika’s Commerce",links:["https://www.youtube.com/playlist?list=PLLhSIFfDZcUXO81uWFy_F6O4ZX0JfTYkV"]}
]
},
{
name:"Research Methodology & Project",
channels:[
{name:"Devika’s Commerce",links:["https://www.youtube.com/playlist?list=PLLhSIFfDZcUWRlgiXMkd1rNeLSz1You4O"]}
]
}
];

const data = {

"B.Com General - Semester 6":[...commonLanguages,...commerceCore],

"B.Com Honors - Semester 6":[...commonLanguages,...commerceCore],

"B.Com Computer Applications - Semester 6":[
...commonLanguages,
commerceCore[0],
commerceCore[1],
commerceCore[3]
],

"B.Com Business Analytics - Semester 6":[
...commonLanguages,
commerceCore[0],
commerceCore[1],
commerceCore[3]
]

};
