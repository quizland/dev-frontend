<template>
  <div class="statistics">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">

            <button class="close" @click="$emit('close')">&times;</button>
            <div class="modal-header">
              <slot name="header">
                <h3>{{ currentUserName }}'s statistics</h3>
              </slot>
            </div>

            <div class="modal-body">
              <slot name="body">
                <p>Completed Quizes: {{ userStatistic.quizesCompleted }}</p>
                <p>Average Procentage Result: {{ userStatistic.averageProcentage }}%</p>
                <!-- <p>Average Completion Time: {{ new Date(userStatistic.averageTime).toISOString().slice(-13, -5) }}</p> -->
                <p>Average Completion Time: {{  timeToString(userStatistic.averageTime) }}</p>
              </slot>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                <p><em>Are you results satisfactory?</em></p>&nbsp;
                <button class="btn btn-danger btn-sm" @click="$emit('clear')">
                  Clear
                </button>
                <button class="btn btn-success btn-sm" @click="$emit('close')">
                  Back
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ModalStatistics',
  data () {
    return {

    }
  },
  computed: {
    currentUserName () {
      return this.$store.getters.getCurrentUserName
    },
    userStatistic () {
      return this.$store.getters.getUserStatistic
    }
  },
  methods: {
    timeToString (timestamp) {
      let miliseconds = timestamp % 1000
      let res = Math.floor(timestamp / 1000)
      let seconds = Math.floor(res % 60)
      let minutes = Math.floor(res / 60) % 60
      return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds + '.' + miliseconds
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
