<script>
import Mechs from "@/objects/Mechs";
export default {
  name: "OverviewMechs",
  data() {
    return { Mechs: Mechs };
  },
};
</script>
<template>
  <h2>All possible Mechs</h2>
  <table>
    <tbody>
      <tr>
        <th>Shortname</th>
        <th>FullName</th>
        <th>MechClass</th>
      </tr>
      <tr v-for="mech in Mechs" :key="mech.shortName" :value="mech.mechTier">
        <td>{{ mech.shortName }}</td>
        <td>{{ mech.fullName }}</td>
        <td>{{ mech.mechClass.fullName }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style></style>
