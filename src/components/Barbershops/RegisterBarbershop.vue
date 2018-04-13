<template>
  <div>
    <h2>
      New Barbershop form
    </h2>
    <input
      name = "id"
      v-model="barbershop.id"
      placeholder = "id" />
    <br>
    <input
      name = "price"
      v-model="barbershop.name"
      placeholder = "name" />
    <br>
    <input
      name = "description"
      v-model="barbershop.description"
      placeholder = "description" />
    <br>
    <hr>
    <button
      @click="addBarbershop">New BarberShop</button>
  </div>
</template>

<script>
import BarbershopService from '../../services/BarbershopService'
export default {
  data () {
    return {
      barbershop: {
        id: null, // id is only generated in frontend for dev
        name: null,
        isActive: null,
        description: null
      }
    }
  },
  methods: {
    async addBarbershop () {
      try {
        await BarbershopService.addBarbershop(this.barbershop)
        // redirect back to haircuts page
        this.$router.push({
          name: 'barbershops'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
