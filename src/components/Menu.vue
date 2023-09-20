<template>
  <div id="appMenu">
    <HeaderComponent title="AR-Erlebnis starten" back-button-link="/" />
    <div class="menuecontent">
      <div class="menumenue">
        <router-link class="menuebutton" id="button_nearby" :to="'/wiehl'">
          <img src="assets/icons/radar.svg">
          <h2>ARlebnisse in der Umgebung anzeigen</h2>
        </router-link>
        <div class="menuebutton" id="button_startVR" @click="enterToScene">
          <img src="assets/icons/ar.svg">
          <h2>AR starten</h2>
        </div>
        <router-link class="menuebutton" id="button_idk" :to="'/help'">
          <img src="assets/icons/help.svg" id="filter-black">
          <h2>Ich hab keine Ahnung</h2>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      isSessionSupported: true,
    };
  },

  methods: {
    enterToScene() {
      this.$router.push("/session");
    },
  },
}
</script>

<style scoped>
#appMenu {
  scroll-snap-type: y mandatory;
  max-width: 100vw;
  max-height: 100vh;
  height: 100vh;
  overflow: auto;
  scroll-behavior: smooth;
}

.menuecontent {
  position: relative;

}

.menumenue {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 93vh;
}

.menuebutton {
  width: 80%;
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
}

.menuebutton img {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(285deg) brightness(106%) contrast(104%);
  width: 100px;
}

.menuebutton h2 {
  text-align: center;
  color: white;
  font-weight: normal;
  font-size: 130%;
}

#button_nearby {
  background: black;
}

#button_startVR {
  background: var(--primary-color);
}

#button_idk {
  background: var(--grey);
}

#button_idk h2 {
  color: black;
}

#filter-black {
  filter: brightness(0);
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

.pfad .arlebnis h3,
.pfad .arlebnis h4 {
  padding-left: 10px;
  padding-right: 10px;
  font-weight: normal;
}

.pfad .arlebnis h4 {
  color: #666666;
}
</style>