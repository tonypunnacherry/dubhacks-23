<template>
    <div class="page">
        <div class="row">
            <div class="column-3">
                <h2 class="center">Events</h2>
                <Events />
                <br />
                <h2 class="center">Schedule</h2>
                <p><b>No events planned today.</b> Connect with another user above!</p>
            </div>
            <div class="column-3">
                <h2 class="center">My Communities</h2>
                <Communities />
                <br />
                <h3 class="center">Find more communities</h3>
                <div class="search">
                    <i class="material-icons-round">search</i>
                    <input placeholder="What are you looking for today?" />
                </div>
            </div>
            <div class="column-3">
                <h2 class="center">Inbox</h2>
            </div>
        </div>
    </div>
</template>
  
    
<script>
import Events from "@/components/Events.vue"
import Communities from "@/components/Communities.vue"

export default {
    name: 'CommunityTab',
    components: {
        Events,
        Communities
    }, 
    data() {

    }
}
</script>
    
<style>
.search {   
    position: relative;
}

.search input {
    padding: 12px 20px 12px 50px;
    border-radius: 2px;
    border: 1px solid darkgray;
    width: 100%;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    outline: none;
    transition: all 0.2s;
    background-color: white;
}
.search i {
    position: absolute;
    top: 11px;
    left: 15px;
    color: #212121;
}
.search input:focus {
    border-color: seagreen;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

.search input::placeholder {
    transition: all 0.2s;
}

.search input:focus::placeholder {
    opacity: 0;
}
</style>
    