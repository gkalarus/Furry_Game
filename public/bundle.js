/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction Furry() {\n    this.x = 0;\n    this.y = 0;\n    this.direction = \"right\";\n}\n\nfunction Coin() {\n    this.x = Math.floor(Math.random() * 10);\n    this.y = Math.floor(Math.random() * 10);\n}\n\nfunction Game() {\n    this.board = document.querySelectorAll(\"#board div\");\n    this.furry = new Furry();\n    this.coin = new Coin();\n    this.score = 0;\n    var self = this;\n\n    this.index = function (x, y) {\n        return x + y * 10;\n    };\n\n    this.showFurry = function () {\n        this.hideVisibleFurry();\n        this.board[this.index(this.furry.x, this.furry.y)].classList.add(\"furry\");\n    };\n\n    this.showCoin = function () {\n        this.board[this.index(this.coin.x, this.coin.y)].classList.add(\"coin\");\n    };\n\n    this.moveFurry = function () {\n        if (this.furry.direction === \"right\") {\n            this.furry.x = this.furry.x + 1;\n        } else if (this.furry.direction === \"left\") {\n            this.furry.x = this.furry.x - 1;\n        } else if (this.furry.direction === \"up\") {\n            this.furry.y = this.furry.y - 1;\n        } else {\n            this.furry.y = this.furry.y + 1;\n        }\n        this.gameOver();\n        this.showFurry();\n        this.checkCoinCollision();\n    };\n\n    this.hideVisibleFurry = function () {\n        if (document.querySelector(\".furry\") !== null) document.querySelector(\".furry\").classList.remove(\"furry\");\n    };\n\n    this.turnFurry = function (event) {\n        switch (event.which) {\n            case 37:\n                this.furry.direction = \"left\";\n                break;\n            case 38:\n                this.furry.direction = \"up\";\n                break;\n            case 39:\n                this.furry.direction = \"right\";\n                break;\n            case 40:\n                this.furry.direction = \"down\";\n        }\n    };\n\n    this.checkCoinCollision = function () {\n        if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {\n            document.querySelector(\".coin\").classList.remove(\"coin\");\n            this.score += 1;\n            document.querySelector(\"strong\").innerText = this.score;\n            this.coin = new Coin();\n            this.showCoin();\n        }\n    };\n\n    this.startGame = function () {\n        this.showFurry();\n        this.showCoin();\n        this.idSetInterval = setInterval(function () {\n            self.moveFurry();\n        }, 200);\n    };\n\n    this.gameOver = function () {\n        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {\n            clearInterval(this.idSetInterval);\n            var body = document.querySelector('body');\n            var fullScreenDiv = document.createElement('div');\n            var span = document.createElement('span');\n\n            fullScreenDiv.innerText = 'Game Over';\n            fullScreenDiv.classList.add('fullScreen');\n            span.innerText = 'Your score: ' + this.score;\n            span.style.fontSize = '40px';\n            body.appendChild(fullScreenDiv);\n            fullScreenDiv.appendChild(span);\n        }\n    };\n}\n\nvar game = new Game();\ngame.startGame();\n\ndocument.addEventListener('keydown', function (event) {\n    game.turnFurry(event);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYXBwLmpzP2JkOWMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gRnVycnkoKSB7XHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy55ID0gMDtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDb2luKCkge1xyXG4gICAgdGhpcy54ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgdGhpcy55ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBHYW1lKCkge1xyXG4gICAgdGhpcy5ib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjYm9hcmQgZGl2XCIpO1xyXG4gICAgdGhpcy5mdXJyeSA9IG5ldyBGdXJyeSgpO1xyXG4gICAgdGhpcy5jb2luID0gbmV3IENvaW4oKTtcclxuICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHRoaXMuaW5kZXggPSBmdW5jdGlvbih4LHkpIHtcclxuICAgICAgICByZXR1cm4geCArICh5ICogMTApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hvd0Z1cnJ5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlVmlzaWJsZUZ1cnJ5KCk7XHJcbiAgICAgICAgdGhpcy5ib2FyZFt0aGlzLmluZGV4KHRoaXMuZnVycnkueCwgdGhpcy5mdXJyeS55KV0uY2xhc3NMaXN0LmFkZChcImZ1cnJ5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hvd0NvaW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmJvYXJkW3RoaXMuaW5kZXgodGhpcy5jb2luLngsIHRoaXMuY29pbi55KV0uY2xhc3NMaXN0LmFkZChcImNvaW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tb3ZlRnVycnkgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZih0aGlzLmZ1cnJ5LmRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnVycnkueCA9IHRoaXMuZnVycnkueCArIDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuZnVycnkuZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xyXG4gICAgICAgICAgICB0aGlzLmZ1cnJ5LnggPSB0aGlzLmZ1cnJ5LnggLSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmZ1cnJ5LmRpcmVjdGlvbiA9PT0gXCJ1cFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnVycnkueSA9IHRoaXMuZnVycnkueSAtIDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mdXJyeS55ID0gdGhpcy5mdXJyeS55ICsgMTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgICAgICB0aGlzLnNob3dGdXJyeSgpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tDb2luQ29sbGlzaW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5oaWRlVmlzaWJsZUZ1cnJ5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdXJyeVwiKSAhPT0gbnVsbClcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ1cnJ5XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJmdXJyeVwiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy50dXJuRnVycnkgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQud2hpY2gpIHtcclxuICAgICAgICAgICAgY2FzZSAzNzpcclxuICAgICAgICAgICAgICB0aGlzLmZ1cnJ5LmRpcmVjdGlvbiA9IFwibGVmdFwiO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM4OiBcclxuICAgICAgICAgICAgICB0aGlzLmZ1cnJ5LmRpcmVjdGlvbiA9IFwidXBcIjtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOTogXHJcbiAgICAgICAgICAgICAgdGhpcy5mdXJyeS5kaXJlY3Rpb24gPSBcInJpZ2h0XCI7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDA6IFxyXG4gICAgICAgICAgICAgIHRoaXMuZnVycnkuZGlyZWN0aW9uID0gXCJkb3duXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hlY2tDb2luQ29sbGlzaW9uID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYodGhpcy5mdXJyeS54ID09PSB0aGlzLmNvaW4ueCAmJiB0aGlzLmZ1cnJ5LnkgPT09IHRoaXMuY29pbi55KSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29pblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY29pblwiKTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZSArPSAxO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3Ryb25nXCIpLmlubmVyVGV4dCA9IHRoaXMuc2NvcmVcclxuICAgICAgICAgICAgdGhpcy5jb2luID0gbmV3IENvaW4oKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q29pbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0YXJ0R2FtZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0Z1cnJ5KCk7XHJcbiAgICAgICAgdGhpcy5zaG93Q29pbigpO1xyXG4gICAgICAgIHRoaXMuaWRTZXRJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZWxmLm1vdmVGdXJyeSgpO1xyXG4gICAgICAgIH0sIDIwMClcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdhbWVPdmVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYodGhpcy5mdXJyeS54IDwgMCB8fCB0aGlzLmZ1cnJ5LnggPiA5IHx8IHRoaXMuZnVycnkueSA8IDAgfHwgdGhpcy5mdXJyeS55ID4gOSkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaWRTZXRJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgICAgICB2YXIgZnVsbFNjcmVlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB2YXIgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bGxTY3JlZW5EaXYuaW5uZXJUZXh0ID0gJ0dhbWUgT3Zlcic7XHJcbiAgICAgICAgICAgIGZ1bGxTY3JlZW5EaXYuY2xhc3NMaXN0LmFkZCgnZnVsbFNjcmVlbicpO1xyXG4gICAgICAgICAgICBzcGFuLmlubmVyVGV4dCA9ICdZb3VyIHNjb3JlOiAnICsgdGhpcy5zY29yZTtcclxuICAgICAgICAgICAgc3Bhbi5zdHlsZS5mb250U2l6ZSA9ICc0MHB4JztcclxuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChmdWxsU2NyZWVuRGl2KTtcclxuICAgICAgICAgICAgZnVsbFNjcmVlbkRpdi5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxudmFyIGdhbWUgPSBuZXcgR2FtZSgpO1xyXG5nYW1lLnN0YXJ0R2FtZSgpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgIGdhbWUudHVybkZ1cnJ5KGV2ZW50KTtcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);