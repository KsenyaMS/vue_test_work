<template>
  <div class="layout">
    <div class="header-div">
      <div class="name">
        Жилфонд
      </div>
      <div class="user">
        Пользователь
      </div>
    </div>
    <div class="content">
      <EmployeesList/>
    </div>
  </div>
</template>

<script>
import EmployeesList from './EmployeesList.vue';
export default {
  name: 'FirstPage',
  components: {
    EmployeesList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.layout {
  font-family: "Montserrat-Regular";
  margin: 20px;
  display: flex;
  flex-direction: column;
}
.header-div {
  margin-top: 0px;
  margin-bottom: 20px;
  padding-top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.name {
  font-family: "Montserrat-Bold";
  color: #E31F24;
  font-size: 32px;
}
.user {
  color: #333333;
  font-size: 16px;
}
.content {
  background: #FDFDFD;
  width: 95vw;
  min-height: 75vh;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgb(190, 190, 190);
}
</style>
