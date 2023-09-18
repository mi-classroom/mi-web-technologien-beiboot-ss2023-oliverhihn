<template>
  <div>
    <div @click="enterToMenu" id="landing-div">
      <p class="text-center my-8">Immersive-AR Web App</p>
      <button id="xr-button" class="basicButton my-1">
        AR nicht unterstützt
      </button>
    </div>
  </div>
</template>

<script>
import { checkXR } from "../session";
export default {
  data() {
    return {
      isSessionSupported: true,
    };
  },

  methods: {
    enterToMenu() {
      if (this.isSessionSupported) {
        this.$router.push("/menu");
      }
    },

    async checkSessionSupported() {
      try {
        this.isSessionSupported = await checkXR();
      } catch (e) {
        console.log(e);
      }
    },
  },

  mounted() {
    this.checkSessionSupported();
  },
};
</script>
