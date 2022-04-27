<!-- prettier-ignore -->
<template>
  <div class="bg-white">
    <div class="container top-0 position-sticky z-index-sticky">
      <div class="row">
        <div class="col-12">
          <!-- <navbar
            isBlur="blur my-3 py-2 mt-4 start-0 end-0 mx-4 shadow blur border-radius-lg"
            btnBackground="bg-gradient-warning"
            v-bind:darkMode="true"
          /> -->
        </div>
      </div>
    </div>
    <main class="mt-0 main-content">
      <section>
        <div class="page-header min-vh-100">
          <div class="container">
            <div class="row">
              <div
                class="col-6 d-lg-flex d-none h-100 my-auto pe-0 ps-0 position-absolute top-0 start-0 text-center justify-content-center flex-column"
              >
                <div
                  class="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
                  :style="{
                    backgroundImage:
                      'url(' +
                      require('@/assets/img/signup.jpg') +
                      ')',
                  }"
                ></div>
              </div>
              <div
                class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5"
              >
                <div class="card card-plain">
                  <div class="pb-0 card-header bg-transparent mb-4">
                    <h4 class="font-weight-bolder">Sign Up</h4>
                    <p class="mb-0">
                      Lengkapi data diri berikut untuk buat akun
                    </p>
                  </div>
                  <div class="card-body">
                    <form role="form" @submit.prevent="add_alumni">
                      <div class="mb-3">
                        <div class="input-group input-group-outline my-3">
                            <label class="form-label">Nama</label>
                            <input type="text" class="form-control" name="nama" v-model="register.name">
                        </div>
                      </div>
                      <div class="mb-3">
                        <div class="input-group input-group-outline my-3">
                            <label class="form-label">NIK</label>
                            <input type="text" class="form-control" name="nik" v-model="register.nik">
                        </div>
                      </div>
                      <div class="mb-3">
                        <div class="input-group input-group-outline my-3">
                            <label class="form-label">NIM</label>
                            <input type="text" class="form-control" name="nim" v-model="register.nim">
                        </div>
                      </div>
                      <div class="mb-3">
                        <div class="input-group input-group-outline my-3">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control" name="email" v-model="register.email">
                        </div>
                      </div>
                      <div class="mb-3">
                        <div class="input-group input-group-outline my-3">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-control" name="password" v-model="register.password">
                        </div>
                      </div>
                      <div class="mb-3">
                        <div class="input-group input-group-outline my-3">
                            <label class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" name="confirm_password" v-model="register.confirm_password">
                        </div>
                      </div>
                      <div class="text-center">
                        <vmd-button
                          class="mt-4"
                          variant="gradient"
                          color="info"
                          fullWidth
                          size="lg"
                          >Register</vmd-button
                        >
                      </div>
                    </form>
                  </div>
                  <div class="px-1 pt-0 text-center card-footer px-lg-2">
                    <p class="mx-auto mb-4 text-sm">
                      Sudah memiliki akun?
                      <router-link
                        :to="{ name: 'SignIn' }"
                        class="text-info text-gradient font-weight-bold"
                        >Sign In</router-link
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
/* eslint-disable */
// import Navbar from "@/examples/PageLayout/Navbar.vue";
import setMaterialInput from "@/assets/js/material-input.js";
import VmdButton from "@/components/VmdButton.vue";
import axios from "axios";
const body = document.getElementsByTagName("body")[0];

export default {
  name: "sign-up",
  components: {
    // Navbar,
    VmdButton,
  },
  data() {
    return {
      register: {
        name: "",
        nik: "",
        nim: "",
        email: "",
        password: "",
        confirm_password: "",
      },
    };
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  mounted() {
    setMaterialInput();
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
  methods: {
    add_alumni() {
      if(this.register.password != this.register.confirm_password){
        this.swalFailed('Confirmasi Password Anda Tidak Sama!');
      }
      else{
        const url = "http://api.alumni.eduraya.co.id/api/register";
        let self = this;
        axios
          .post(url, this.register)
          .then((response) => {
            console.log(response);
            if (response.status === 201) {
              self.$router.push("/form_profile/" + response.data.user.id);
              this.$swal({
                title: 'Sukses',
                text: response.data.messege+', silahkan sign-in',
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK'
              })
            }
          })
          .catch((error) => {
            console.log(error.response);
            var obj = JSON.stringify(error.response.data)
            var dt = JSON.parse(obj);
            if(dt.name != undefined){
              this.swalFailed(dt.name);
            }
            else if(dt.nik != undefined){
              this.swalFailed(dt.nik);
            }
            else if(dt.nim != undefined){
              this.swalFailed(dt.nim);
            }
            else if(dt.email != undefined){
              this.swalFailed(dt.email);
            }
            else if(dt.password != undefined){
              this.swalFailed(dt.password);
            }
          });
      }
    },
    swalFailed(text){
      this.$swal({
        title: 'Oops Maaf',
        text: text,
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK'
      })
    }
  },
};
</script>
