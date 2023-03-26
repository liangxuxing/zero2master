<template>
    <div class="container">
      <div class="navbar">
        <ul>
          <li @click="activeTab='log'">日志</li>
          <li @click="activeTab='intro'">个人介绍</li>
          <li @click="activeTab='news'">科技新闻</li>
        </ul>
      </div>
      <div class="content">
        <transition name="fade">
          <div v-if="activeTab==='log'" class="page log">
            <h1>日志</h1>
            <p>这是我的日志页面。</p>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="activeTab==='intro'" class="page intro">
            <h1>个人介绍</h1>
            <p>这是我的个人介绍页面。</p>
          </div>
        </transition>
        <transition name="fade">
          <div v-if="activeTab==='news'" class="page news">
            <h1>科技新闻</h1>
            <p>这是我的科技新闻页面。</p>
          </div>
        </transition>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { reactive ,toRefs} from 'vue'
  
      const state = reactive({
        activeTab: 'log'
      })
      const {activeTab} =toRefs(state)
  
 
  </script>
  
  <style>
  .container {
    background-image: url('/static/background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
  }
  
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
  
  .navbar ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    margin: 0;
    height: 5rem;
    list-style: none;
  }
  
  .navbar li {
    color: #fff;
    font-size: 1.8rem;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  
  .navbar li:hover {
    color: #bfbfbf;
  }
  
  .content {
    margin-top: 5rem;
  }
  
  .page {
    padding: 2rem;
    color: #fff;
    text-align: center;
  }
  
  .log {
    background-color: rgba(204, 204, 204, 0.5);
  }
  
  .intro {
    background-color: rgba(204, 204, 204, 0.5);
  }
  
  .news {
    background-color: rgba(204, 204, 204, 0.5);
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  