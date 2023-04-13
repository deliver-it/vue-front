
<template>
  <div class="overflow-auto">
    <div class="flex m-5">
      <Dropdown />
    </div>
    <div class="m-3">
      <psButton :terciary="false" :plus="true" label="Botão Plus" size="medium" />
    </div>

    <div class="flex pt-3 lg:flex-row">
      <div class="m-3">
        <Datepicker size="small"  valid label="small " />
      </div>
      <div class="m-3 ">
        <Datepicker size="medium"  valid label="medium " />
      </div>
      <div class="m-3 ">
        <Datepicker size="large" required valid label="large *" />
      </div>
    </div>
    <div class="flex">
      <div class="m-3">
        <Select size="super-small" label="" class="mt-0.5" valid :options="Result4Page" />
      </div>
      <div class="m-3">
        <Select default size="small" valid label="small" :options="optionsSelect" />
      </div>
      <div class="m-3">
        <Select default size="medium" valid label="medium" :options="optionsSelect" />
      </div>
      <div class="m-3">
        <Select default size="large" valid label="large" :options="optionsSelect" />
      </div>

    </div>

    <div class="flex ">
      <Search default size="small" class="m-3"></Search>
      <Search default size="medium" class="m-3"></Search>
      <Search default size="large" class="m-3"></Search>
      <Label class="m-3 font-light text-neutral-300 text-mov-body-md" label="Busca"></Label>

    </div>
    <div class="flex ">
    <Input  type="default" :valid="true" label="Valor" />
    </div>
  </div>
</template>
<script setup lang="ts">


import Label from '../../components/stories/typography/Typography.vue';
import Dropdown from '../../components/stories/button/Dropdown-button.vue';
import psButton from '../../components/stories/button/Button.vue';
import Datepicker from '../../components/stories/datepicker/Datepicker.vue';
import Select from '../../components/stories/select/Select.vue';
import Search from '../../components/stories/search-input/Search.vue';
import Input from '../../components/stories/input/Input.vue';

const optionsSelect = ['Pré Processamento', 'Processamento', 'Concluído', 'Todos'];
const Result4Page = ['5', '10', '15', '20', '30', '45', '50', '100'];

</script>