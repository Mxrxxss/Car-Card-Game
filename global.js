let movement = 0;

let Cardgroup = 
[  ["🐈‍⬛","🐈"], ["🐕","🐩"], ["🦓","🦒"] ];
// [  ["🦄","🍦"], ["🌈","👽"], ["👾","🤖"] ];

// ["👹","👺"]

// 🐈‍⬛🐈🐕🐩🦒🦓🦍🐅🐆

// var groupCard1 = 
// [
//     "🐈","🐂","🐍",
//     "🐕","🦖","🫏",
//     "🏇","🦝"
// ]

// let groupCard2 =
// [
//     "🦖","🐩","🐯",
//     "🐕‍🦺","🐏","🦨",
//     "👾","🤖"
// ]

let levelActual = 0;
let levels = [
    {
        cards: Cardgroup[0],
        movementMax: 4
    },
    {
        cards: Cardgroup[0].concat(Cardgroup[1]),
        movementMax: 10
    },
    {
        cards: Cardgroup[0].concat(Cardgroup[1], Cardgroup[2]),
        movementMax: 14
    }

];
