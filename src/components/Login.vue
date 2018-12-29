<template>
  <div class="container login">
    <br>
    <div class="row">
      <div class="col-md-4">
      </div>
      <div class="col-md-4">
        <h3>Sign In</h3>
        <i class="fa fa-envelope" style="color:CornflowerBlue"></i>&nbsp;
        <input type="text" v-model="email" placeholder="Email"><br>
        <i class="fa fa-lock" style="color:CornflowerBlue"></i>&nbsp;
        <input type="password" v-model="password" placeholder="Password"><br>
        <button class="btn btn-primary" @click="login">Login</button>
        <p>You don't have an account ? You can <router-link to="/register">create one</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import firebase from 'firebase'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$bus.$emit('logged', this.email)
            this.$router.replace('dashboard')
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
/* "scoped" attribute limit the CSS to this component only */
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 90%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 30%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
