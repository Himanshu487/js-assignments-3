// dolphins and koala's

// 3 times complete against each other

let dolphins;

dolphinRoundOne = 99;
dolphinRoundTwo = 108;
dolphinRoundThree = 89;

totalOfDolphins = dolphinRoundOne + dolphinRoundTwo + dolphinRoundThree;

console.log("totalOfDolphins",totalOfDolphins);

averageScoreDolphins = totalOfDolphins/3

console.log("averageScoreDolphins",averageScoreDolphins);


koalaRoundOne = 88;
koalaRoundTwo = 91;
koalaRoundThree = 110;

totalOfKoals = koalaRoundOne + koalaRoundTwo + koalaRoundThree;

console.log("totalOfKoals",totalOfKoals);


averageScoreKoalas = totalOfKoals/3;

console.log("averageScoreKoalas",averageScoreKoalas);

// if( averageScoreDolphins > averageScoreKoalas){
//     console.log("the dolphins are winnner");
// }
// else if( averageScoreKoalas > averageScoreDolphins){
//     console.log("the koals are winnner");
// }
// else if ( averageScoreKoalas === averageScoreDolphins){
//     console.log("it's a draw");
// }

if(averageScoreDolphins>=100 && averageScoreDolphins>averageScoreKoalas){
    console.log(`the team dolphins wins here, with score of ${averageScoreDolphins}`);
}

else if(averageScoreKoalas>=100 && averageScoreDolphins<averageScoreKoalas){
    console.log(`the team koalas wins here, with score of ${averageScoreKoalas}`);
}else{
    console.log("no one wins the trophy")
}