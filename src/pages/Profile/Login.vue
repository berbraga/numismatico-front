<template lang="pug">
q-card(color="white" class="q-pa-md")
  q-card-section
    .flex.column
      h6 Login
  q-separator(class='q-mb-md')
  q-card-section(class="q-pt-md")
    q-input(outlined label="Email" v-model="email" type="email" class="q-mb-md" dense)
    q-input(outlined label="Password" v-model="password" :type="isPwd ? 'password' : 'text'" class="q-my-md" dense)
      template(v-slot:append)
        q-icon(
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        )
    router-link( to="/login/forgot-password")
      p.text-right.text-primary Esqueceu a senha?
  q-card-section
    q-card-action(class="row")
      q-btn(color="primary" label="Login" @click="entrar" class=" col q-px-sm")
      q-space
      q-btn(color="primary" label="Criar conta" @click="entrar" class=" col q-px-sm")
</template>

<script setup>
import { ref } from "vue";
const email = ref("");
const password = ref("");
const isPwd = ref(true);
</script>

<style scoped>
/* Add styles here if necessary */
</style>
