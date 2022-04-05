<template>
  <div class="container-fluid py-4" style="min-height: 450px">
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div
              class="bg-gradient-warning shadow-light border-radius-lg pt-4 pb-3"
            >
              <h6 class="text-white text-capitalize ps-3">Data Alumni</h6>
            </div>
          </div>
          <div class="card-body px-0 pb-2">
            <!-- prettier-ignore -->
            <form id="form_alumni">
              <div class="row p-4">
                <div class="col-4">
                  <div class="input-group input-group-outline mb-3">
                    <label class="col-12">Tahun Lulus</label><br/>
                    <input type="text" class="form-control" name="nama" isrequired="true">
                  </div>
                </div>
                <div class="col-4">
                  <div class="input-group input-group-outline mb-3">
                    <label class="label col-12">Fakultas</label><br/>
                    <div class="col-12">
                        <Select2 v-model="myValue" :options="myOptions" :settings="{ settingOption: value, settingOption: value }" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="input-group input-group-outline mb-3">
                    <label class="label col-12">Jurusan</label><br/>
                    <div class="col-12">
                        <Select2 v-model="myValue2" :options="myOptions2" :settings="{ settingOption: value, settingOption: value }" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
                    </div>
                  </div>
                </div>
                <div class="col-2">
                  <vmd-button
                      class="my-4 mb-2"
                      id="btnSimpan"
                      variant="gradient"
                      color="warning"
                      fullWidth
                      >Simpan
                    </vmd-button>
                </div>
                <div class="col-2">
                  <vmd-button
                      class="my-4 mb-2"
                      id="btnBatal"
                      variant="gradient"
                      color="light"
                      fullWidth
                      >Batal
                    </vmd-button>
                </div>
              </div>
            </form>
            <div class="table-responsive p-0" id="tbl_alumni">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Aktivasi
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Dokumen
                    </th>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Nama
                    </th>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                    >
                      NIM
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      NIK
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Jenis Kelamin
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Tempat Lahir
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Tanggal Lahir
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Fakultas
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Jurusan
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      No Hp
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Alamat Tinggal
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Tahun Masuk
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Tahun Lulus
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Gelar Depan
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Gelar Belakang
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Act
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="align-center d-flex justify-content-center">
                      <a
                        v-if="aktivasi === 'ya'"
                        href="javascript:;"
                        class="badge bg-gradient-success"
                        data-toggle="tooltip"
                        data-original-title=""
                      >
                        <i class="fa fa-check"></i>
                      </a>
                      <a
                        v-else
                        href="javascript:;"
                        class="badge bg-gradient-secondary"
                        data-toggle="tooltip"
                        data-original-title=""
                      >
                        <i class="fa fa-check"></i>
                      </a>
                    </td>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <a
                            href="javascript:;"
                            class="badge badge-sm bg-gradient-primary mb-1"
                            data-toggle="tooltip"
                            data-original-title=""
                          >
                            <i class="fa fa-check"></i>
                            Ijazah
                          </a>
                          <a
                            href="javascript:;"
                            class="badge badge-sm bg-gradient-info"
                            data-toggle="tooltip"
                            data-original-title=""
                          >
                            <i class="fa fa-check"></i>
                            KTP
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img
                            src="../assets/img/team-2.jpg"
                            class="avatar avatar-sm me-3 border-radius-lg"
                            alt="user1"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Johna Michael</h6>
                          <p class="text-xs text-secondary mb-0">
                            johna@creative-tim.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs font-weight-bold mb-0">17520241018</p>
                    </td>
                    <td class="align-middle text-left text-sm">
                      <p class="text-xs font-weight-bold mb-0">3401024590001</p>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >Perempuan</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >Jakarta</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >10 Januari 1997</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >Teknik</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >Teknik Sipil</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >(44) 123 1234 123</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >Jl. Elang I No. 5 Perum UNS IV Triyagan Mojolaban,
                        Sukoharjo</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >2010</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >2015</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">
                      </span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">
                        S.T</span
                      >
                    </td>
                    <td class="align-center d-flex justify-content-center">
                      <a
                        href="javascript:;"
                        class="badge bg-gradient-info"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        <i class="fa fa-pencil"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-center d-flex justify-content-center">
                      <a
                        v-if="aktivasi === 'ya'"
                        href="javascript:;"
                        class="badge bg-gradient-success"
                        data-toggle="tooltip"
                        data-original-title=""
                      >
                        <i class="fa fa-check"></i>
                      </a>
                      <a
                        v-else
                        href="javascript:;"
                        class="badge bg-gradient-secondary"
                        data-toggle="tooltip"
                        data-original-title=""
                      >
                        <i class="fa fa-check"></i>
                      </a>
                    </td>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <a
                            href="javascript:;"
                            class="badge badge-sm bg-gradient-primary mb-1"
                            data-toggle="tooltip"
                            data-original-title=""
                          >
                            <i class="fa fa-check"></i>
                            Ijazah
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img
                            src="../assets/img/team-3.jpg"
                            class="avatar avatar-sm me-3 border-radius-lg"
                            alt="user1"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Alexa Liras</h6>
                          <p class="text-xs text-secondary mb-0">
                            alexa@creative-tim.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs font-weight-bold mb-0">17520241018</p>
                    </td>
                    <td class="align-middle text-left text-sm">
                      <p class="text-xs font-weight-bold mb-0">3401024590001</p>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >Perempuan</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >Jakarta</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >10 Januari 1997</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >Teknik</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >Teknik Sipil</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >(44) 123 1234 123</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >Jl. Elang I No. 5 Perum UNS IV Triyagan Mojolaban,
                        Sukoharjo</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >2010</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >2015</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">
                      </span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">
                        S.T</span
                      >
                    </td>
                    <td class="align-center d-flex justify-content-center">
                      <a
                        href="javascript:;"
                        class="badge bg-gradient-info"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        <i class="fa fa-pencil"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Select2 from 'vue3-select2-component';
import VmdButton from "@/components/VmdButton.vue";
import $ from "jquery";

export default {
  name: "table-alumni",
  components: {
    Select2,
    VmdButton
  },
  data() {
        return {
            aktivasi : 'ya',
            myValue: 'Pilih Fakultas',
            myValue2: 'Pilih Jurusan',
            myValue3: 'Pilih Provinsi',
            myOptions: ['Pilih Fakultas','Teknik', 'Bahasa dan Seni', 'MIPA', 'Ekonomi', 'Ilmu Sosial'],
            myOptions2: ['Pilih Jurusan','Teknik Informatika', 'Teknik Mesin', 'Seni Rupa', 'Ekonomi Bisnis', 'Pendidikan Ilmu Sosial'],
            myOptions3: ['Pilih Provinsi','Aceh', 'Bandung', 'Jakarta', 'DI Yogyakarta', 'Jawa Tengah'] // or [{id: key, text: value}, {id: key, text: value}]
        }
    },
    methods: {
        myChangeEvent(val){
            console.log(val);
        },
        mySelectEvent({id, text}){
            console.log({id, text})
        }
    },
    mounted() {
      $('#tbl_alumni').hide();
      $("#btnSimpan").click(function(e){
        e.preventDefault();
        $("#tbl_alumni").show();
        $("#form_alumni").hide();
      })
  },
};
</script>
