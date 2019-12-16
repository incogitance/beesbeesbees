var ForagerBee = function() {
  this.age = 10;
  this.job = 'find pollen';
};


ForagerBee.prototype.canFly = true;

ForagerBee.prototype.color = Bee.prototype.color;

ForagerBee.prototype.food = Bee.prototype.food;

ForagerBee.prototype.eat = Bee.prototype.eat;

ForagerBee.prototype.treasureChest = [];

ForagerBee.prototype.forage = function (treasure) {
  this.treasureChest.push(treasure);
};
