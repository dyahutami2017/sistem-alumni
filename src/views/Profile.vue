<!-- prettier-ignore -->
<template>
  <div class="container-fluid">
    <div
      class="page-header min-height-200 border-radius-xl mt-4"
      style="
        background-color: {{}};
      "
    >
      <span class="mask bg-gradient-warning opacity-6"></span>
    </div>
    <div class="card card-body mx-3 mx-md-4 mt-n8">
      <div class="row gx-4">
        <div class="col-auto">
          <div class="avatar avatar-xl position-relative">
            <img
              src="@/assets/img/bruce-mars.jpg"
              alt="profile_image"
              class="shadow-sm w-100 border-radius-lg"
            />
          </div>
        </div>
        <div class="col-auto my-auto">
          <div class="h-100">
            <h5 class="mb-1">Richard Davis</h5>
          </div>
        </div>
        <div
          class="mx-auto mt-3 col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0"
        >
          <div class="nav-wrapper position-relative end-0">
            <ul
              class="p-1 bg-transparent nav nav-pills nav-fill"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="px-0 py-1 mb-0 nav-link active"
                  id="btn_identitas"
                  data-bs-toggle="tab"
                  href="javascript:;"
                  role="tab"
                  aria-selected="true"
                  ><div class="text-center d-flex align-items-center justify-content-center">
                    <i class="material-icons-round opacity-10 fs-5">person</i>
                    <span class="nav-link-text ms-1">Data Diri</span>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="px-0 py-1 mb-0 nav-link"
                  id="btn_dokumen"
                  data-bs-toggle="tab"
                  href="javascript:;"
                  role="tab"
                  aria-selected="false"
                >
                  <div class="text-center d-flex align-items-center justify-content-center">
                    <i class="material-icons-round opacity-10 fs-5">image</i>
                    <span class="nav-link-text ms-1">Dokumen</span>
                  </div>
                </a>
              </li>
              {{}}
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="mt-3 row">
          {{}}
          <div class="col-12 mt-md-0 mt-4 position-relative">
            <div class="card card-plain h-100">
              <div class="p-3 pb-0 card-header">
                <div class="row">
                  <div class="col-8 d-flex align-items-center">
                    <h6 class="mb-0">Informasi Profil</h6>
                  </div>
                  <div class="col-4 text-end">
                    <a href="/form">
                      <i
                        class="text-sm fas fa-user-edit text-secondary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Edit Profile"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="p-3 card-body" id="show_identitas">
                <div class="table-responsive">
                  <table class="table table-borderless align-items-center">
                    <tr>
                      <td width="200px">Nama Lengkap</td>
                      <td><strong class="text-dark">{{request.nama}}</strong></td>
                    </tr>
                    <tr>
                      <td width="200px">NIM</td>
                      <td><strong class="text-dark">{{request.nim}}</strong></td>
                    </tr>
                    <tr>
                      <td width="200px">NIK</td>
                      <td><strong class="text-dark">{{request.nik}}}</strong></td>
                    </tr>
                    <tr>
                      <td width="200px">Tempat Lahir</td>
                      <td><strong class="text-dark">{{request.tempat_lahir}}</strong></td>
                    </tr>
                    <tr>
                      <td width="200px">Tanggal Lahir</td>
                      <td><strong class="text-dark">{{request.tanggal_lahir}}</strong></td>
                    </tr>
                    <tr>
                      <td width="200px">No. Hp</td>
                      <td>
                        <strong class="text-dark">{{request.no_hp}}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td width="200px">Email</td>
                      <td>
                        <strong class="text-dark">{{request.email}}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td width="200px">Alamat</td>
                      <td>
                        <strong class="text-dark">{{request.alamat}}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td width="200px">Fakultas</td>
                      <td>
                        <strong class="text-dark">{{request.fakultas}}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td width="200px">Jurusan</td>
                      <td>
                        <strong class="text-dark">{{request.jurusan}}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td width="200px">Tahun Masuk</td>
                      <td>
                        <strong class="text-dark">{{request.tahun_masuk}}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td width="200px">Tahun Lulus</td>
                      <td>
                        <strong class="text-dark">{{request.tahun_lulus}}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td width="200px">Paska Kampus</td>
                      <td>
                        <strong class="text-dark">{{request.paska_kampus}}</strong>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="p-3 card-body" id="show_dokumen">
                <div class="mb-3">
                  <h6>KTP</h6>
                  <img style="width:500px;" src="https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" alt="">
                </div>
                <div>
                  <h6>Ijazah</h6>
                  <img style="width:500px;" src="https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sophie from "@/assets/img/kal-visuals-square.jpg";
import marie from "@/assets/img/marie.jpg";
import ivana from "@/assets/img/ivana-square.jpg";
import peterson from "@/assets/img/team-4.jpg";
import nick from "@/assets/img/team-3.jpg";
import img1 from "@/assets/img/home-decor-1.jpg";
import img2 from "@/assets/img/home-decor-2.jpg";
import img3 from "@/assets/img/home-decor-3.jpg";
import team1 from "@/assets/img/team-1.jpg";
import team2 from "@/assets/img/team-2.jpg";
import team3 from "@/assets/img/team-3.jpg";
import team4 from "@/assets/img/team-4.jpg";

import $ from "jquery";
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";

export default {
  name: "profile-overview",
  data() {
    return {
      showMenu: false,
      sophie,
      marie,
      ivana,
      peterson,
      nick,
      img1,
      team1,
      team2,
      team3,
      team4,
      img2,
      img3,
      request: {
        nama: "Alec M. Thompson",
        nim: "17520241018",
        nik: "3401024590001",
        tempat_lahir: "Sleman",
        tanggal_lahir: "10 Januari 1997",
        no_hp: "(44) 123 1234 123",
        email: "alecthompson@mail.com",
        fakultas: "Teknik",
        jurusan: "Teknik Mesin",
        tahun_masuk: "2010",
        tahun_lulus: "2015",
        paska_kampus: "Bekerja",
        alamat: "Jalan Komarudin No 20",
      },
    };
  },
  components: {},

  mounted() {
    this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip();
    $("#show_dokumen").hide();
    $("#btn_identitas").click(function () {
      $("#show_identitas").show();
      $("#show_dokumen").hide();
    });
    $("#btn_dokumen").click(function () {
      $("#show_dokumen").show();
      $("#show_identitas").hide();
    });
  },
  beforeUnmount() {
    this.$store.state.isAbsolute = false;
  },
};
</script>
