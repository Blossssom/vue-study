<template>
  <div>
    <select name="" id="" @change="(e) => changeCity(e)">
      <option value="">select</option>
      <option :key="city.id" :value="city.cityCode" v-for="city in cityList">
        {{ city.title }}
      </option>
    </select>
    <select name="" id="">
      <option value="">select</option>
      <option
        :key="dong.id"
        :value="dong.cityCode"
        v-for="dong in filterDongList"
      >
        {{ dong.dongTitle }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityList: [
        { id: 1, cityCode: '02', title: '서울' },
        { id: 2, cityCode: '031', title: '경기' },
        { id: 3, cityCode: '064', title: '제주' }
      ],
      dongList: [
        { id: 1, cityCode: '02', dongCode: '1', dongTitle: '서울 1동' },
        { id: 2, cityCode: '02', dongCode: '2', dongTitle: '서울 2동' },
        { id: 3, cityCode: '02', dongCode: '3', dongTitle: '서울 3동' },
        { id: 4, cityCode: '031', dongCode: '1', dongTitle: '산본 1동' },
        { id: 5, cityCode: '031', dongCode: '2', dongTitle: '산본 2동' },
        { id: 6, cityCode: '064', dongCode: '1', dongTitle: '애월 1동' },
        { id: 7, cityCode: '064', dongCode: '2', dongTitle: '애월 2동' }
      ],
      filterDongList: [],
      selectedCity: ''
    }
  },
  methods: {
    changeCity(event) {
      this.filterDongList = this.dongList.filter(
        (v) => v.cityCode === event.target.value
      )
    }
  }
}
</script>

<style></style>
