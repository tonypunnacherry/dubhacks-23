<template>
    <div class="container">
        <div class="community" v-for="community in communities" :key="community.id"
            :style="{ backgroundImage: `url(${community.thumbnail})` }">
            <div class="overlay">
                <h3>{{ community.title }}</h3>
                <router-link to="/social/group/workout-UW"><button class="visit">View Group</button></router-link>
                <p>
                    <i class="material-icons-round">group</i> {{ community.members }} members
                    &bull;
                    <i class="material-icons-round">check</i> {{ community.online }} online
                </p>
                <div class="more">
                    <h4>Latest Post</h4>
                    <p><a href='#'>{{ community.latestPost }} <i class="material-icons-round">chevron_right</i></a></p>
                    <h4>Trending Post</h4>
                    <p><a href='#'>{{ community.trendyPost }} <i class="material-icons-round">chevron_right</i></a></p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue'

export default {
    name: 'CommunityDisplay'
}
</script>

<script setup>
const communities = ref([
    {
        thumbnail: require("../assets/workout.jpg"),
        title: "UW Workout Club",
        members: 13,
        online: 2,
        latestPost: "First Yoga class tomorrow @ 9am!",
        trendyPost: "Guide to exercise with your disability"
    },
    {
        thumbnail: require("../assets/symphony.jpg"),
        title: "Seattle Symphony Lovers",
        members: 21,
        online: 6,
        latestPost: "When is the next symphony?",
        trendyPost: "Fun Facts about Seattle Symphony"
    }
]);
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.community {
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    overflow: hidden;
    transition: all 0.2s;
    cursor: pointer;
    margin-bottom: 20px;
}

.community .overlay {
    padding: 10px 20px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    transition: all 0.2s;
}

.community:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(170, 152, 152, 0.2);
}

.community:hover .overlay {
    background-color: rgba(0,0,0,0.7);
}

.community .more {
    max-height: 0px;
    opacity: 0;
    transition: all 0.5s;
}

.community:hover .more {
    max-height: 500px;
    opacity: 1;
}

.community button.visit {
    position: absolute;
    top: 20px;
    right: 20px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s;
}

.community:hover button.visit {
    opacity: 1;
    visibility: visible;
}

.community i {
    font-size: 16px;
    position: relative;
    top: 3px;
    margin-top: -3px;
}

.community a {
    text-decoration: none;
    color: white;
    background-color: rgba(255,255,255,0.2);
    border-radius: 2px;
    padding: 2px;
    font-family: monospace;
}
</style>
  