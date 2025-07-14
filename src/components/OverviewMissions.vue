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
        <th>Parameters</th>
        <th>Constraints</th>
      </tr>
      <tr v-for="(mission, index) in Missions" :key="mission">
        <td>{{ index }}</td>
        <td>{{ mission.longName }}</td>
        <td>{{ mission.missionDescription }}</td>
        <td>
          <p
            v-for="(parameter, index) in mission.missionParameters"
            :key="parameter"
          >
            {{ index }}: {{ parameter.parameter.description }}
            {{ parameter.value }}
          </p>
        </td>
        <td>
          <p
            v-for="(constraint, index) in mission.missionConstraints"
            :key="constraint"
          >
            {{ index }}: {{ constraint.description }}
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<style>
table,
th,
td {
  border: 1px solid white;
  border-radius: 10px;
  padding: 5px;
}
</style>
