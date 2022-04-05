<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12 col-md-12 mb-md-0 mb-4">
        <form-card v-on:save-profil="saveProfil" />
      </div>
    </div>
  </div>
</template>
<script>
import FormCard from "./components/FormCard.vue";

export default {
  name: "form-profile",
  components: {
    FormCard,
  },
  methods: {
    addCustomer(customer) {
      this.customers.push(customer);
    },
  },
};
</script>
