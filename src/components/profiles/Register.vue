<template>
  <v-flex xs5 offset-xs4 mt-5>
    <v-container fluid elevation-6 >
      <div class="pl-4 pr-4 pt-4 pb-2">
        <v-flex xs5 offset-xs3 class="pb-3">
          Logo goes here
          <br>
          Login to Line Up
        </v-flex>
        <v-form v-model="valid">
          <v-text-field
            label="Email"
            v-model="email"
            :rules="emailRules"
            required
          />
          <v-text-field
            label="password"
            v-model="password"
            :rules="passwordRules"
            required
          />
          <v-text-field
            label="Confirm password"
            v-model="passwordTwo"
            :rules="passwordRules"
            required
          />
          <v-flex xs2 >
            <v-select
              :items="items"
              v-model="gender"
              label="Gender"
            />
          </v-flex>
          <br>
          <v-container  grid-list-md >
            <v-layout row-wrap>
            <v-flex xs3>
            <v-select
              :items="items"
              v-model="country"
              label="Country"
            />
            </v-flex>
            <v-flex xs2>
            <v-select
              :items="items"
              v-model="state"
              label="State"
            />
            </v-flex>
            <v-flex xs4>
            <v-select
              :items="items"
              v-model="city"
              label="City"
            />
            </v-flex>
              &nbsp;&nbsp;&nbsp;or&nbsp;&nbsp;&nbsp;
              <br>
              <v-text-field
                label="ZipCode"
                v-model="zipcode"
              />
            </v-layout>
          </v-container>
          <v-container  grid-list-md >
            <v-layout row-wrap>
              Birthdate: &nbsp;&nbsp;&nbsp;
              <v-flex xs3>
                <v-select
                  :items="items"
                  v-model="month"
                  label="Month"
                />
              </v-flex>
              <v-flex xs2>
                <v-select
                  :items="items"
                  v-model="day"
                  label="Day"
                />
              </v-flex>
              <v-flex xs4>
                <v-select
                  :items="items"
                  v-model="year"
                  label="Year"
                />
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>

        <v-btn
          @click="register"
          class="success"
          xs3
          large
        >
          Sign Up
        </v-btn>
        <hr >or<br>
        <v-btn
          class="primary"
          xs3
          large
        >
          Sign Up with Facebook
        </v-btn>
        <v-btn
          class="error"
          xs3
          large
        >
          Sign Up with Google
        </v-btn>
        <br>
        <div class = "error" v-html = "error"> </div>
        <br>
      </div>
      Already registered? Click to sign in
    </v-container>
  </v-flex>
</template>

<script>
/* eslint-disable no-unused-vars */
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      country: '',
      state: '',
      city: '',
      zipcode: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
          location: {
            country: this.country,
            state: this.state,
            city: this.city,
            zipcode: this.zipcode
          },
          birthdate: this.month + this.day + this.year
        })
        // this.$store.dispatch('setUser', response.data.user)
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
