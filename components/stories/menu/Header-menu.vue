<script setup lang="ts">
import { ref } from 'vue';
const showMenu = ref(false);

const emits = defineEmits(["show-menu"]);
const handleToggleMenu = () => {
  showMenu.value = !showMenu.value;
  console.log(showMenu.value);
  // emit the 'toggle-menu' event
  emits('show-menu', showMenu.value);

};

</script>

<template>
  <nav class="relative px-2 py-3 shadow-sm shadow-gray-800 bg-color-primary">
    <div class="flex flex-wrap items-center justify-between px-4 ">

      <div class="flex items-center space-x-4">
        <button @click="handleToggleMenu" type="button"
          class="text-gray-100 hover:text-gray-100 focus:outline-none focus:text-gray-100">
          <svg class="h-10 text-white w-9" x-show="! showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="2" viewBox="0 00 24 24" stroke="currentColor">
            <path d="m4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <img class="w-32 " src="../../../assets/lg2.svg" alt="Logo" />

      </div>

      <ul class="flex-col hidden ml-auto list-none md:flex lg:flex-row sm:flex-row">
        <li class="nav-item">
          <a class="flex items-center nav-link dropdown-toggle hidden-arrow" href="#" role="button"
            data-mdb-toggle="dropdown" aria-expanded="false">
            <img src="../../../assets/person.svg" class="w-10 rounded-full " alt="" loading="lazy" />
          </a>
        </li>
        <li>
          <div class="flex-col hidden pl-2 font-light md:flex">
            <label class="text-white font-semibold text-xs !sm:hidden ">NOME DO USUÁRIO</label>
            <label class="text-xs text-white ">FUNÇÃO</label>
          </div>
        </li>
      </ul>
    </div>

  </nav>
</template>
