<template>
  <div class="container register">
    <div class="row">
      <div class="col-md-4">
      </div>
      <div class="col-md-4">
        <p>Let's create a new account !</p>
        <i class="fa fa-envelope" style="color:CornflowerBlue"></i>&nbsp;
        <input type="text" v-model="email" placeholder="Email"><br>
        <i class="fa fa-lock" style="color:CornflowerBlue"></i>&nbsp;
        <input type="password" v-model="password" placeholder="Password"><br>
        <i class="fa fa-lock" style="color:CornflowerBlue"></i>&nbsp;
        <input type="password" v-model="password2" placeholder="Re-type Password"><br>
        <span v-if="password!==password2" style="color: red">Passwods did not match!</span>
        <button class="btn btn-primary" @click="signUp" :disabled="password!==password2">Register</button>
        <span>or go back to <router-link to="/login">login</router-link>.</span>
      </div>
    </div>
  </div>
</template>

<script>
// import firebase from 'firebase'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      password2: ''
    }
  },
  methods: {
    signUp: function () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$bus.$emit('logged', this.email)
            this.$router.replace('Dashboard')
          },
          err => {
            alert('Oops. ' + err.message)
          }
        )
    }
  }
}
</script>

<style scoped>
.register {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 90%;
  padding: 15px;
}
button {
  margin-top: 10px;
  width: 30%;
  cursor: pointer;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 12px;
}
span a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
