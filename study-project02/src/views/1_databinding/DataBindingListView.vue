<template>
  <div>
    <select name="" id="" v-model="selected">
      <option :value="city.code" v-for="(city, idx) in cities" :key="city.id">
        {{ city.title }}, {{ idx }}
      </option>
    </select>
    <br />
    <div>
      <table>
        <thead>
          <tr>
            <th>제품번호</th>
            <th>제품명</th>
            <th>가격</th>
            <th>주문수량</th>
            <th>합계</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="drink.id" v-for="drink in drinkList">
            <td>{{ drink.id }}</td>
            <td>{{ drink.drinkName }}</td>
            <td>{{ drink.price }}</td>
            <td><input min="0" type="number" v-model="drink.qty" /></td>
            <td>{{ drink.price * drink.qty }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cities: [
        { id: 1, title: '서울', code: '02' },
        { id: 2, title: '경기', code: '031' },
        { id: 3, title: '제주', code: '064' }
      ],
      selected: '',
      drinkList: [
        { drinkId: 1, drinkName: 'Coke', price: 1500, qty: 1 },
        { drinkId: 2, drinkName: 'Orange Juice', price: 1700, qty: 1 },
        { drinkId: 3, drinkName: 'Coffe', price: 1300, qty: 1 },
        { drinkId: 4, drinkName: 'Apple Juice', price: 1800, qty: 1 },
        { drinkId: 5, drinkName: 'Cider', price: 1500, qty: 1 }
      ]
    }
  }
}
</script>

<style></style>
