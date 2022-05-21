<!-- prettier-ignore -->
<template>
  <!-- <navbar btnBackground="bg-gradient-warning" /> -->
  <div
    class="page-header align-items-start min-vh-100"
    :style="
      { backgroundImage: 'url('+ bg + ')' }
    "
  >
    <span class="mask bg-gradient-secondary opacity-6"></span>
    <div class="container my-auto">
      <div class="row">
        <div class="alert alert-danger alert-dismissible fade show mb-5" v-if="loginFailed" >
            <span class="alert-text"><strong>Sign In Gagal !</strong> Mohon Masukkan Data Dengan Benar</span>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="alert alert-danger alert-dismissible fade show mb-5" v-if="dataKosong" >
            <span class="alert-text"><strong>Sign In Gagal !</strong> Akun anda tidak terdaftar, silahkan lakukan sign up</span>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="col-lg-4 col-md-8 col-12 mx-auto">
          <div class="card z-index-0 fadeIn3 fadeInBottom">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div
                class="bg-gradient-info shadow-success border-radius-lg py-3 pe-1"
              >
                <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">
                  Sistem Alumni <br /> Halaman Admin
                </h4>
                {{}}
              </div>
            </div>
            <div class="card-body">
              <form role="form" class="text-start mt-3" @submit.prevent="login">
                <div class="mb-3">
                  <div class="input-group input-group-outline my-3">
                      <label class="form-label">Email/NIK</label>
                      <input type="email" class="form-control" name="email" v-model="form.username">
                  </div>
                </div>
                <div class="mb-3">
                  <div class="input-group input-group-outline my-3">
                      <label class="form-label">Password</label>
                      <input type="password" class="form-control" name="password" v-model="form.password">
                  </div>
                </div>
                <!-- <vmd-switch id="rememberMe">Remember me</vmd-switch> -->
                <div class="text-center">
                  <vmd-button
                    class="my-4 mb-2"
                    variant="gradient"
                    color="info"
                    fullWidth
                    >Sign In</vmd-button
                  >
                </div>
                <p class="mt-4 text-sm text-center">
                  Belum memiliki akun?
                  <router-link
                    :to="{ name: 'SignUp' }"
                    class="text-info text-gradient font-weight-bold"
                    >Sign Up</router-link
                  >
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer position-absolute bottom-2 py-2 w-100">
      <div class="container">
        <div class="row align-items-center justify-content-lg-between">
          <div class="col-12 col-md-6 my-auto">
            <div class="copyright text-center text-sm text-white text-lg-start">
              © {{ new Date().getFullYear() }}
              <i class="fa fa-heart" aria-hidden="true"></i> <span></span>
              <a
                href="https://eduraya"
                class="font-weight-bold text-white"
                target="_blank"
                >PT Eduraya Teknologi Nusantara</a
              >
            </div>
          </div>
          <div class="col-12 col-md-6">
            <!-- <ul
              class="nav nav-footer justify-content-center justify-content-lg-end"
            >
              <li class="nav-item">
                <a
                  href="https://www.creative-tim.com/presentation"
                  class="nav-link text-white"
                  target="_blank"
                  >About Us</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="https://www.creative-tim.com/blog"
                  class="nav-link text-white"
                  target="_blank"
                  >Blog</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="https://www.creative-tim.com/license"
                  class="nav-link pe-0 text-white"
                  target="_blank"
                  >License</a
                >
              </li>
            </ul> -->
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
/* eslint-disable */
// import Navbar from "@/examples/PageLayout/Navbar.vue";
// import VmdInput from "@/components/VmdInput.vue";
// import VmdSwitch from "@/components/VmdSwitch.vue";
import setMaterialInput from "@/assets/js/material-input.js";
import VmdButton from "@/components/VmdButton.vue";
import axios from "axios";
import bg from "@/assets/img/foto_gedung_rektorat.png";

export default {
  name: "sign-in",
  components: {
    // Navbar,
    // VmdInput,
    // VmdSwitch,
    VmdButton,
  },
  data() {
    return {
      loggedIn: localStorage.getItem('loggedIn'),
      token: localStorage.getItem('token'),
      userid: localStorage.getItem('userid'),
      dataKosong: null,
      loginFailed: null,
      bg,
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
     login() {
      if (this.form.username && this.form.password) {
          axios.get('http://localhost:8000/sanctum/csrf-cookie')
            .then(response => {
              console.log(response)
              axios.post(process.env.VUE_APP_ROOT_API + 'login', {
                  username: this.form.username,
                  password: this.form.password
              }).then(res => {
                  console.log(res)
                  if (res.status == '200') {
                    var self = this;
                    localStorage.setItem("loggedIn", "true")
                    localStorage.setItem("token", res.data[0].token)
                    localStorage.setItem("userid", res.data[0].user.id)
                    this.loggedIn = true
                    this.token  = res.data[0].token;
                    this.userid = res.data[0].user.id
                    return this.$router.push('/admin/dashboard')
                  }
                  else {
                      this.loginFailed = true
                  }
              }).catch(error => {
                  console.log(error)
                  this.dataKosong = true
              })
          })
      }
    },
  },
  mounted() {
    setMaterialInput();
    if (this.loggedIn) {
      return this.$router.push('/form_profile/' + this.userid)
      // this.$router.go(-1);
    }
  },
  beforeMount() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
  },
};
</script>
