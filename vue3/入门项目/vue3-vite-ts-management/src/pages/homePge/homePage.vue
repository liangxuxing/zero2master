<template>
  <div class="homePage_container">
    <div class="header">header</div>
    <div class="menus">menus</div>
    <div class="content">content</div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.homePage_container {
  height: 100%;
  background-color: #bfa;
  position: relative;
  .header {
    background-color: antiquewhite;
    height: 70px;
  }
  .menus {
    position: absolute;
    background-color: aqua;
    top: 70px;
    left: 0;
    bottom: 0;
    width: 250px;
  }
  .content {
    background-color: bisque;
    position: absolute;
    top: 70px;
    right: 0;
    left: 250px;
    bottom: 0;
  }
}
</style>
