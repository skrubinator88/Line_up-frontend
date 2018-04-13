<template>
  <h3>
    <div v-for="haircut in haircuts" :key="haircut.id">
      {{haircut.price}}
      {{haircut.duration}}
      <br>
    </div>
  </h3>
</template>

<script>
import HaircutService from '@/services/HaircutService'
export default {
  data () {
    return {
      haircuts: null
    }
  },
  async mounted () {
    this.haircuts = (await HaircutService.fetchHaircuts()).data
  }
}
</script>

<style scoped>

</style>
