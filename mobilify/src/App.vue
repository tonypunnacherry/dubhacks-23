<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from "@/components/NavBar.vue"

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700|Merriweather:700');

.page {
  padding: 25px 50px;
}

.hero {
  background-color: rgba(220, 220, 220);
  border-radius: 10px;
  padding: 40px;
}

.hero h1 {
  margin-top: 0;
  margin-bottom: 50px;
}

h1 {
  font-family: "Merriweather", serif;
  font-weight: 700;
}

h2 {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
}

h3 {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
}

h4 {
  font-family: "Merriweather";
  font-size: 16px;
  margin-bottom: 10px;
}

p {
  font-family: "Roboto", sans-serif;
}

button {
  padding: 10px 18px;
  border-radius: 2px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  border: 1px solid rgb(40, 102, 40);
  color: rgb(40, 102, 40);
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  transition: box-shadow 0.2s;
}

button:hover {
  background-color: rgb(40, 102, 40);
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  color: white;
}

.row::after {
  content: "";
  display: table;
  clear: both;
}

.row .column-3 {
  width: 33%;
  padding: 0 20px;
  float: left;
}

.center {
  text-align: center;
}
</style>