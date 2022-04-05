<!-- prettier-ignore -->
<template>
  <div class="card">
    <div class="card-body px-0 pt-0 pb-2">
      <div class="nav-wrapper position-relative end-0">
        <ul class="nav nav-pills nav-fill p-1" role="tablist">
          <li class="nav-item">
            <a class="nav-link mb-0 px-0 py-1 active" data-bs-toggle="tab" href="#" role="tab" aria-controls="preview" aria-selected="true" id="lanjut_bekerja">
            <span class="material-icons align-middle mb-1">
              badge
            </span>
            Lanjut Bekerja
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" href="#" role="tab" aria-controls="code" aria-selected="false" id="lanjut_study">
              <span class="material-icons align-middle mb-1">
                laptop
              </span>
              Lanjut Study
            </a>
          </li>
        </ul>
      </div>
      <form id="form_bekerja">
        <div class="row p-4">
          <div class="col-6">           
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Nama Perusahaan</label><br/>
              <input type="nama" class="form-control form-control-default" name="nama_perusahaan" isrequired="true">
              <input type="hidden" class="form-control form-control-default" name="paska_kampus" isrequired="true">
            </div>

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Alamat Perusahaan</label><br/>
              <input type="text" class="form-control" name="alamat_perusahaan" isrequired="true">
            </div>

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Bidang/Sektor Industri</label><br/>
              <div class="col-12">
                  <Select2 v-model="bidang" :options="optionBidang" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
              </div>
            </div>

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Kapan anda mulai bekerja</label><br/>
              <select name="waktu_bekerja" id="waktu_bekerja" class="form-control">
                <option value="1">Setelah Lulus</option>
                <option value="2">Sebelum Lulus</option>
              </select>
            </div>

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Apakah Pekerjaan sesuai dengan jurusan anda</label><br/>
              <select name="job_relevan" id="job_relevan" class="form-control">
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
              </select>
            </div>
          </div>

          <div class="col-6">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Posisi dalam Perusahaan</label><br/>
              <input type="text" class="form-control form-control-default" name="posisi_perusahaan" isrequired="true">
            </div>

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Status Kontrak</label><br/>
              <select name="status_kontrak" id="status_kontrak" class="form-control">
                <option value="1">Karyawan Tetap (PKWTT)</option>
                <option value="2">Karyawan Tidak Tetap</option>
                <option value="3">Karyawan Paruh Waktu</option>
                <option value="4">Outsourcing</option>
              </select>
            </div>

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Gaji</label><br/>
              <input type="text" class="form-control form-control-default" name="gaji" isrequired="true" placeholder="5000000">
            </div>

             <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Saya memperoleh pekerjaan ini dari</label><br/>
              <select name="get_job_from" id="get_job_from" class="form-control">
                <option value="1">PPKS</option>
                <option value="2">LSM atau BLK</option>
                <option value="3">Mencari Sendiri</option>
              </select>
            </div>   

            <div class="input-group mb-3 row">
              <div class="col-lg-3 col-md-4 col-sm-6">
                <vmd-button
                  class="my-1 mb-2"
                  variant="gradient"
                  color="warning"
                  width="125px"
                  >Simpan
                </vmd-button>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6">
                <vmd-button
                  class="my-1 mb-2"
                  variant="gradient"
                  color="light"
                  width="125px"
                  >Batal
                </vmd-button>
              </div>              
            </div>
          </div>
        </div>
      </form>

      <form id="form_study">
        <div class="row p-4">
          <div class="col-6">           
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Nama Perguruan Tinggi</label><br/>
              <input type="nama" class="form-control form-control-default" name="nama_kampus" isrequired="true">
              <input type="hidden" class="form-control form-control-default" name="paska_kampus" isrequired="true">
            </div>       

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Studi</label><br/>
              <select name="jenis_studi" id="jenis_studi" class="form-control">
                <option value="Dalam Negeri">Dalam Negeri</option>
                <option value="Luar Negeri">Luar Negeri</option>
              </select> 
            </div> 

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Tahun Masuk</label><br/>
              <input type="text" class="form-control" name="tahun_masuk" isrequired="true">
            </div>

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Apakah kelanjutan study sesuai dengan jurusan sebelumnya?</label><br/>
              <select name="study_relevan" id="study_relevan" class="form-control">
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
              </select>
            </div>
          </div>

          <div class="col-6">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Alamat Perguruan Tinggi</label><br/>
              <input type="text" class="form-control" name="alamat_kampus" isrequired="true">
            </div>

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Bidang/Jurusan</label><br/>
              <div class="col-12">
                  <Select2 v-model="bidang" :options="optionBidang" :settings="{ settingOption: value, settingOption: value }" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
              </div>
            </div>

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Tahun Lulus</label><br/>
              <input type="text" class="form-control" name="tahun_lulus" isrequired="true">
            </div>

            <div class="input-group mb-3 my-5 row">
              <div class="col-lg-3 col-md-4 col-sm-6">
                <vmd-button
                  class="my-1 mb-2"
                  variant="gradient"
                  color="warning"
                  width="125px"
                  >Simpan
                </vmd-button>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6">
                <vmd-button
                  class="my-1 mb-2"
                  variant="gradient"
                  color="light"
                  width="125px"
                  >Batal
                </vmd-button>
              </div>              
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Select2 from 'vue3-select2-component';
import VmdButton from "@/components/VmdButton.vue";
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import $ from "jquery";

export default {
  name: "form-card-tracer",
  components: {
    Select2,
    VmdButton
  },
  data() {
      return {
          bidang: 'Pilih Bidang',
          optionBidang: ['Pilih Bidang', 'Arsitektur', 'Akuntasi', 'Telekomunikasi', 'Desain'], // or [{id: key, text: value}, {id: key, text: value}]
      }
  },
  methods: {
      myChangeEvent(val){
          console.log(val);
      },
      mySelectEvent({id, text}){
          console.log({id, text})
      },
  },
  mounted() {
    setNavPills();
    setTooltip();
    this.$nextTick(() => {
      $('#form_study').hide()
      $("#lanjut_bekerja").click(function(){
        $("#form_bekerja").show();
        $("#form_study").hide();
      })
      $("#lanjut_study").click(function(){
        $("#form_bekerja").hide();
        $("#form_study").show();
      })
    })
  },
  beforeUnmount() {
    this.$store.state.isAbsolute = false;
  },
  
};
</script>
