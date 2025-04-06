<script setup>
import { computed, defineProps } from "vue";

const props = defineProps(["positionNumber"]);

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

const startInGrid = computed(() => {
  return createPosGraphTable(props.positionNumber);
});
</script>
<script>
export default {
  name: "GridStart",
};
</script>
<template>
  <p v-html="startInGrid.outerHTML"></p>
</template>
<style></style>
