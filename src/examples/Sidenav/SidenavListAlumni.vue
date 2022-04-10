<!--prettier-ignore-->
<template>
  <div
    class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
    id="sidenav-collapse-main"
  >
    <ul class="navbar-nav">
      <li class="nav-item" > 
        <sidenav-collapse
          url="#"
          :aria-controls="''"
          v-bind:collapse="false"
          :collapseRef="dashboard"
          navText="Dashboard"
        >
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">dashboard</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse
          url="#"
          :aria-controls="''"
          v-bind:collapse="false"
          :collapseRef="form_profile"
          navText="Form Profile"
        >
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">text_snippet</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse
          url="#"
          :aria-controls="''"
          v-bind:collapse="false"
          :collapseRef="tracer_study"
          navText="Tracer Study"
        >
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">
              location_searching
            </i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse
          url="#"
          :aria-controls="''"
          v-bind:collapse="false"
          :collapseRef="cv"
          navText="CV"
        >
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">print</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse
          url="#"
          :aria-controls="''"
          v-bind:collapse="false"
          :collapseRef="kartu_alumni"
          navText="Kartu Alumni"
        >
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">credit_card</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="mt-3 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder text-white"
          :class="this.$store.state.isRTL ? 'me-4' : 'ms-2'"
        >
          ACCOUNT PAGES
        </h6>
      </li>
      <li class="nav-item">
        <sidenav-collapse
          url="#"
          :aria-controls="''"
          v-bind:collapse="false"
          :collapseRef="profile"
          navText="Profile"
        >
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">person</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse
          url="#"
          :aria-controls="''"
          v-bind:collapse="false"
          :collapseRef="setting_account"
          navText="Pengaturan Akun"
        >
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">manage_accounts</i>
          </template>
        </sidenav-collapse>
      </li>
    </ul>
  </div>
</template>
<script>
/* eslint-disable */
import SidenavCollapse from "./SidenavCollapse.vue";

export default {
  name: "sidenav-list-alumni",
  props: {
    cardBg: String,
  },
  data() {
    return {
      title: "Soft UI Dashboard PRO",
      controls: "dashboardsExamples",
      isActive: "active",
      dashboard: '',
      form_profile: '',
      tracer_study: '',
      cv: '',
      kartu_alumni: '',
      profile: '',
      setting_account: '',
    };
  },
  components: {
    SidenavCollapse,
  },
  mounted() {
    var currentUrl = window.location.pathname;
    var url_first = currentUrl.split("/");
    this.dashboard = "/dashboard/"+url_first[2];
    this.form_profile = "/form_profile/"+url_first[2];
    this.tracer_study = "/tracer_study/"+url_first[2];
    this.cv = "/cv/"+url_first[2];
    this.kartu_alumni = "/kartu_alumni/"+url_first[2];
    this.profile = "/profile/"+url_first[2];
    this.setting_account = "/setting_account/"+url_first[2];
  }
}
</script>
