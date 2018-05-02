class Deck{
    constructor(){
        this.deck = [];
        this.reset();
    }
    
    displayCards(){
        console.log(this.deck)
    }

    // method used to add a card object into the deck
    add_card(a){
        this.deck.push(a)
    }

    // method used to shuffle cards randomly
    shuffle(){
        var m = this.deck;
        m = m.length;
        var t;
        var i;
        // console.log(m)
        while(m){
            i = Math.floor( Math.random() * m--);
            // swapping cards within the cards array
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }
        // this.displayCards();
    }
    
    // insertion sort using the order value in the card object
    // reset(){
    //     for(var i = 0; i < this.deck.length; i++) {
    //         var temp = this.deck[i];
    //         var j = i - 1;
    //         while (j >= 0 && this.deck[j].get_order() > temp.get_order()) {
    //             this.deck[j + 1] = this.deck[j];
    //             j--;
    //         }
    //         this.deck[j + 1] = temp;
    //     }
    // }

    // resets the deck by setting the array as empty and recreating all cards in original order
    reset(){
        this.deck = [];

        // creating all the black spades from 2 to 10, and J, K, Q, A
        for (var i=2; i<11;i++){
            this.deck.push( new Card('\u2660', i, 'black', i-1));
        }
        this.deck.push( new Card('\u2660',  'J', 'black', 10) );
        this.deck.push( new Card('\u2660',  'K', 'black', 11) );
        this.deck.push( new Card('\u2660',  'Q', 'black', 12) );
        this.deck.push( new Card('\u2660',  'A', 'black', 13) );

        // creating all black clubs from 2 to 10, and J, K, Q, A
        for (var i=2; i<11;i++){
            this.deck.push( new Card('\u2663', i, 'black', i+12));
        }
        this.deck.push( new Card('\u2663',  'J', 'black', 23) );
        this.deck.push( new Card('\u2663',  'K', 'black', 24) );
        this.deck.push( new Card('\u2663',  'Q', 'black', 25) );
        this.deck.push( new Card('\u2663',  'A', 'black', 26) );

        // creating all the hearts from 2 to 10, and J, K, Q, A
        for (var i=2; i<11;i++){
            this.deck.push( new Card('\u2665', i, 'red', i+25));
        }
        this.deck.push( new Card('\u2665',  'J', 'red', 36) );
        this.deck.push( new Card('\u2665',  'K', 'red', 37) );
        this.deck.push( new Card('\u2665',  'Q', 'red', 38) );
        this.deck.push( new Card('\u2665',  'A', 'red', 39) );

        // creating all the red diomonds from 2 to 10, and J, K, Q, A
        for (var i=2; i<11;i++){
            this.deck.push( new Card('\u2666', i, 'red', i+38));
        }
        this.deck.push( new Card('\u2666',  'J', 'red', 49) );
        this.deck.push( new Card('\u2666',  'K', 'red', 50) );
        this.deck.push( new Card('\u2666',  'Q', 'red', 51) );
        this.deck.push( new Card('\u2666',  'A', 'red', 52) );
    }

    // method used to deal a card and remove from the deck
    deal(){
        var index = Math.floor( Math.random() * this.deck.length);
        var card = this.deck[index];
        this.remove(this.deck, card);
        return card;
    }

    remove(array, element) {
        const index = array.indexOf(element);
        
        if (index !== -1) {
            array.splice(index, 1);
        }
    }
}

class Card{
    constructor(suite, value, color, order){
        this.suite = suite;
        this.value = value;
        this.color = color;
        this.order = order;
    }

    get_order(){
        return this.order;
    }

    show_card(){
        console.log("suite: " + this.suite + ', value: ' + this.value);
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }

    get_card(card){
        this.hand.push(card);
    }

    discard_card(card){
        const index = this.hand.indexOf(card);

        if (indewx !== -1){
            this.hand.splice(index,1);
        }
    }

    display_hand(){
        console.log(this.hand);
    }
}

console.log("Creating a new deck");
var myDeck = new Deck()
console.log("Creating two players")
var p1 = new Player("Benny");
var p2 = new Player("Mark");


console.log('Original deck order is:')
myDeck.displayCards();
console.log('Deck order after shuffleing 3 thies is:')
myDeck.shuffle();
myDeck.shuffle();
myDeck.shuffle();
myDeck.displayCards();

// Player 1 gets 2 cards
p1.get_card( myDeck.deal());
p1.get_card( myDeck.deal());

// Player 2 gets 2 cards
p2.get_card( myDeck.deal());
p2.get_card( myDeck.deal());

console.log("player 1 hand is:")
p1.display_hand();

console.log("player 2 hand is:")
p2.display_hand();
