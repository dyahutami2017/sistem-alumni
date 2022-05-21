<template>
  <div class="py-4 container-fluid" style="min-height: 450px">
    <div class="row mb-4">
      <div class="col-lg-12 position-relative z-index-2">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <mini-cards
              v-if="profil_lengkap === 'ya'"
              value="Profil Alumni"
              iconName="person"
              textCap="text-success text-sm font-weight-bolder"
              percentage="Profil Sudah Lengkap"
              iconClass="text-white"
              iconBackground="bg-gradient-success"
            />
            <mini-cards
              v-else-if="profil_lengkap === 'tidak'"
              value="Profil Alumni"
              iconName="person"
              textCap="text-danger text-sm font-weight-bolder"
              percentage="Profil Belum Lengkap"
              iconClass="text-white"
              iconBackground="bg-gradient-primary"
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <mini-cards
              v-if="survey_lengkap === 'ya'"
              value="Tracer Study"
              iconName="location_searching"
              textCap="text-success text-sm font-weight-bolder"
              percentage="Tracer Study Sudah Terisi"
              iconClass="text-white"
              iconBackground="bg-gradient-success"
            />
            <mini-cards
              v-else-if="survey_lengkap === 'tidak'"
              value="Tracer Study"
              iconName="location_searching"
              textCap="text-danger text-sm font-weight-bolder"
              percentage="Tracer Study Belum Terisi"
              iconClass="text-white"
              iconBackground="bg-gradient-primary"
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <mini-cards
              value="Update Tracer Study"
              iconName="info"
              :percentage="date(exp_date)"
              iconClass="text-white"
              iconBackground="bg-gradient-warning"
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <mini-cards
              v-if="validasi === 'ya'"
              value="Info Validasi"
              iconName="check"
              textCap="text-success text-sm font-weight-bolder"
              percentage="Data Anda Sudah Tervalidasi"
              iconClass="text-white"
              iconBackground="bg-gradient-success"
            />
            <mini-cards
              v-else
              value="Info Validasi"
              iconName="check"
              textCap="text-danger text-sm font-weight-bolder"
              percentage="Data Anda Belum Tervalidasi"
              iconClass="text-white"
              iconBackground="bg-gradient-primary"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- prettier-ignore -->
  <div class="modal fade" id="modalDokumen">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title font-weight-normal" id="exampleModalLabel">Upload Dokumen</h5>
          <button type="button" class="btn-close text-dark closeModal" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6">
              <div class="input-group input-group-outline mb-3">
                <label class="label col-12">KTP</label><br/>
                <input type="file" class="form-control" name="ktp" isrequired="true">
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-group input-group-outline mb-3">
                <label class="label col-12">Ijazah</label><br/>
                <input type="file" class="form-control" name="ijazah" isrequired="true">
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn bg-gradient-secondary closeModal" data-bs-dismiss="modal"><i class="fa fa-times"></i> Tutup</button>
          <button type="button" class="btn bg-gradient-primary saveModal"><i class="fa fa-save"></i> Save</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/*eslint-disable*/
import MiniCards from "./components/MiniCards.vue";
// import $ from "jquery";
import axios from "axios";
import moment from 'moment'

export default {
  name: "dashboard-default",
  components: {
    MiniCards,
  },
  data() {
    return {
      profil_lengkap: "",
      survey_lengkap: "",
      exp_date: "",
      validasi: ""
    };
  },
  methods: {
    date: function (date) {
      return moment(date).format('DD MMMM YYYY');
    },
    checkData() {
          axios.get(process.env.VUE_APP_ROOT_API + 'dashboard/'+ this.$route.params.id).then(res => {
          console.log(res.data);
          if(res.data.profile_completed == 1){
            this.profil_lengkap = 'ya'
          }
          else{
            this.profil_lengkap = 'tidak'
          }
          if(res.data.tracer_completed == 1){
            this.survey_lengkap = 'ya'
          }
          else{
            this.survey_lengkap = 'tidak'
          }
          if(res.data.expired_date != null){
            this.exp_date = res.data.expired_date
          }
          else{
            this.exp_date = "Belum Ada Tanggal Kadaluarsa"
          }
        }).catch ((err) => {
          console.log(err);
        })
      },
    load(){
        axios.get(process.env.VUE_APP_ROOT_API + 'profile/'+ this.$route.params.id).then(res => {
          console.log(res);
          if(res.data.user.validated != 1){
            this.validasi = 'tidak'
          }
          else{
            this.validasi = 'ya'
          }
      }).catch ((err) => {
        console.log(err);
      })
    },
  },
  mounted() {
    this.load();
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
