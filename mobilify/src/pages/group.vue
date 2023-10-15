<template>
    <div class="page">
        <div class="channels">
            <a href="#"><i class="material-icons-outlined">auto_stories</i> Resources</a>
            <a href="#"><i class="material-icons-outlined">event</i> Events</a>
            <a href="#"><i class="material-icons-round">gavel</i> Rules</a>
            <h4>Discussion</h4>
            <a href="#" class="active"># General</a>
            <a href="#"># Off-Topic</a>
            <a href="#"># Help</a>
            <a href="#"># Share</a>
            <br />
            <hr /><br />
            <button style="font-size: 13px;">Connect w/ someone new!</button>
        </div>
        <div class="channel">
            <h2>{{ group.title }}</h2>
            <h3># general</h3>
            <div class="message">
                <i class="material-icons-round user">account_circle</i>
                <div class="body">
                    <h4>Mary S.</h4>
                    <p>Had a great time at the yoga event today!</p>
                </div>
            </div>
            <div class="message">
                <i class="material-icons-round user">account_circle</i>
                <div class="body">
                    <h4>John T. <i class="material-icons-round">accessible</i></h4>
                    <p>Anyone going to the game tomorrow? Come join me.</p>
                    <p><button class="small">Join John's trip to "Husky vs. Ducks Football Game"</button></p>
                </div>
            </div>
            <br/><br/>
            <div class="sendMsg">
                <i class="material-icons-round">chevron_right</i>
                <input style="width:100%;" placeholder="Type your message here..." />
                <button>Send</button>
            </div>
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue'

export default {
    name: 'GroupPage'
}
</script>

<script setup>
const group = ref({
    title: "UW Workout Club",
    meeting: "Fitness Center- West Campus",
});
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p i {
    font-family: "Merriweather", serif;
}

a i {
    font-size: 18px;
    position: relative;
    top: 4px;
    margin-top: -4px;
}

.message i.user {
    float: left;
    font-size: 48px;
    color: #212121;
    margin-right: 30px;
    position: relative;
    top: 20px;

}

.body i {
    position: relative;
    top: 5px;
    margin-top: -5px;
}

.message::after {
    content: "";
    display: table;
    clear: both;
}

.message .body {
    float: left;
}

.channel {
    overflow: auto;
}

.channels {
    float: left;
    width: 300px;
    margin-right: 100px;
    background-color: rgb(220, 220, 220);
    padding: 30px;
    border-radius: 30px;
}

.channels a {
    display: block;
    margin-bottom: 2px;
    padding: 8px 15px;
    text-decoration: none;
    color: #636363;
    width: 80%;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    border-radius: 3px;
    transition: all 0.1s;
}

.channels a:hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: #212121;
}

.channels a.active {
    background-color: seagreen;
    color: white;
}

button.small {
    padding: 6px 15px;
    font-size: 12px;
}

.sendMsg {
    position: relative;
}

.sendMsg input {
    padding: 12px 120px 12px 50px;
    border-radius: 2px;
    border: 1px solid darkgray;
    width: 100%;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    outline: none;
    transition: all 0.2s;
    background-color: white;
}

.sendMsg i {
    position: absolute;
    top: 11px;
    left: 15px;
    color: #212121;
}

.sendMsg input:focus {
    border-color: seagreen;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.sendMsg input::placeholder {
    transition: all 0.2s;
}

.sendMsg input:focus::placeholder {
    opacity: 0;
}

.sendMsg button {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 100px;
}
</style>
  