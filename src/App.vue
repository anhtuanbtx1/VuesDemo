<template>
<div id="app">
  <nav>
        <router-link to='/'>Home</router-link>
      
    </nav>
    <router-view />
</div>
</template>

<script>
// import GridDevice from './components/GridDevice.vue';
//import LayoutNavi from './components/LayoutNavi.vue';
export default {
    name: 'App',
    // components:{
    //     LayoutNavi
    // }
   
}
</script>

<style>
.daChon {
    color: brown;
}

.custom-color-red {
  background-color: #ffcccc; /* Customize background color for rows with 'red' color */
}

.custom-color-blue {
  background-color: #cce5ff; /* Customize background color for rows with 'blue' color */
}

.custom-color-green {
  background-color: #d4ffd6; /* Customize background color for rows with 'green' color */
}
.custom-table {
  background-color: transparent; /* Set the background color to gray */
}

</style>
