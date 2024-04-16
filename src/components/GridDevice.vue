<template>
  <a-table :columns="columns" :data-source="dataSource" class="custom-table" :row-class-name="customRow"></a-table>
</template>

<script>
import { Table } from 'ant-design-vue';

export default {
  components: {
    'a-table': Table,
  },
  data() {
    return {
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ],
      dataSource: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
       
         
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          
        
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          
        },
      ],
    };
  },
  methods: {
    customRow(record) {
      // Customize row based on record data
      return record.color ? `custom-color-${record.color}` : ''; // Use a custom class based on color
    },
  },
};
</script>


