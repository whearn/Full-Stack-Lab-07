//Creates the Die class for all dice
var Die = function() {
    this.value = Math.floor(Math.random() * (7-1)) + 1;
    this.div = document.createElement('div');
    this.div.className = 'die';
    this.div.innerHTML = this.value;

    //Calls the function to re-roll the die on click
    this.div.addEventListener('click', function() {
        this.roll();
    }.bind(this));

    //Removes the die on double click
    //Value is set to 0 so that it is no longer included in the sum
    this.div.addEventListener('dblclick', function() {
        this.value = 0;
        this.div.remove();
    }.bind(this));

    //adds the die to the page
    document.body.appendChild(this.div);
}

//Rolls the die and gives it a new value between 1-6
Die.prototype.roll = function() {
    this.value = Math.floor(Math.random() * (7-1)) + 1;
    this.div.innerHTML = this.value;
}

//Holds each die on the page
var myDice = [];

//Targets each button on the page
var generateBtn = document.getElementById('generate');
var rollBtn = document.getElementById('roll');
var sumBtn = document.getElementById('sum');

//Generates a new die with a new value
generateBtn.addEventListener('click', function() {
    myDice.push(new Die());
});

//Re-rolls the values of each die currently on the page
rollBtn.addEventListener('click', function() {
    for (var i = 0; i < myDice.length; i++) {
        myDice[i].roll();
    }
});

//Adds up the values of each die currently on the page
//and adds them together. Then displays the sum in an alert
sumBtn.addEventListener('click', function() {
    var dieSum = 0;
    for (var i = 0; i < myDice.length; i++) {
        dieSum = dieSum + myDice[i].value;
    }
    alert('The current value of all of the dice is: ' + dieSum);
});