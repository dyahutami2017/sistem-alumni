<template>
  <div class="py-4 container-fluid" style="min-height: 450px">
    <div class="row mb-4">
      <div class="col-lg-12 position-relative z-index-2">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <mini-cards
              title="Data Profil Lengkap"
              :value="profil_lengkap"
              iconName="person"
              iconClass="text-white"
              iconBackground="bg-gradient-info"
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <mini-cards
              title="Data Tracer Study Lengkap"
              :value="survey_lengkap"
              iconName="person"
              iconClass="text-white"
              iconBackground="bg-gradient-success"
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <mini-cards
              title="Data Alumni"
              :value="alumni"
              iconName="person"
              iconClass="text-white"
              iconBackground="bg-gradient-warning"
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <mini-cards
              title="Bekerja"
              :value="alumni_bekerja"
              iconName="work"
              iconClass="text-white"
              iconBackground="bg-gradient-info"
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <mini-cards
              title="Melanjutkan"
              :value="alumni_melanjutkan"
              iconName="school"
              iconClass="text-white"
              iconBackground="bg-gradient-success"
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <mini-cards
              title="Wirausaha"
              :value="alumni_wirausaha"
              iconName="storefront"
              iconClass="text-white"
              iconBackground="bg-gradient-warning"
            />
          </div>
        </div>
        <!-- <div class="row mt-4">
          <div class="col-lg-4 col-md-4 col-sm-12 mt-4">
            <chart-bars />
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 mt-4">
            <chart-bars-complete />
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 mt-4">
            <chart-bars-tracer />
          </div>
        </div> -->
      </div>
    </div>
  </div>
  <!-- prettier-ignore -->
</template>
<script>
/* eslint-disable */
import MiniCards from "./components/MiniCards.vue";
// import $ from "jquery";
import axios from "axios";
import ChartBars from "./components/ChartBarsAlumni.vue";
import ChartBarsComplete from "./components/ChartBarsComplete.vue";
import ChartBarsTracer from "./components/ChartBarsTracer.vue";

export default {
  name: "dashboard-default",
  components: {
    MiniCards,
    ChartBars,
    ChartBarsComplete,
    ChartBarsTracer,
  },
  data() {
    return {
      profil_lengkap: "",
      survey_lengkap: "",
      alumni: "",
      alumni_bekerja: "",
      alumni_melanjutkan: "",
      alumni_wirausaha: "",
    };
  },
  methods: {
    checkData() {
      axios.get('http://api.alumni.eduraya.co.id/api/dashboard_admin').then(res => {
          console.log(res.data);
          this.profil_lengkap = res.data.user_completed_count
          this.survey_lengkap = res.data.tracer_completed_count
          this.alumni = res.data.user_count
          this.alumni_bekerja = res.data.tracer_work_count
          this.alumni_melanjutkan = res.data.tracer_study_count
          this.alumni_wirausaha = res.data.tracer_entrepreneur_count
        }).catch ((err) => {
          console.log(err);
        })
      },
  },
  mounted() {
    this.checkData();
    // window.location.href = "/form_profile";
    // $("#modalDokumen").addClass("show");
    // $(".modal").css("display", "block");
    // $(".closeModal").click(function () {
    //   $("#modalDokumen").removeClass("show");
    //   $(".modal").css("display", "none");
    // });
    // $(".saveModal").click(function () {
    // });
  },
};
</script>
