var RetiredForagerBee = function() {
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
  this.job = 'gamble';
  this.treasureChest = [];
};

RetiredForagerBee.prototype.forage = function () {
  return 'I am too old, let me play cards instead'
}

RetiredForagerBee.prototype.food = ForagerBee.prototype.food;

RetiredForagerBee.prototype.eat = ForagerBee.prototype.eat;

RetiredForagerBee.prototype.gamble = function () {

  randomTreasure = ['Honey','Jelly','Dirt','Wax','Pupa','Extra Stinger','Epinephren','Wing parts','Thorax parts','Pollen','Whole flower'];

  this.treasureChest.push(randomTreasure[Math.floor(Math.random() * randomTreasure.length - 1)]);
};