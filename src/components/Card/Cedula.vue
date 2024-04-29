<template lang="pug">
q-card(class="q-pa-md q-my-sm row items-center " :class=" isToSell ? 'bg-red-11' : 'bg-green-2'" flat)
  q-img(
    style="height: 140px; max-width: 150px"
    class="col"
    src="https://images.tcdn.com.br/img/img_prod/726147/180_cedula_russia_100_rubles_2018_fifa_football_polimero_3535_1_09c9b6f3ec49243c08f1320f1f31b21d.jpeg"
  )
  div(class="col q-mx-md")
    div(class="flex  items-center")
      div(class="collumn w-100 ")
        h5 100 rubles
        small 2018
      q-space
      p Russia
    div(class="flex items-center q-my-md")
      p Material: Polimero
      q-space
      p Conservação: FE
    div(class="flex items-center q-my-md")
      q-btn(outline color="primary" label="Observações" @click="basic = true" )
      q-space
      p Valor de Compra: <b>R$10,00</b>


    q-dialog( v-model="basic" transition-show="rotate" transition-hide="rotate")
      q-card
        q-card-section
          div( class="text-h6") Terms of Agreement

        q-card-section( class="q-pt-none")
          p(  ) Observações: Cedula em perfeito estado de conservação, sem dobras ou rasgos.
        q-card-actions(align="right")
          q-btn( flat label="Fechar" color="primary" v-close-popup )

  div(class="col-1")

</template>
<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  isToSell: Boolean,
});

const basic = ref(false);
</script>
<style></style>
