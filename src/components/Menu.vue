
<template>
    <div>
      <input type="text" style="margin: 5px;" v-model="query" placeholder="Nhập câu truy vấn">
      <a-button type="primary" @click="checkAPI()">Check API</a-button>
      <p v-if="apiResponse">API Response:{{ apiResponse }}</p>
      <p v-if="error">Error:{{ error }}</p>
    </div>
</template>
  
  <script>
  import { Button } from 'ant-design-vue';
  export default {
    components: {
    'a-button': Button
   },
    name: 'MenuChecker', // Updated component name
    data() {
    return {
      apiResponse: null,
      error: null,
      query:''
    };
  },
  methods: {
    async checkAPI() {
      try {
        const response = await fetch(`${this.query}`);
        const data = await response.json();
        this.apiResponse = data;
      } catch (error) {
        this.error = error.message;
      }
    }
  }
  }
  </script>
  
  
  <style scoped>
  
  </style>
  