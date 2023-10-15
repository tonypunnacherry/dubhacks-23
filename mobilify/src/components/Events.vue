<template>
    <div class="select-group">
        <button class="active"><i class="material-icons-outlined">recommend</i> For You</button>
        <button><i class="material-icons-outlined">bolt</i> Trending</button>
        <button><i class="material-icons-outlined">group</i> Friends</button>
    </div>
    <div class="container">
        <div class="event" v-for="event in events" :key="event.id">
            <i class="material-icons-round large">{{event.icon}}</i> 
            <h3>{{ event.name }}</h3>
            <p>
                <a style="margin-right: 30px;">View Attendees <i class="material-icons-round">expand_more</i></a>
                <a>Add to Plan <i class="material-icons-round">login</i></a>
            </p>
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue'

export default {
    name: 'EventDisplay'
}
</script>

<script setup>
const events = ref([
    {
        icon: "sports_football",
        name: "Huskies vs. Ducks Football Game",
        location: "Husky Stadium",
        datetime: new Date("October 15, 2023 9:00 AM"),
        attendees: [
            {
                name: "Juliana T.",
                disability: "Wheelchair User"
            },
            {
                name: "Brandom M.",
                disability: "Visual Aid User"
            }
        ]
    },
    {
        icon: "self_improvement",
        name: "Morning Yoga Class",
        location: "West Montlake Park",
        datetime: new Date("October 15, 2023 9:00 AM"),
        attendees: [
            {
                name: "Sarah L.",
                disability: "Auditory Aid User"
            }
        ]
    }
]);
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    border-radius: 20px;
    background-color: rgb(220, 220, 220);
    overflow: hidden;
}

.event {
    padding: 20px;
    border-bottom: 1px solid black;
    position: relative;
    top: 1px;
}

.event h3 {
    margin-top: 0;
}

.event p {
    margin: 0;
}

.event i.material-icons-round.large {
    background-color: white;
    border: 1px solid #636363;
    border-radius: 50px;
    padding: 10px;
    font-size: 36px;
    float: left;
    margin-right: 20px;
}

.event a {
    text-decoration: underline;
    text-decoration-style: dotted;
    color: #636363;
    cursor: pointer;
}

.event a:hover {
    font-weight: bold;
    color: seagreen;
}

.event a i, button i {
    font-size: 16px;
    position: relative;
    top: 3px;
    margin-top: -3px;
}

.select-group {
    text-align: center;
}

.select-group button {
    box-shadow: none;
    margin-right: 10px;
    font-size: 13px;
    padding: 6px 12px;
    border-radius: 20px;
    margin-bottom: 20px;
}

.select-group button.active {
    background-color: #212121;
    color: white;
}
</style>
  