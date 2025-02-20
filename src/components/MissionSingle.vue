<template>
<div>
    <p>Mission # {{ missionNumber }}</p>
    <p>{{ missionName }}</p>
</div>
</template>
<script>
import missions from '../logics/Missions.js'

export default {
    props: ['missionNumber'],
    data() {
        return {
            missionName: missions.mission[Math.floor(Math.random() * missions.mission.length)].missionName
        }
        
    }
}
</script>
<style></style>