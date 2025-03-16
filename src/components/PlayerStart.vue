<script setup>
import { computed } from "vue";
import { rollDice } from "@/logics/rollDice";

let mapPositionArray = [
  [3, 6, 9],
  [2, 5, 8],
  [1, 4, 7],
];

function createPosGraphTable(position) {
  const graphTable = document.createElement("table");
  graphTable.classList.add("positionGraphTable");

  mapPositionArray.forEach((rowItems) => {
    let newRow = graphTable.insertRow();
    rowItems.forEach((cellItems) => {
      let newCell = newRow.insertCell();
      let textToAdd = "";

      if (cellItems == position) {
        textToAdd = "X";
      } else {
        textToAdd = "O";
      }

      let newText = document.createTextNode(textToAdd);
      newCell.appendChild(newText);
    });
  });

  return graphTable;
}

const playerStartInGrid = computed(() => {
  return createPosGraphTable(rollDice(9));
});
</script>
<script>
export default {
  data() {},
};
</script>
<template>
  <p>Player Start:</p>
  <p v-html="playerStartInGrid.outerHTML"></p>
</template>
<style></style>
