<template lang="pug">
q-card(color="white" class="q-pa-md container")
  q-card-section
    div.flex
      h6 Login
      q-space
      router-link( to="/forgot-password")
          p.text-right.text-primary Esqueceu a senha?
  q-separator(class='q-mb-md')
  q-card-section(class="q-pt-md")
    q-form(@submit.prevent="onSubmit"  class="q-gutter-sm collum" )
      q-input(outlined label="Email" name="email" v-model="email" type="email" class="q-mb-md" dense :rules="[ val => val && val.length > 0 || 'CAMPO OBRIGATÓRIO', val => /.+@.+\..+/.test(val) || 'EMAIL INVÁLIDO', val => /.+@.+\.com$/.test(val) || 'EMAIL DEVE TERMINAR EM .COM' ]" data-cy="email-input")

      q-input(outlined label="Senha" name="password" v-model="password" :type="isPwd ? 'password' : 'text'" class="q-my-md" dense :rules="[ val => val && val.length > 0 || 'CAMPO OBRIGATÓRIO' ]" data-cy="password-input")

        template(v-slot:append)
          q-icon(
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          )
      div(class="flex")
        q-btn(label="Entrar" type="submit" color="primary" class="col-3")
        q-space
        router-link(to="/register" class="col q-mx-md")
          q-btn(color="primary" label="register" @click="Login" dense class="" flat  :ripple="{  center: true }" )
</template>

<script setup>
import userService from "src/services/userService";
import { ref } from "vue";
const email = ref("");
const password = ref("");
const isPwd = ref(true);
const lodingLogin = ref(false);
const lodingNewAccont = ref(false);
const Login = () => {
  lodingLogin.value = true;
};
const NewAccont = () => {
  lodingNewAccont.value = true;
};

const onSubmit = async () => {
  console.clear();
  const body = {
    email: email.value,
    password: password.value,
  };
  const user = new userService();
  const res = await user.login(body);
  console.log(res.data);
  if (res.data.status) {
    localStorage.setItem("user", JSON.stringify(res.data.user));
    history.pushState(null, "", "#/dashboard/portfolio");
    location.reload();
  }
};
</script>

<style scoped>
.container {
  min-width: 400px;
}
</style>
