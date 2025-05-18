<script>
import Missions from "@/objects/missions/Missions";
export default {
  name: "OverviewMissions",
  data() {
    return { Missions: Missions };
  },
};
</script>
<template>
  <h2>All possible Missions</h2>
  <table>
    <tbody>
      <tr>
        <th>Shortname</th>
        <th>Longname</th>
        <th>Description</th>
      </tr>
      <tr v-for="(mission, index) in Missions" :key="mission">
        <td>{{ index }}</td>
        <td>{{ mission.longName }}</td>
        <td>{{ mission.missionDescription }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style></style>
