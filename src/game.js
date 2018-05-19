var Furry = require("./furry.js");
var Coin = require("./coin.js");

function Game() {
    this.board = document.querySelectorAll("#board div");
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
    var self = this;

    this.index = function(x,y) {
        return x + (y * 10);
    }

    this.showFurry = function() {
        this.hideVisibleFurry();
        this.board[this.index(this.furry.x, this.furry.y)].classList.add("furry");
    }

    this.hideVisibleFurry = function() {
        if(document.querySelector(".furry") !== null)
        document.querySelector(".furry").classList.remove("furry");
    }

    this.showCoin = function() {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add("coin");
    }

    this.moveFurry = function() {
        if(this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        } else if(this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
        } else if(this.furry.direction === "up") {
            this.furry.y = this.furry.y - 1;
        } else {
            this.furry.y = this.furry.y + 1; 
        }
        this.gameOver();
        this.showFurry();
        this.checkCoinCollision();
    }

    this.turnFurry = function(event) {
        switch (event.which) {
            case 37:
            this.furry.direction = "left";
            break;
            case 38: 
            this.furry.direction = "up";
            break;
            case 39: 
            this.furry.direction = "right";
            break;
            case 40: 
            this.furry.direction = "down";
        }
    }

    this.checkCoinCollision = function() {
        if(this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
            document.querySelector(".coin").classList.remove("coin");
            this.score += 1;
            document.querySelector("strong").innerText = this.score
            this.coin = new Coin();
            this.showCoin();
        }
    }

    this.gameOver = function() {
        if(this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
            clearInterval(this.idSetInterval);
            var body = document.querySelector('body');
            var fullScreenDiv = document.createElement('div');
            var span = document.createElement('span');

            fullScreenDiv.innerText = 'Game Over';
            fullScreenDiv.classList.add('fullScreen');
            span.innerText = 'Your score: ' + this.score;
            span.style.fontSize = '40px';
            body.appendChild(fullScreenDiv);
            fullScreenDiv.appendChild(span);
        }
    }

    this.startGame = function() {
        this.showFurry();
        this.showCoin();
        this.idSetInterval = setInterval(function() {
            self.moveFurry();
        }, 200)
    }

}

module.exports = Game;