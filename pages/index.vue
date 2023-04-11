<script setup lang="ts" >

import HeaderMenu from '../components/stories/menu/Header-menu.vue';
import SidebarMenu from '../components/stories/menu/Sidebar-menu.vue';
import Dashboard from './painel/dashboard.vue';
import Maintanance from './maintenance.vue';

const showMenu = ref(false);
const valueUpdate = ref('');

const toggleMenu = (value: boolean) => {
  showMenu.value = value;
  console.log(showMenu.value);
};

const changePage = (value: string) => {
  valueUpdate.value = value;

};

const pages = {
  dashboard: Dashboard,
  maintenance: Maintanance
};

const currentPage = computed(() => pages[valueUpdate.value]);

</script>


<template>
  <div class="">
    <div class="">
      <div class="w-full ">
        <header-menu class="" @show-menu="toggleMenu" />
      </div>
      <div class="flex">
        <div class="">
          <sidebar-menu @value-updated="changePage" v-show="showMenu" />
        </div>

        <div class="w-screen  h-screen p-3.5 bg-white ">

          <component :is="currentPage" />



        </div>
      </div>
    </div>
  </div>
</template>
