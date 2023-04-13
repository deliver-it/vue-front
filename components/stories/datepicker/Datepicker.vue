<template>
    <div :class="{
        'storybook-datepicker--large-icon': classes['storybook-datepicker--large'],
        'storybook-datepicker--medium-icon': classes['storybook-datepicker--medium'],
        'storybook-datepicker--small-icon': classes['storybook-datepicker--small']
    }">
        <vue3-datepicker v-model="date" format="dd-MM-YYYY" :locale="locale" type="date" @input="onChange" :class="classes"  />

        <label
            :class="{ 'label-datepicker--valid': !classes['storybook-datepicker--invalid'], 'label-datepicker--invalid': classes['storybook-datepicker--invalid'] }">
            {{ label ?? 'Label' }}
        </label>

        <div class="absolute inset-y-0 right-0 flex ">
            <img
           
            :class="{'storybook-datepicker--valid-icon': !classes['storybook-datepicker--invalid'], 
        'storybook-datepicker--invalid-icon':classes['storybook-datepicker--invalid'],
        'storybook-datepicker--default-icon':!classes['storybook-datepicker--invalid']}" 
            
            v-show="!classes['storybook-datepicker--invalid']"
            src="../../../assets/icons/date.svg" />

            <img
           
           :class="{'storybook-datepicker--valid-icon': !classes['storybook-datepicker--invalid'], 
       'storybook-datepicker--invalid-icon':classes['storybook-datepicker--invalid'],
       'storybook-datepicker--default-icon':!classes['storybook-datepicker--invalid']}" 
           
           v-show="classes['storybook-datepicker--invalid']" 
           src="../../../assets/icons/date-error.svg" />
        </div>
        
    </div>
</template>
  
<script setup lang="ts">
import './datepicker.css';
import Vue3Datepicker from "vue3-datepicker";
import "vue3-datepicker/dist/vue3-datepicker.css";
import { ref, computed } from "vue";
import { pt } from 'date-fns/locale'

const props = defineProps<Props>();
const date = ref();
const locale = pt;
const inputValue = "";
let isTyping = false;

interface Props {
    label: string;
    default?: boolean;
    valid?: boolean;
    invalid?: boolean;
    size?: 'small' | 'medium' | 'large';
}

const emits = defineEmits(["changeInput"]);
const onChange = () => {
    emits("changeInput", date);

    isTyping = true;
};


const classes = computed(() => ({
    'storybook-datepicker--default': props.default,
    'storybook-datepicker--valid': props.valid,
    'storybook-datepicker--invalid': props.invalid,
    [`storybook-datepicker--${props.size || 'medium'}`]: true,
}));


</script>