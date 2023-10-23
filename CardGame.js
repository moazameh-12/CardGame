const suits = ["Spades","Diamonds","Club","Heart"];

const values = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];

let deck = [ ];

let joker = ['jokerone','jokertwo'];

let cards = ' ' ;

for ( var a = 0; a <= suits.length-1; a++ ){

     for ( var b = 0; b < values.length; b++ ){

        cards = {value: values[b], suit: suits[a]};

        deck.push(cards);

        }
    };
    for(let i=0;i<=joker.length-1;i++){

        deck.push(i);
    };

    console.log(deck);