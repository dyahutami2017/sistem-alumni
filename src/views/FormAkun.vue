<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12 col-md-12 mb-md-0 mb-4">
        <form-card-akun v-on:update-akun="updateAkun" />
      </div>
    </div>
  </div>
</template>
<script>
import FormCardAkun from "./components/FormCardAkun.vue";

export default {
  name: "form-akun",
  components: {
    FormCardAkun,
  },
  methods: {
    updateAkun() {},
  },
};
</script>
