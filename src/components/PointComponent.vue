<template>
  <div class=" content" id="content">
    <div class="pfad browser">
      <div class="arlebnis">
        <h3>{{ title }}</h3>
        <h3 style="white-space: nowrap;">{{ distance }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
  },
  props: {
    title: String,
    distance: String
  },
  methods: {
    dolog() {
      console.log("")
    }
  }
};
</script>

<style scoped>
.pfad .arlebnis {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  min-height: 80px;
  border-top: solid 1px var(--grey);
  border-bottom: solid 1px var(--grey);
}

.pfad .arlebnis h3 {
  padding-left: 10px;
  padding-right: 10px;
  font-weight: normal;
}
</style>
