var Die = function() {
    this.value = Math.floor(Math.random() * (7-1)) + 1;
    this.div = document.createElement('div');
    this.div.className = 'die';
    this.div.innerHTML = this.value;

    document.body.appendChild(this.div);
}

Die.prototype.roll = function() {
    var newValue = Math.floor(Math.random() * (7-1)) + 1;
    this.div.innerHTML = newValue;
}

var myDice = [];
var generateBtn = document.getElementById('generate');
var rollBtn = document.getElementById('roll');

generateBtn.addEventListener('click', function() {
    myDice.push(new Die());
});

rollBtn.addEventListener('click', function() {
    for (var i = 0; i < myDice.length; i++) {
        myDice[i].roll();
    }
});