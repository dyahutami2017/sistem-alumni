<!-- prettier-ignore -->
<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12 col-md-12 mb-md-0 mb-4">
         <div class="card">
            <div class="card-body">
                <h5>Informasi Akun</h5>
                <table class="table table-borderless align-items-center data_akun">
                    <tr>
                      <td width="200px">Nama Lengkap</td>
                      <td><strong class="text-dark">{{dt_akun.name}}</strong></td>
                    </tr>
                    <tr>
                      <td width="200px">NIK</td>
                      <td><strong class="text-dark">{{dt_akun.nik}}</strong></td>
                    </tr>
                    <tr>
                      <td width="200px">Email</td>
                      <td><strong class="text-dark">{{dt_akun.email}}</strong></td>
                    </tr>
                  </table>
                  <button type="submit" class="btn bg-gradient-info mb-2 btnEdit">Change Password</button>
                <form-card-akun class="formUpdate" v-on:update-akun="updateAkun" />
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import FormCardAkun from "./components/FormCardAkun.vue";
import $ from "jquery";
import axios from "axios";

export default {
  name: "form-akun",
  components: {
    FormCardAkun,
  },
  data() {
    return {
      dt_akun: {
        name: '',
        nik: '',
        email: ''
      }
    }
  },
  methods: {
    updateAkun() {},
    load(){
          axios.get('http://api.alumni.eduraya.co.id/api/profile/'+ this.$route.params.id).then(res => {
          this.dt_akun.name = res.data.user.name 
          this.dt_akun.nik = res.data.user.nik 
          this.dt_akun.email = res.data.user.email 
          console.log(res.data)
        }).catch ((err) => {
          console.log(err);
        })
      },
  },
  mounted() {
    this.load();
    $(".formUpdate").hide();
    $(".btnEdit").click(function (e) {
      e.preventDefault();
      $(this).hide();
      $(".formUpdate").show();
      $(".data_akun").hide();
    });
  },
};
</script>
