<template>
  <div class="employees">
    <div class="list">
      Поиск сотрудников
      <input @change="handleStatusChange($event)" class="input-style" placeholder="Введите id или имя">
      Результаты
      <p v-if="status === 'beginning'" style="font-family: Montserrat-Regular; font-size: 14px; color: #76787D;">начните поиск</p>
      <p v-if="status === 'list' && data.length === 0" style="font-family: Montserrat-Regular; font-size: 14px; color: #76787D;">ничего не найдено</p>
      <div v-if="status === 'list' && data.length !== 0">
        <div @click="handleIdChange(el)" v-bind:key="el" v-for="el in data" :class="clickedStatus ? 'li-style-clicked' : 'li-style'">
          <div class="image-style">
            <img :src="avatarIcon" style="width: 100%; height: 100%; margin-top: 0px;"/>
          </div>
          <div class="inform-style">
            <p class="bold-style">{{el.username}}</p> {{el.email}}
          </div>
        </div>
      </div>
    </div>
    <div class="employee-card">
      <p v-if="!clickedStatus" style="font-size: 17px; color: #76787D;">Выберите сотрудника, чтобы посмотреть его профиль</p>
      <div v-if="clickedStatus"><EmployeeCard/></div>
    </div>  
  </div>
</template>
  
<script>
import { ref, provide } from 'vue'
import EmployeeCard from './EmployeeCard.vue';
import avatarIcon from '../assets/images/avatarIcon.svg';

export default {
  name: 'EmployeeList',
  components: {
    EmployeeCard
  },
  setup() {
    let userId = ref(0);
    let clickedStatus = ref(false);
    let status = ref('beginning');
    const data = ref(
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => {data.value = json;}));
    
    function handleStatusChange(event) {
      fetch(`https://jsonplaceholder.typicode.com/users?name=${event.target.value}`)
        .then((response) => response.json())
        .then((json) => {data.value = json});
      fetch(`https://jsonplaceholder.typicode.com/users?username=${event.target.value}`)
        .then((response) => response.json())
        .then((json) => data.value = [...data.value, ...json]);
      if (status.value === 'beginning') status.value = 'list';
      else if (status.value === 'list') status.value = 'beginning';
    }
    function handleIdChange(el) {
      clickedStatus.value = !clickedStatus.value;
      userId.value = el.id;
    }
    provide('userData', {userId});
    return {
      data,
      status,
      userId,
      clickedStatus,
      avatarIcon,
      handleStatusChange,
      handleIdChange
    }
  }
}
</script>
  
<style scoped>
  @font-face {
    font-family: "Montserrat-Regular";
    src: local("Montserrat"),
      url(../assets/fonts/Montserrat-Regular.ttf) format("truetype");
  }
  @font-face {
    font-family: "Montserrat-Bold";
    src: local("Montserrat"),
      url(../assets/fonts/Montserrat-Bold.ttf) format("truetype");
  }
  .employees {
    width: 95vw;
    min-height: 75vh;
    font-family: "Montserrat-Regular";
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }
  .list {
    font-family: "Montserrat-Bold";
    width: 25vw;
    border-right: 2px solid #DEDEDD;
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: flex-start;
  }
  .input-style {
    font-family: "Montserrat-Regular";
    padding-left: 10px;
    margin: 25px;
    margin-left: 0px;
    height: 40px;
    width: 24vw;
    border-radius: 8px;
    border: 1.5px solid #E9ECEF;
  }
  .employee-card {
    width: 70vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .li-style {
    margin-top: 20px;
    width: 24vw;
    height: 70px;
    border-radius: 10px;
    font-family: "Montserrat-Regular";
    color: #76787D;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 0px 10px rgb(190, 190, 190);
    align-items: stretch;
  }
  .li-style-clicked {
    margin-top: 20px;
    width: 24vw;
    height: 70px;
    border-radius: 10px;
    font-family: "Montserrat-Regular";
    color: #76787D;
    display: flex;
    justify-content: space-between;
    border: 1px solid #E0E0E0;
    background-color: #E0E0E0;
    align-items: stretch;
  }
  .image-style {
    background-color: white;
    font-family: "Montserrat-Bold";
    width: 25%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    height: 70px;
    border-right: 2px solid #DEDEDD;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .inform-style {
    font-size: 14px;
    padding: 10px;
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .bold-style {
    font-family: "Montserrat-Bold";
    margin: 0;
    color: #000000;
  }
  
</style>
  