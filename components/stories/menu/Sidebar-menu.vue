<script setup lang="ts">
import Label from '../typography/Typography.vue';


const items = [
  { nome: 'Dashboard', icone: 'description', quantidade: 23 , path: 'dashboard' },
  { nome: 'Option 2', icone: 'credit_card', quantidade: 0,path:'maintenance' },
  { nome: 'Option 3', icone: 'forum', quantidade: 7 },
  { nome: 'Option 4', icone: 'apartment', quantidade: 0 },
  { nome: 'Option 5', icone: 'ecg', quantidade: 16 },
  { nome: 'Option 6', icone: 'moviments', quantidade: 12},

];

const props = defineProps({
  isActive: Boolean,


})
const emits = defineEmits(['update:isActive', 'value-updated'])
const valueUpdate = ref('');

function handleClick(path: String) {
  emits('update:isActive', true)
  const value = path;
  emits('value-updated', value);
}
function loadPage(value?: string) {
  valueUpdate.value = value??'';
  emits('value-updated', valueUpdate.value);
  
}
</script>

<template>
  <nav id="sidenav-2 " class=" w-60 bg-color-primary" data-te-sidenav-init data-te-sidenav-hidden="false"
    data-te-sidenav-mode="side" data-te-sidenav-content="#content">
    <ul class="h-screen ">
      <li class="p-2"></li>
      <li class="pb-3 " @click="handleClick(String(item.path))" v-for="item in items" :key="item.nome">
        <button :class="{
          'bg-color-primary-focus': isActive,
          'focus:bg-color-primary-focus': !isActive
        }" @click="loadPage(item.path)"
          class="flex w-full font-light h-11 top-3.5 cursor-pointer items-center truncate hover:bg-color-primary-opacity py-4 px-6  text-white outline-none  active:text-white focus:outline-none active:bg-color-primary-opacity active:text-inherit active:outline-none">
          <span class="mr-3  [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 ">
            <!-- <img src="../../../assets/description.svg" /> -->
            <img  :src="`/_nuxt/assets/icons/${item.icone}.svg`" />
          </span>
          <Label size="large-label" class="cursor-pointer" :label="item.nome"></Label>
          <div style="padding-top: 0.1em; padding-bottom: 0.1rem" v-show="item.quantidade"
            class="px-3 ml-2 text-white bg-red-500 rounded-full text-mov-label-md bold">{{ item.quantidade }}</div>
        </button>

      </li>
    </ul>
  </nav>
</template>
