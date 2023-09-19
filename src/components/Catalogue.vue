<template>
  <div class="catalogue pb-4">
    <div>
      <div class="flex flex-col space-y-4">
        <div class="col-start-2 mx-auto">
          <p>AR-Lebnispfade</p>
        </div>
        <div class="col-start-2 mx-auto">
          <button id="menu-button" class="basicButton my-1" @click="goHome">
            Zurück zu den ARlebnissen
          </button>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 items-center py-4">
      <div class="col-start-2 mx-auto">
        <p>3D Modell wählen</p>
      </div>
      <div @click="closeCatalogue" class="flex justify-end">
        <img src="/assets/icons/closeIcon.svg" alt="Icono de cerrar" class="px-2 py-1" />
      </div>
    </div>

    <div class="grid grid-cols-6 gap-4 px-2">
      <Model v-for="model in models" :key="model.id" v-bind:model="model" @model-is-loading="modelIsLoading"
        @model-is-loaded="modelIsLoaded" class="col-span-3"></Model>
    </div>

    <Spinner v-bind:showProp="showSpinner" />
  </div>
</template>

<script>
import Spinner from "./Spinner.vue";
import Model from "./Model.vue";
import { shutdownXR } from "../session";
import { shutdownScene } from "../scene";

export default {
  data() {
    return {
      activeCategory: 0,
      showSpinner: true,
    };
  },

  components: { Model, Spinner },

  props: {
    models: Array,
  },

  methods: {
    modelIsLoading(t = this) {
      this.showSpinner = true;
    },

    modelIsLoaded() {
      this.showSpinner = false;
      this.closeCatalogue();
    },

    closeCatalogue() {
      this.$emit("close-catalogue");
    },

    goHome() {
      this.$emit("close-catalogue");
      shutdownXR();
      shutdownScene();
      window.location.href = "/menu";
    },
  },

  mounted() {
    console.log(this.models);
  },
};
</script>
