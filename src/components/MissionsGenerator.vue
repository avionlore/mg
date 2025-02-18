<template>
    <h1>Missions Generator</h1>
    <form v-on:submit.prevent="generateMissions">
        <button type="submit">Generate</button>
    </form>
    <span v-if="missionCount>0">
        <p>Missions: {{ missionCount }}</p>
        <p v-for="n in parseInt(missionCount)" :key="n"><MissionSingle :missionNumber="n"/></p>
    </span>
    
</template>
<script>
import { rollDice } from '../logics/rollDice.js'
import MissionSingle from './MissionSingle.vue'

export default {
    name: 'MissionsGenerator',
    components: {
    MissionSingle
},
    data() {
        return {
            missionCount: 0
        };
    },
    methods: {
        generateMissions: function () {
            this.missionCount = rollDice(5);
        }
    }
}

</script>
<style></style>