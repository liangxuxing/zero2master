<template>
  <div class="homePage_container">
    <div class="header">header</div>
    <div class="menus">
      <el-menu active-text-color="#ffd04b" router background-color="#545c64" class="el-menu-vertical-demo" default-active="2" text-color="#fff">
        <el-sub-menu :index="item.id + ''" v-for="item in newMenu" :key="item.id">
          <template #title>
            <span>{{ item.title }} </span>
          </template>
          <template v-for="subItem in item.children" :key="subItem.id">
            <el-menu-item :index="'/' + item.name + '/' + subItem.name" v-if="!subItem.hidden">
              <template #title>
                <span>{{ subItem.title }} </span>
              </template>
            </el-menu-item>
          </template>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { useStore } from 'vuex'
import store from '../../store'
import { reactive, computed } from 'vue'
interface menuObj {
  parentId: number
  id: number
  title: string
  hidden: number
  name: string
  children?: menuObj[]
}

interface NavMenu {
  [key: number]: menuObj
}

// let store = useStore()
let newMenu: NavMenu = store.getters.getMenusArr
// let newMenu = computed<NavMenu>(() => store.getters.getMenusArr)
console.log('newmenu', newMenu)
</script>

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
