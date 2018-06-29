<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Hello',

  data() {
    return {
      msg: 'Hello there!',
    };
  },
};
</script>

<style scoped>
  h1 {
    padding: 0 .25em;
    color: salmon;
  }
</style>
