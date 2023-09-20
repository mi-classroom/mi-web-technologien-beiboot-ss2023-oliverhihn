<template>
  <div id="app">
    <HeaderComponent title="ARlebnispfad wählen" back-button-link="/menu" />
    <qrcode-stream @detect="onDetect" v-if="!scanned"></qrcode-stream>
    <vue-iframe v-if="scanned" :src=this.src allow="camera *; geolocation *; microphone *; autoplay *" frame-id="my-ifram"
      @load="onLoad" name="my-frame" width="100vw" height="100vh" />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      location: {
        lat: null,
        lon: null
      },
      scanned: false,
      src: "",
      wiehlLat: 50.949100,
      wiehlLon: 7.552020,
      marienheideLat: 51.083260,
      marienheideLon: 7.530500,
      wipperfuerthLat: 51.117142,
      wipperfuerthLon: 7.396330,
    }
  },
  watch: {
    $route(to, from) {
      this.scanned = false;
    }
  },
  mounted() {
    this.updatePosition()
  },
  updated() {
    this.updatePosition()
  },
  methods: {
    async onDetect(detectedCodes) {
      const a = await detectedCodes;
      console.log(a);
      console.log(a.content);
      this.src = a.content;
      this.scanned = true;
    },
    updatePosition() {
      navigator.geolocation.getCurrentPosition((result) => {
        this.location.lat = result.coords.latitude
        this.location.lon = result.coords.longitude
      })
    },
    unscan() {
      this.scanned = false;
    },
    calculateDistance(lat1, lng1, lat2, lng2) {
      const radius = 6371; // Earth's radius in km
      const dLat = this.toRadians(lat2 - lat1);
      const dLng = this.toRadians(lng2 - lng1);
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = radius * c;

      return distance.toFixed(2);
    },
    calculateDistanceWiehl() {
      return this.location.lat != null ? this.calculateDistance(this.location.lat, this.location.lon, this.wiehlLat, this.wiehlLon) : "laden...";
    },
    calculateDistanceMarienheide() {
      return this.location.lat != null ? this.calculateDistance(this.location.lat, this.location.lon, this.marienheideLat, this.marienheideLon) : "laden...";
    },
    calculateDistanceWipperfuerth() {
      return this.location.lat != null ? this.calculateDistance(this.location.lat, this.location.lon, this.wipperfuerthLat, this.wipperfuerthLon) : "laden...";
    },
    toRadians(degree) {
      return degree * (Math.PI / 180);
    }
  }
}
</script>

<style scoped>
#app {
  scroll-snap-type: y mandatory;
  max-width: 100vw;
  max-height: 100vh;
  height: 100vh;
  overflow: auto;
  scroll-behavior: smooth;
}

.content {
  position: relative;
}

.browser {
  display: flex;
  flex-direction: column;
}

.browser.background {
  height: 93vh;
  overflow: hidden;
}

.option {
  height: 180px;
  min-height: 180px;
  position: relative;
  display: flex;
  align-items: end;
  justify-content: space-between;
}

.option .background {
  position: relative;
  z-index: -1;
  display: block;
  height: 180px;
  width: 100vw;
  object-fit: cover;
}

.option h2 {
  color: white;
  z-index: 2;
  padding-bottom: 10px;
  padding-left: 10px;
}

.gradient {
  display: inline-block;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
  /* W3C */
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.arrow {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(285deg) brightness(106%) contrast(104%);
  z-index: 2;
  transform: rotate(180deg);
  height: 30px;
  padding: 10px 10px 10px 10px;
}

.pfad {
  position: absolute;
  height: 93vh;
  width: 100vw;
  background: white;
  top: 0;
  left: 100%;
  transition: 0.2s ease;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pfad.active {
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.2s ease;
}

.pfad .arlebnis {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  min-height: 100px;
  border-top: solid 1px var(--grey);
  border-bottom: solid 1px var(--grey);
}

.pfad .arlebnis h3 {
  padding-left: 10px;
  padding-right: 10px;
  font-weight: normal;
}
</style>
