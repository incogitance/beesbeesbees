var HoneyMakerBee = function() {
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype.color = Bee.prototype.color;

HoneyMakerBee.prototype.food = Bee.prototype.food;

HoneyMakerBee.prototype.eat = Bee.prototype.eat;

HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot--;
};