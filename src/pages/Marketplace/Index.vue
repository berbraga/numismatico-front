<template lang="pug">
q-page(class="q-pa-md bd-black")
  q-card(class="q-pa-md")
    q-card-section
      q-card-title(class="flex items-center")
        h6 Mercado
        q-space
        router-link(to="/portfolio/add")
          PrimaryButton Adicionar
    q-card-section

      //- Cedula
      //- Cedula(isToSell)
</template>
<script setup>
import PrimaryButton from "src/components/Button/PrimaryButton.vue";
</script>
<style></style>
