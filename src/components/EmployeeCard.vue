<template>
  <div class="employee-data">
    <div class="avatar-style">
        <img :src="avatarIcon" style="width: 90%; height: 60%; margin-top: 0px;"/>
    </div>
    <div class="inform-style">
      <p class="bold-style" style="font-size: 16px;">{{data.name}}</p>
      <div class="text-style">
        <p class="bold-style" style="margin-right: 10px; font-size: 14px;">email:</p>{{data.email}}
      </div>
      <div class="text-style">
        <p class="bold-style" style="margin-right: 10px; font-size: 14px;">phone:</p>{{data.phone}}
      </div>
      <p class="bold-style" style="margin-top: 20px; margin-bottom: 20px; font-size: 16px;">О себе:</p>
      <p class="description-style" style="font-size: 14px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div>
  </template>
    
  <script>
  import { ref, inject } from 'vue'
  import avatarIcon from '../assets/images/avatarIcon.svg';
  

  export default {
    name: 'EmployeeCard',
    setup() {
      const {userId} = inject('userData');
      const data = ref( userId.value !== 0 ? 
        fetch(`https://jsonplaceholder.typicode.com/users/${userId.value}`)
        .then((response) => response.json())
        .then((json) => {data.value = json;}) : []
      );
      return {
        avatarIcon,
        userId,
        data
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
    .employee-data {
      width: 100%;
      min-height: 75vh;
      font-family: "Montserrat-Regular";
      color: #76787D;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .avatar-style {
      font-family: "Montserrat-Bold";
      width: 45%;
      min-height: 72vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      padding-bottom: 0px;
      align-items: center;
    }
    .inform-style {
      width: 55%;
      min-height: 69vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 20px;
      align-items: flex-start;
    }
    .text-style {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .bold-style {
      font-family: "Montserrat-Bold";
      margin: 0;
      color: #000000;
    }
    .description-style {
      text-align: left;
      margin-right: 25px;
    }
  </style>
    