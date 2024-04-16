<template>
  <div id="app">
      <ul>
          <li v-for="(rent, city) in averageRent" :key="city">
              The average rent in {{ city }} is ${{ rent }}
          </li>
      </ul>
  </div>
</template>

<script>
  export default {
      data() {
          return {
              averageRent: {
                  london: 1650,
                  paris: 1730,
                  NYC: 3680
              }
          }
      }
  }
</script>
