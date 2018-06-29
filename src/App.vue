<template>
  <div
    id="app"
    class="app"
  >
    <hello/>
  </div>
</template>

<script>
import Hello from './components/Hello.vue';

export default {
  name: 'App',
  components: {
    Hello,
  },
};
</script>

<style lang="scss">
@import './config/variables';
@import './config/mixins';
@import './config/reset';
@import './config/helpers';

body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0;
}

.app {
    color: #444;
    margin-top: 100px;
    max-width: 600px;
    font-family: Helvetica, sans-serif;
    text-align: center;
    display: flex;
    align-items: center;
}
</style>
