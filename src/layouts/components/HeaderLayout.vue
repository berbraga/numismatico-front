<!-- eslint-disable vue/multi-word-component-names -->
<template lang="">
  <q-header reveal class="bg-primary text-white" height-hint="50">
    <q-toolbar>
      <q-img
        src="../../../public/logos/imagem-preta.svg"
        width="40px"
        class="q-mr-lg q-ml-sm"
      />

      <q-tabs align="left">
        <q-route-tab
          to="/dashboard/portfolio"
          label="Portifólio"
          style="color: black"
        />
        <q-route-tab
          to="/dashboard/marketplace"
          label="Mercado"
          style="color: black"
        />
        <!-- <q-route-tab to="/page3" label="Page Three" /> -->
      </q-tabs>
      <q-space />

      <q-btn color="black" flat fab-mini ripple square push>
        <!-- ppend="card_giftcard" -->
        <q-icon left size="" name="person" />
        <p class="q-mb-none">bernardo</p>
        <q-menu>
          <div class="row no-wrap q-pa-md">
            <div class="column">
              <div class="text-h6 q-mb-md">Settings</div>
              <q-toggle v-model="mobileData" label="Use Mobile Data" />
              <q-toggle v-model="bluetooth" label="Bluetooth" />
            </div>

            <q-separator vertical inset class="q-mx-lg" />

            <div class="column items-center">
              <q-avatar size="72px">
                <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
              </q-avatar>

              <div class="text-subtitle1 q-mt-md q-mb-xs">Bernardo</div>

              <q-btn
                color="primary"
                label="Sair"
                push
                size="sm"
                v-close-popup
              />
            </div>
          </div>
        </q-menu>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>
<script>
export default {};
</script>
<style lang=""></style>
