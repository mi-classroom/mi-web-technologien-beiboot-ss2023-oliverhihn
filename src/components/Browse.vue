<template>
  <div id="app">
    <HeaderComponent title="ARlebnispfad wählen" back-button-link="/" />
    <PathComponent title="Wiehl" image="wiehl.jpg" back-button-link="/" />
    <PathComponent title="Straße der Arbeit - Marienheide" image="wipperfuerth.webp" back-button-link="/" />
    <PathComponent title="Wipperfürth" image="unnenbergturm.jpg" back-button-link="/" />
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
    }
  },
  mounted() {
    this.updatePosition()
  },
  methods: {
    updatePosition() {
      navigator.geolocation.getCurrentPosition((result) => {
        this.location.lat = result.coords.latitude
        this.location.lon = result.coords.longitude
      })
    },
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
