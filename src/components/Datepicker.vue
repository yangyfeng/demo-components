<template lang="pug">
    VueDatepickerLocal.date(v-model="time", rangeSeparator="至", format="YYYY年MM月DD日 HH:mm:ss", @confirm="confirm", show-buttons)
</template>
<script>
import VueDatepickerLocal from 'vue-datepicker-local'
export default {
  components: {
    VueDatepickerLocal
  },
  methods: {
    confirm () {
      alert('confirm')
    }
  },
  data () {
    return {
      time: [new Date(), new Date()]
    }
  }
}
</script>

<style lang="less" scoped>
  .date {
    width: 400px;
  }
</style>
