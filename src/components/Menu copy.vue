<template>
  <div>
    <div id="landing-div">
      <p class="text-center my-8">Wähle ein ARlebnis</p>
      <button id="xr-button" class="basicButton my-1" @click="enterToScene">
        Simple Objects
      </button>
      <button id="xr-button2" class="basicButton my-1" @click="enterToScene2">
        Link Objects
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSessionSupported: true,
    };
  },

  methods: {
    enterToScene() {
      console.log("entering -session-");
      this.$router.push("/session");
    },
    enterToScene2() {
      this.$router.push("/session2");
    },
  },
};
</script>
