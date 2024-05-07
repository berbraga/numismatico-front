<template>
  <q-page class="q-pa-md bd-black">
    <q-card class="q-pa-xl-sm">
      <q-card-section>
        <q-card-title class="flex items-center">
          <q-icon name="account_circle" class="q-mr-sm" />
          <h6>Suas Cedulas</h6>
          <q-space />
          <router-link to="/dashboard/portfolio/add">
            <PrimaryButton>Adicionar</PrimaryButton>
          </router-link>
        </q-card-title>
      </q-card-section>

      <q-card-section>
        <Cedula />
        <Cedula isToSell />
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script setup>
import Cedula from "../../components/Card/Cedula.vue";
import PrimaryButton from "src/components/Button/PrimaryButton.vue";
</script>
