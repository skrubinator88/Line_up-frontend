<template>
  <v-flex xs12 mt-3>
    <v-layout row>
      <v-flex xs3>
    <v-navigation-drawer permanent fluid >
      <v-list fluid>
        <v-list-tile>
          <v-list-tile-content>
          <v-flex xs11 pt-4 row>
              <v-text-field
                name="input-1"
                label="Search BarberShops"
                id="testing"
              />
            </v-flex>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
      </v-flex>
      <v-flex xs8>
    <v-toolbar>
      <v-toolbar-title>Barbershops</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <!--Barbershop panel items go here-->
      </v-toolbar-items>
    </v-toolbar>

    <v-card color="green" class="white--text">
            <!--v-for="barbershop in barbershops"-->
            <!--:key="barbershop.id">-->
      <v-container fluid grid-list-lg>
        <v-layout row>
          <v-flex xs9>
            <div>
              <div class="headline">Sample Barbershop</div>
              <div>Sample Barbershop description</div>
            </div>
          </v-flex>
          <v-flex xs5>
            <v-card-media
              src='./assets/logo.png'
              height="200px"
              contain
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <div class="text-xs-center mt-3">
      <v-pagination :length="6" v-model="page"/>
    </div>
      </v-flex>
    </v-layout>
  </v-flex>
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
