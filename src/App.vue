<template>
  <div class="wrap">
    {{data}}
  </div>
</template>

<script>
  import {ref} from 'vue'
  import {fetchApi} from './api/index'
  export default {
    setup() {
      const data = ref([]);
      fetchApi()
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
