<template>
  <nav>
    <h1>Mobilif<img src="@/assets/logo.png" width="48" style="position: relative; top: 20px; left: -10px; margin-top: -20px;"/></h1>
    <ul>
      <li><router-link to="/" exactActiveClass="active"><i class="material-icons-outlined">home</i> Home</router-link></li>
      <li><router-link to="/explore" exactActiveClass="active"><i class="material-icons-outlined">map</i> Explore</router-link></li>
      <li><router-link to="/social" exactActiveClass="active"><i class="material-icons-outlined">share</i> Connect</router-link></li>
      <li><a class="icon"><i class="material-icons-round">account_circle</i> <span>username</span></a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  width: 100%;
  height: 84px;
}

nav h1 {
  margin: 0;
  float: left;
  color: black;
  font-family: "Roboto", sans-serif;
  line-height: 84px;
  margin-left: 40px;
  font-size: 36px;
  text-transform: uppercase;
  letter-spacing: 5px;
}

nav ul {
  margin: 0;
  float: right;
  list-style-type: none;
  margin-right: 20px;
  font-family: sans-serif;
}

nav ul li {
  float: left;
  line-height: 84px;
}

nav ul li a {
  font-size: 20px;
  display: inline-block;
  padding: 0 10px;
  margin: 0 20px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  position: relative;
}

nav ul li a.icon:hover i, nav ul li a.icon:hover {
  color: rgb(0, 150, 100);
}

nav ul li a:not(.icon) {
  color: #636363;
  border: solid #212121;
  border-width: 1px 0;
  text-decoration: none;
  line-height: 32px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
}

nav ul li a:hover:not(.active, .icon) {
  color: darkgreen;
  border-color: darkgreen;
  text-shadow: 0 0 4px limegreen;
}

nav ul li a.active {
  color: black;
  border-color: rgb(0, 0, 0);
  border-width: 3px 0;
  line-height: 28px;
}

nav ul li a.active::after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  background-color: rgb(200, 200, 200);
  border-radius: 2px;
  filter: blur(4px);
  z-index: -1;
}

nav ul li i {
  color: #212121;
  font-size: 32px;
  line-height: 84px;
}

nav ul li a.icon span {
  position: relative;
  top: -10px;
}

a .material-icons-outlined {
  font-size: 24px;
  line-height: 24px;
  position: relative;
  top: 4.5px;
}
</style>
