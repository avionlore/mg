<template>
  <MissionsGenerator />
</template>

<script>
import MissionsGenerator from "./components/MissionsGenerator.vue";

export default {
  name: "App",
  components: {
    MissionsGenerator,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  background-image: url("./assets/background.webp");
  background-repeat: no-repeat; /* No repeating of the image */
  background-size: auto; /* Cover the entire container */
  background-position: top; /* Center the background image */
  background-attachment: fixed;
  width: 100%;
  background-color: black;
  color: aliceblue;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-right: 15px;
}
button:hover {
  background-color: #0056b3;
}
</style>
