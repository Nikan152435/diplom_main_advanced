// src/js/characters/Character.js
export default class Character {
    constructor(level) {
      if (new.target === Character) {
        throw new Error('Cannot instantiate Character directly');
      }
      this.level = level;
      this.attack = 0;
      this.defence = 0;
      this.health = 50;
    }
  
    levelUp() {
      this.level += 1;
      this.attack = Math.max(this.attack, this.attack * (80 + this.health) / 100);
      this.defence = Math.max(this.defence, this.defence * (80 + this.health) / 100);
      this.health = Math.min(this.health + 80, 100);
    }
  }