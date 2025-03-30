import { defineStore } from 'pinia'

let difficultyInStore = {};

export const useDifficultyStore = defineStore('difficulty', {
  state: () => {
    return { difficultyInStore }
  },
  actions: {
    add(missionNumber, difficulty) {
      this.difficultyInStore[missionNumber] = difficulty;
    },
    get(missionNumber) {
        return this.difficultyInStore[missionNumber];
    },
  },
})