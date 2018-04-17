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
            <br>
            <v-text-field
              label="password"
              v-model="password"
              :rules="passwordRules"
              required
            />
          </v-form>
          <v-btn
            @click="login"
            class="success"
            xs3
            large
          >
            Sign In
          </v-btn>
          <hr >or<br>
          <v-btn
            class="primary"
            xs3
            large
          >
            <v-icon>fas fa-facebook</v-icon> Sign In with Facebook
          </v-btn>
          <v-btn
            class="error"
            xs3
            large
          >
            Sign In with Google
          </v-btn>
        <br>
        <div class = "error" v-html = "error"> </div>
        <br>
        </div>
        Not a member? Click this link to register
      </v-container>
    </v-flex>
</template>

<script>
/* eslint-disable no-unused-vars */
import AuthenticationService from '@/services/AuthenticationService'

export default {
  components: {
  },
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
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
