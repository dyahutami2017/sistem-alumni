<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12 col-md-12 mb-md-0 mb-4">
        <form-card-tracer />
      </div>
    </div>
  </div>
</template>
<script>
import FormCardTracer from "./components/FormCardTracer.vue";

export default {
  name: "form-tracer",
  components: {
    FormCardTracer,
  },
};
</script>
