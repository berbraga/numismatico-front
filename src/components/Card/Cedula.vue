<template lang="pug">
q-card(
  class="q-pa-md q-my-sm row items-center "
  :class="cedula.available_sell===0 || cedula.available_sell==undefined ?'bg-red-3' : 'bg-green-2'"
  flat
)
  q-img(
    style="height: 140px; max-width: 150px"
    class="col"
    :src="cedula.url_img"
  )
  div(class="col q-mx-md")
    div(class="flex  items-center")
      div(class="collumn w-100 ")
        h5 {{ cedula.name }}
        small {{ cedula.year }}
      q-space
      p {{ cedula.country }}
    div(class="flex items-center q-my-md")
      p Material: {{ cedula.material }}
      q-space
      p Conservação: {{ cedula.condition }}
    div(class="flex items-center q-my-md")
      q-btn(outline color="primary" label="Observações" @click="basic = true" )
      q-space
      q-btn(outline v-if="changeble" color="primary" label="Vender Ela!" @click="toSell()" )
      q-space( v-if="changeble")
      p Valor de Compra: <b>R${{ cedula.name }}</b>


    q-dialog( v-model="basic" transition-show="rotate" transition-hide="rotate")
      q-card
        q-card-section
          div( class="text-h6") Terms of Agreement

        q-card-section( class="q-pt-none")
          p(  ) {{ cedula.observation }}
        q-card-actions(align="right")
          q-btn( flat label="Fechar" color="primary" v-close-popup )

  div(class="col-1")

</template>
<script setup>
import { ref, defineProps } from "vue";
import cedulaService from "src/services/cedulaService";

const props = defineProps({
  cedula: Object,
  changeble: Boolean,
});
const toSell = async () => {
  const cedula = new cedulaService();
  await cedula.changeToMarketplace(props.cedula.id);
  location.reload();
};

const basic = ref(false);
</script>
<style></style>
