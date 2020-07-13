<template>
  <div>
    <ak-swiper itemWidth="250px">
      <ak-swipe-item v-for="item in 5">{{item}}</ak-swipe-item>
    </ak-swiper>
   <!-- <Tt12 :imgList="imgList"></Tt12>-->
  </div>
</template>
<script>
import Tt12 from './tt'

export default {
  data() {
    return {
      imgList: [0, 2, 3, 4, 5, 6, 7],
      form: {
        name: '',
        password: ''
      }
    }
  },
  components: {Tt12},
  methods: {},
  mounted() {

  }
}
</script>
