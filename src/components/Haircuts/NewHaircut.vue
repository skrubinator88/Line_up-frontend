<template>
  <div>
    <h2>
      New Haircut
    </h2>
    <input
      name = "id"
      v-model="haircut.id"
      placeholder = "id" />
    <br>
    <input
      name = "price"
      v-model="haircut.price"
      placeholder = "price" />
    <br>
    <input
      name = "duration"
      v-model="haircut.duration"
      placeholder = "duration" />
    <br>
    <hr>
    <button
      @click="addHaircut">New Haircut</button>
  </div>
</template>

<script>
import HaircutService from '../../services/HaircutService'
export default {
  data () {
    return {
      haircut: {
        id: null, // id is only generated in frontend for dev
        price: null,
        duration: null
      }
    }
  },
  methods: {
    async addHaircut () {
      try {
        await HaircutService.addHaircut(this.haircut)
        // redirect back to haircuts page
        this.$router.push({
          name: 'haircuts'
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
