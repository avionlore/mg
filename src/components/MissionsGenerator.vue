<template>
    <h1>Missions Generator</h1>
    <form v-on:submit.prevent="generateMissions">
        <button type="submit">Generate</button>
    </form>
    <span v-if="missionCount>0" :key="componentKeyForReRendering">
        <p>Missions: {{ missionCount }}</p>
        <p v-for="n in parseInt(missionCount)" :key="n"><MissionSingle :missionNumber="n"/></p>
    </span>
    
</template>
<script>
import { rollDice } from '../logics/rollDice.js';
import MissionSingle from './MissionSingle.vue';
import { ref } from 'vue';

const componentKey = ref(0);

export default {
    name: 'MissionsGenerator',
    components: {
    MissionSingle
},
    data() {
        return {
            missionCount: 0,
            componentKeyForReRendering: 0
        };
    },
    methods: {
        generateMissions: function () {
            this.missionCount = rollDice(5);
            componentKey.value += 1;
            this.componentKeyForReRendering = componentKey.value;
        }
    }
}

</script>
<style></style>