<template>
  <h3>
    <div v-for="barbershop in barbershops" :key="barbershop.id">
      {{barbershop.id}}
      {{barbershop.name}}
      <br>
    </div>
  </h3>
</template>

<script>
import BarbershopService from '@/services/BarbershopService'
export default {
  data () {
    return {
      barbershops: null
    }
  },
  async mounted () {
    this.barbershops = (await BarbershopService.fetchBarbershops()).data
  }
}
</script>

<style scoped>

</style>
