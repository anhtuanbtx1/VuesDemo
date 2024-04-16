<template>
    <div class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </template>
  
  <script>
    import { RouterLink } from 'vue-router';
  export default {
    components: {
      RouterLink
    }
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #333;
    overflow: hidden;
  }
  
  .navbar a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  .navbar a:hover {
    background-color: #ddd;
    color: black;
  }
  </style>
  