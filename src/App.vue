<template>
  <div class="wrap">
    {{data}}
  </div>
</template>

<script>
  import {ref} from 'vue'
  import axios from 'axios'
  export default {
    setup() {
      const data = ref([]);
      axios.get('https://ghibliapi.herokuapp.com/films')
      .then(response => {
        data.value = response.data
      })
      .catch(err => console.log(err));

      return {      
        data
      }
    }
  }
</script>

<style>
</style>
