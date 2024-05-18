<template lang="pug">
q-page(class="q-pa-md bd-black")
  q-card(class="q-pa-xl-sm")
    q-card-section
      q-card-title(class="flex items-center")
        h6 Mercado
        q-space
        //- router-link(to="/dashboard/portfolio/add")
          PrimaryButton Adicionar
    q-card-section

      Cedula
      Cedula(isToSell)
</template>
<script setup>
import Cedula from "../../components/Card/Cedula.vue";
import PrimaryButton from "src/components/Button/PrimaryButton.vue";
</script>
<style></style>
