<script setup lang="ts">

import Label from '../components/stories/typography/Typography.vue';

</script>
<template>
    <div class="flex items-center justify-center h-screen bg-opacity-100">
        <div class=" pb-96">
            <img class="w-64 mb-40" src="../assets/lg2.svg" alt="Logo" />
        </div>
        <div class="absolute pt-32 pb-32 pl-32 pr-32 bg-gray-200 rounded-md w-2/1">

            <div>
                <div class="flex items-center justify-center mb-2">
                    <img class="w-20 " src="../assets/icons/maintenance.svg" alt="Logo" />
                </div>
                <div>
                    <Label size="large-headline" class="text-color-primary" label="Servidor em Manutenção"></Label>
                </div>
                <div class="flex items-center justify-center">
                    <Label size="medium-body" class="text-color-primary" label="Tente novamente em breve"></Label>
                </div>
            </div>
            <div class="flex items-center justify-center">
                <h1 class="absolute float-right text-xs text-white mt-72">
                    Deliver IT - © 2023 Entregamos Valor
                </h1>
            </div>

        </div>

    </div>
</template>
