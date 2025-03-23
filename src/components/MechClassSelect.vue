<script setup>
import { ref } from "vue";

const selected = ref("");
</script>
<script>
import MechClasses from "@/objects/MechClasses";

export default {
  name: "MechClassSelect",
  data() {
    return { MechClasses: MechClasses };
  },
};
</script>
<template>
  <select class="mech_select"
    v-model="selected"
    @change="$emit('emitSelectedMissionClass', selected)"
  >
    <option disabled value="">Please choose highest possible Mech class</option>
    <option
      v-for="mechClass in MechClasses"
      :key="mechClass.mechTier"
      :value="mechClass.mechTier"
    >
      {{ mechClass.fullName }}
    </option>
  </select>
</template>
<style>
.mech_select {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;  
}
</style>
