<template>
  <nav>
    <p class="section-name">Binding</p>
    <router-link
      v-for="(route, idx) in routerList"
      :key="route.id"
      :to="route.to"
      >{{ route.title }} {{ idx !== routerList.length - 1 ? '|' : '' }}
    </router-link>
  </nav>
  <br />
  <nav>
    <p class="section-name">Event</p>
    <router-link to="/event/click">Click Event</router-link> |
    <router-link to="/event/change">Change Event</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      routerList: [
        { id: 1, to: '/', title: 'Home' },
        { id: 2, to: '/about', title: 'About' },
        { id: 3, to: '/databinding/string', title: 'Binding' },
        { id: 4, to: '/databinding/html', title: 'Binding HTML' },
        { id: 5, to: '/databinding/input', title: 'Binding input' },
        { id: 6, to: '/databinding/select', title: 'Binding select' },
        { id: 7, to: '/databinding/checkbox', title: 'Binding checkbox' },
        { id: 8, to: '/databinding/list', title: 'Binding list' },
        { id: 9, to: '/databinding/class', title: 'Binding class' },
        { id: 10, to: '/databinding/style', title: 'Binding style' }
      ]
    }
  },
  setup() {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.section-name {
  font-size: 30px;
  font-weight: bold;
}
</style>
