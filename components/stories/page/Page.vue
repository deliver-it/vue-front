<template>
  <article>
    
    <section>
      <h2>Login</h2>
      <div class="w-full">
        <my-button primary size="small" @click="onClick" label="Entrar" v-if="!user" />
      </div>

    </section>
  </article>
</template>

<script >
import './page.css';

export default {
  name: 'my-page',
  data() {
    return {
      user: null,
    };
  },
  methods: {
    onLogin() {
      this.user = { name: 'Jane Doe' };
    },
  },
};
</script>