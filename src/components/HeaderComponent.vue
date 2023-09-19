<template>
  <div class="headerheader" id="headerheader">
    <div class="headerheader-content">
      <div v-if="BackButtonLink == null && BackButtonMethod == null" style="width: 40px;"></div>
      <router-link class="headerback-button" v-if="BackButtonLink != null" :to="BackButtonLink"><img
          src="assets/icons/arrow_back.svg"></router-link>
      <div class="headerback-button" v-if="BackButtonMethod != null" @click="$emit(BackButtonMethod)"><img
          src="assets/icons/arrow_back.svg"></div>
      <h1 id="headerheader_title">{{ title }}</h1>
      <div style="width: 40px;"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
  },
  props: {
    title: String,
    BackButtonLink: String,
    BackButtonMethod: String
  },
  methods: {
  }
};
</script>

<style scoped>
.headerheader {
  background: var(--primary-color);
  height: 7vh;
  width: 100vw;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 100;
}

.headerheader-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  height: 100%;
  width: 98%;
}

.headerheaderbutton {
  align-items: center;
}

.headerheader-content h1 {
  font-size: 1.2rem;
  color: var(--header-title-color);
  margin: 0;
  align-self: center;
  font-family: var(--font-family);
  font-weight: 300;
}

.headerback-button {
  height: 100%;
  width: 40px;
  /*border: solid 2px #ffffff;
  border-radius: 10px;*/
  padding: 2px;
  display: flex;
  align-items: center;
  color: #ffffff;
}

.headerback-button img {
  height: 50%;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(285deg) brightness(106%) contrast(104%);
}

.headerheader-content p {
  color: #ffffff;
  margin-top: 30px;
}
</style>
