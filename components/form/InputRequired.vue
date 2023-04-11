 
<script setup lang="ts">
const props = defineProps<Props>();
const inputValue = ref("");
const isTyping = ref(false);

const emits = defineEmits(["changeInput"]);
const onChange = () => {
  emits("changeInput", inputValue.value);

  isTyping.value = true;
};

interface Props {
  label: string;
  type: string;
}
</script>

<template>
  <div class="relative mt-3 font-light border rounded-lg group hover:bg-slate-50 focus:border-cyan-300">
    <input required v-model="inputValue" @input="onChange" :type="type" :class="{
      'invalid-input': !inputValue,
      'valid-input': isTyping,
    }" placeholder=" " />

    <label class="label-input">
      {{ label }}
      <label class="attentionPoint">*</label>
    </label>
  </div>
</template>
  

