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
                    label="Search Haircuts"
                    id="testing"
                  />
                </v-flex>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
      </v-flex>
      <v-flex xs8>
        <v-toolbar >
          <v-toolbar-title>Haircuts</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <!--Barbershop panel items go here-->
          </v-toolbar-items>
        </v-toolbar>
          <v-container fluid grid-list-lg>
            <v-layout>
              <v-flex xs10 sm5>
                <v-card class="HaircutCard">
                  <v-card-media
                    contain
                    class="white--text"
                    height="250px"
                    src="https://s3-media4.fl.yelpcdn.com/bphoto/lsFdp5jcOeuGKqUaoLE7qg/o.jpg"
                  >
                    <v-container >
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline">Sample Haircut</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-media>
                  <v-container>
                  <v-flex xs12 pl-4>
                  <v-card-title >
                    <div>
                      <span class="title">Haircut Barber</span><br>
                      <span class="subheading">Barber Haircut Hairstyle and price</span><br>
                      <span class="subheading">Hairtype</span>
                    </div>
                  </v-card-title>
                    </v-flex>
                  <v-flex pl-5>
                  <v-card-actions>
                    <v-btn flat color="orange">Like</v-btn>
                    <v-btn flat color="orange">Share</v-btn>
                  </v-card-actions>
                  </v-flex>
                  </v-container>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        <div class="text-xs-center mt-3">
          <v-pagination :length="6" v-model="page"/>
        </div>
      </v-flex>
    </v-layout>
  </v-flex>
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
  .HaircutCard {

  }
</style>
