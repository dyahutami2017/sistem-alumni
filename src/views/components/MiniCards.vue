<template>
  <div class="card mb-2" :class="directionReverse ? reverseDirection : ''">
    <div class="card-header p-3 pt-2">
      <div
        class="icon icon-lg icon-shape shadow-dark shadow text-center border-radius-xl mt-n4 position-absolute"
        :class="iconBackground"
      >
        <i
          class="material-icons opacity-10"
          :class="iconClass"
          aria-hidden="true"
          >{{ iconName }}</i
        >
      </div>
      <div
        class="pt-1"
        :class="this.$store.state.isRTL ? 'text-start' : 'text-end'"
      >
        <h5 class="mb-0">{{ value }}</h5>
        <h6 class="text-sm mb-0 text-capitalize">{{ title }}</h6>
      </div>
    </div>
    <div
      class="card-footer p-2"
      :class="this.$store.state.isRTL ? 'text-start' : 'text-end'"
    >
      <p class="mb-0">
        <span class="text-success text-sm font-weight-bolder">{{
          percentage
        }}</span>
        {{ detail }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "mini-cards",
  data() {
    return {
      reverseDirection: "flex-row-reverse justify-content-between",
    };
  },
  props: {
    directionReverse: Boolean,
    title: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
    value: {
      required: true,
    },
    percentage: String,
    iconName: {
      type: String,
      required: true,
    },
    iconClass: {
      type: String,
      required: true,
    },
    iconBackground: {
      type: String,
      default: "bg-white",
    },
  },
};
</script>
