<script setup lang="ts">
import Input from '../../components/stories/input/Input.vue';

let showMsgCPF = ref(true);
let showMsgPassword = ref(true);
let inputCPF = ref('');
let inputPassword = ref('');
let errorMessage = ref('');
const callError = false;

async function login() {
  try {

    showMsgCPF.value = inputCPF.value !== '' ? false : true;
    showMsgPassword.value = inputPassword.value !== '' ? false : true;
    showMsgCPF.value = inputCPF.value === '' ? false : true;
    showMsgPassword.value = inputPassword.value === '' ? false : true;

    if (inputCPF.value === '' && inputPassword.value !== '') {
      // mudar condição desse if futuramente, ele deve validar a resposta do envio á api, para caso dados incorretos;

      errorMessage.value = "Login e/ou senha incorreto(s)."

    }

  } catch (error) {
    console.log(error);

  }
}

const onChangeInput = (cpf: string): void => {
  inputCPF.value = maskCPF(cpf);
};

const onChangeInputPassword = (password: string): void => {
  inputPassword.value = password;
};

const onInputPassWord = (): void => {
  showMsgPassword.value = true;
};

const onInputCPF = (event: InputEvent) => {
  const input = event.target as HTMLInputElement; 
  input.value = maskCPF(input.value);
  onChangeInput(input.value);

  showMsgCPF.value = input.value === '' ? false : true;
};

function maskCPF(cpf: string): string {

  cpf = cpf.replace(/\D/g, "");
  cpf = cpf.slice(0, 11); 
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); 
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); 

  return cpf;
}
</script>

<template>
  <div class="flex items-center justify-center h-screen bg-opacity-100">
    <div class="flex items-center h-full">
      <form class="absolute pt-10 bg-white rounded-md w-2/1 pr-11 pl-11 pb-9">
        <div class="flex flex-col">
          <label class="text-3xl font-bold text-color-primary">
            Login
          </label>
          <label class="text-base text-color-primary">Faça seu login para acessar o sistema.</label>
        </div>
        <div class="flex flex-col pt-8 pb-6 gap-y-2">
          <div class="pb-2"> <Input type="text" :valid="true"  @input="onInputCPF"  @keyup="onInputCPF" @change-input="onChangeInput"
              :valueInput="inputCPF" v-model="inputCPF" size="large" label="Login" /> </div>
          <div class="pb-2"> <Input type="text" :valid="false"  @input="onInputPassWord"  @keyup="onInputPassWord" @change-input="onChangeInputPassword"
              :valueInput="inputPassword" v-model="inputPassword" size="large" label="Senha" /> </div>
        </div>

        <div class="flex items-center justify-center pb-14">

          <h1 class="text-base font-bold text-color-primary">
            <nuxt-link to="/recoverPassword"> Esqueceu a Senha? </nuxt-link>
          </h1>
        </div>

        <button @click="login" class="h-10 mb-5 rounded-lg w-72 bg-color-primary focus:ring-2 focus:border-cyan-300">
          <span class="text-base font-bold text-white">Entrar</span>
        </button>

        <div class="flex items-center justify-center">
          <h1 class="absolute float-right mt-24 text-xs text-white">
            Deliver IT - © 2023 Entregamos Valor
          </h1>
        </div>
      </form>
      <div class="items-center justify-center pl-96 mb-11">
        <img class="absolute w-64 ml-16" src="../../assets/lg2.svg" alt="Logo" />
      </div>
    </div>
  </div>
</template>
