<template>
  <div id="MainPg_wrapper">
    <section id="MainPg_section">
      <p v-text="$store.getters.data"></p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MainPg',
  data: function () {
    return {
      creator: {
        copyright: '©J4stEu',
        link: 'https://vk.com/id188091326',
      }
    }
  },
  created() {
    this.$store.dispatch('initUserData');
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #MainPg_wrapper {
    overflow: hidden;
  }
  #MainPg_section {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center; 
    z-index: 1;
  } 
</style>
