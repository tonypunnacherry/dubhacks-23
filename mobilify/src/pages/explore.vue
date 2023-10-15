<template>
    <div id="map">
        <!--
        <img src="@/assets/UW-Campus-Map.jpg" />
        <i class="material-icons-round" id="marker1">location_on</i>
        -->
        <GMapMap :center="{ lat: 47.6564, lng: -122.3075 }" :zoom="17" map-type-id="roadmap"
            style="width: 100vw; height: 900px">
            <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" />
        </GMapMap>
        <div id="menu">
            <h1>Smith Hall</h1>
            <p style="border-left: 1px solid white; padding-left: 20px;"><input value="Your Location" /></p>
            <p style="padding-left: 21px;position:relative;">
                <i class="material-icons-round"
                    style="font-size: 15px;position:absolute;left:-12px;top:8px;font-size:24px;color:darkseagreen;">pin_drop</i>
                <input value="1911 Skagit Ln, Seattle, WA 98105" disabled />
            </p>
            <p><button>Start Trip</button></p>
            <br />
            <h2>Accessibility Info</h2>
            <h4>Walkability: OK</h4>
            <h4>Wheelchair: POOR</h4>
            <p>Lots of stairs to climb, no elevators</p>
            <p>Special accessible entrances needed</p>
            <br />
            <h2>Ratings</h2>
            <p>1.5/5.0
                <i class="material-icons-round" style="font-size: 15px;">star</i>
                <i class="material-icons-round" style="font-size: 15px;">star_half</i>
                <i class="material-icons-round" style="font-size: 15px;">star_border</i>
                <i class="material-icons-round" style="font-size: 15px;">star_border</i>
                <i class="material-icons-round" style="font-size: 15px;">star_border</i>
                <br />
                Elevators are frequently broken and hard to find. Do not register for a class in this hall.
                <br /><br />Tiffany H.
                (<i class="material-icons-round" style="font-size: 14px;">favorite_border</i> 36)
            </p>
        </div>
    </div>
</template>
  
    
<script>
export default {
    name: 'ExploreMap',
    data() {
        return {
            markers: [
                {
                    position: {
                        lat: 47.6564, lng: -122.3075
                    },
                }
            ]
        }
    },
}
</script>
    
<style>
#map {
    position: absolute;
    top: 84px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    min-width: 100vh;
    min-height: 100vh;
    z-index: 999;
}

.vue-map-container {
    z-index: 0;
}

#menu {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 400px;
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 8px 0 16px rgba(0, 0, 0, 0.2);
    color: white;
    padding: 40px;
}

#menu input {
    width: 100%;
    padding: 10px;
}

#menu h1 {
    margin-top: 0;
}

#marker1 {
    color: #f44436;
    text-shadow:
        3px 3px 0 #fff,
        -3px 3px 0 #fff,
        -3px -3px 0 #fff,
        3px -3px 0 #fff;
    position: absolute;
    top: 515px;
    left: 930px;
    font-size: 64px;
}
</style>
    