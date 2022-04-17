<template>
  <aside
    id="sidenav-main"
    class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 ms-3"
    :class="`${
      this.$store.state.isRTL
        ? 'me-3 rotate-caret fixed-end'
        : 'fixed-start ms-3'
    } ${this.$store.state.sidebarType}`"
  >
    <div class="sidenav-header">
      <i
        class="top-0 p-3 cursor-pointer fas fa-times text-secondary opacity-5 position-absolute end-0 d-none d-xl-none"
        aria-hidden="true"
        id="iconSidenav"
      ></i>
      <a class="pt-2 navbar-brand" href="/">
        <img
          :src="
            this.$store.state.sidebarType === 'bg-white' ||
            (this.$store.state.sidebarType === 'bg-transparent' &&
              !this.$store.state.isDarkMode)
              ? logoDark
              : logo
          "
          class="navbar-brand-img h-100"
          alt="main_logo"
        />
        <span class="ms-2 font-weight-bold text-white">Sistem Alumni</span>
      </a>
    </div>
    <hr class="horizontal light mt-0 mb-2" />
    <sidenav-list v-if="role === 'admin'" />
    <sidenav-list-alumni v-else />
  </aside>
</template>
<script>
import SidenavListAlumni from "./SidenavListAlumni.vue";
import SidenavList from "./SidenavList.vue";
import logo from "@/assets/img/logo_ika_uns.png";
import logoDark from "@/assets/img/logo_ika_uns.png";

export default {
  name: "index",
  components: {
    SidenavListAlumni,
    SidenavList,
  },
  data() {
    return {
      logo,
      logoDark,
      role: "",
    };
  },
  props: ["custom_class"],
  mounted() {
    var currentUrl = window.location.pathname;
    var url_first = currentUrl.split("/");
    this.role = url_first[1];
  },
};
</script>
