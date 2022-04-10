<!-- prettier-ignore -->
<template>
  <div class="card">
    <div class="card-body px-0 pt-0 pb-2">
      <div class="chooseTracer p-5">
        <a href="#" class="btn btn-warning" id="lanjut_bekerja" style="margin-right: 30px; width: 150px"><i class="fa fa-briefcase"></i> Bekerja</a>
        <a href="#" class="btn btn-warning" id="lanjut_study" style="margin-right: 30px; width: 150px"><i class="fa fa-graduation-cap"></i> Studi Lanjut </a>
        <a href="#" class="btn btn-warning" id="lanjut_wiraswasta" style="margin-right: 30px; width: 150px"><i class="fa fa-shopping-basket"></i> Wiraswasta </a>
      </div>
      <!-- <div class="nav-wrapper position-relative end-0">
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
      </div> -->
      <div id="form_bekerja">
        <div class="row p-4">
          <div class="col-6">           
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Nama Perusahaan</label><br/>
              <input type="nama" class="form-control form-control-default" name="nama_perusahaan" v-model="tracer.company_name" isrequired="true">
              <input type="hidden" class="form-control form-control-default" name="paska_kampus" isrequired="true">
              <input type="hidden" class="form-control form-control-default" name="user_id" id="user_id" v-model="tracer.user_id" isrequired="true">
            </div>

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Alamat Perusahaan</label><br/>
              <input type="text" class="form-control" name="alamat_perusahaan"  v-model="tracer.company_address" isrequired="true">
            </div>

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Bidang/Sektor Industri</label><br/>
              <div class="col-12">
                  <Select2 v-model="tracer.company_sector" :options="optionBidang" />
              </div>
            </div>

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Kapan anda mulai bekerja</label><br/>
              <input type="text" name="waktu_bekerja" id="waktu_bekerja" class="form-control"  v-model="tracer.start_working">
            </div>

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Apakah Pekerjaan sesuai dengan jurusan anda</label><br/>
              <select name="job_relevan" id="job_relevan" class="form-control" v-model="tracer.job_matches">
                <option value="1">Ya</option>
                <option value="2">Tidak</option>
              </select>
            </div>
            <div class="input-group mb-3 row">
              <div class="col-lg-3 col-md-4 col-sm-6">
                <vmd-button
                  class="my-1 mb-2 btnSave"
                  variant="gradient"
                  color="warning"
                  width="125px"
                  v-on:click="add_bekerja()"
                  >Simpan
                </vmd-button>
                <vmd-button
                  class="my-1 mb-2 btnUpdate"
                  variant="gradient"
                  color="warning"
                  width="125px"
                  v-on:click="update_bekerja()"
                  >Update
                </vmd-button>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6">
                <vmd-button
                  class="my-1 mb-2 btnBatal"
                  variant="gradient"
                  color="light"
                  width="125px"
                  >Batal
                </vmd-button>
              </div>              
            </div>
          </div>

          <div class="col-6">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Posisi dalam Perusahaan</label><br/>
              <input type="text" class="form-control form-control-default" name="posisi_perusahaan" isrequired="true" v-model="tracer.position">
            </div>

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Status Kontrak</label><br/>
              <select name="status_kontrak" id="status_kontrak" class="form-control" v-model="tracer.contract_status">
                <option value="Karyawan Tetap (PKWTT)">Karyawan Tetap (PKWTT)</option>
                <option value="Karyawan Tidak Tetap">Karyawan Tidak Tetap</option>
                <option value="Karyawan Paruh Waktu">Karyawan Paruh Waktu</option>
                <option value="Outsourcing">Outsourcing</option>
              </select>
            </div>

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Gaji</label><br/>
              <input type="text" class="form-control form-control-default" name="gaji" isrequired="true" placeholder="5000000" v-model="tracer.salary">
            </div>

             <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Saya memperoleh pekerjaan ini dari</label><br/>
              <input type="text" name="get_job_from" id="get_job_from" class="form-control" v-model="tracer.get_job_from">
            </div>   
          </div>
        </div>
      </div>

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
                  class="my-1 mb-2 btnBatal"
                  variant="gradient"
                  color="light"
                  width="125px"
                  >Batal
                </vmd-button>
              </div>              
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
          </div>
        </div>
      </form>

      <form id="form_wiraswasta">
        <div class="row p-4">
          <div class="col-6">           
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Nama Usaha</label><br/>
              <input type="nama" class="form-control form-control-default" name="nama_usaha" isrequired="true">
              <input type="hidden" class="form-control form-control-default" name="paska_kampus" isrequired="true">
            </div>       

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Tahun Usaha</label><br/>
              <input type="text" class="form-control" name="tahun_usaha" isrequired="true">
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
                  class="my-1 mb-2 btnBatal"
                  variant="gradient"
                  color="light"
                  width="125px"
                  >Batal
                </vmd-button>
              </div>              
            </div>
          </div>

          <div class="col-6">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Alamat Usaha</label><br/>
              <input type="text" class="form-control" name="alamat_kampus" isrequired="true">
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
import axios from "axios";

export default {
  name: "form-card-tracer",
  components: {
    Select2,
    VmdButton
  },
  data() {
      return {
          optionBidang: ['Pilih Bidang', 'Arsitektur', 'Akuntasi', 'Telekomunikasi', 'Desain'], // or [{id: key, text: value}, {id: key, text: value}]
          tracer: {
            user_id: this.$route.params.id,
            company_name: '',
            company_address: '',
            company_sector: 'Pilih Bidang',
            position: '',
            contract_status: '',
            salary: '',
            job_matches: '',
            start_working: '',
            get_job_from: '',
          }
      }
  },
  methods: {
      add_bekerja() {
        const url = "http://alumni.eduraya.co.id/api/tracer";
        axios
          .post(url, this.tracer)
          .then(function (response) {
            alert(response.data.messege);
          })
          .catch((error) => alert(error));
      },
      update_bekerja() {
        const url = "http://alumni.eduraya.co.id/api/tracer/"+ this.$route.params.id;
        axios
          .put(url, this.tracer)
          .then(function (response) {
            alert(response.data.messege);
          })
          .catch((error) => alert(error));
      },
      load(){
          axios.get('http://alumni.eduraya.co.id/api/tracer/'+ this.$route.params.id).then(res => {
          this.tracer = res.data
          console.log(res.data);
          this.tracer.company_name = res.data.tracer_study.company_name 
          this.tracer.company_address = res.data.tracer_study.company_address 
          this.tracer.company_sector = res.data.tracer_study.company_sector 
          this.tracer.position = res.data.tracer_study.position 
          this.tracer.contract_status = res.data.tracer_study.contract_status 
          this.tracer.salary = res.data.tracer_study.salary 
          this.tracer.job_matches = res.data.tracer_study.job_matches 
          this.tracer.start_working = res.data.tracer_study.start_working 
          this.tracer.get_job_from = res.data.tracer_study.get_job_from 
          
          $('.btnSave').hide()
          $('.btnUpdate').show()
        }).catch ((err) => {
          $('.btnSave').show()
          $('.btnUpdate').hide()
          console.log(err);
        })
      },
  },
  mounted() {
    this.load();
    setNavPills();
    setTooltip();
    this.$nextTick(() => {
      $('#form_bekerja').hide()
      $('#form_study').hide()
      $('#form_wiraswasta').hide()
      $("#lanjut_bekerja").click(function(){
        $("#form_bekerja").show();
        $("#form_study").hide();
        $("#form_wiraswasta").hide();
        $(".chooseTracer").hide();
      })
      $("#lanjut_study").click(function(){
        $("#form_bekerja").hide();
        $("#form_study").show();
        $("#form_wiraswasta").hide();
        $(".chooseTracer").hide();
      })
      $("#lanjut_wiraswasta").click(function(){
        $("#form_bekerja").hide();
        $("#form_study").hide();
        $("#form_wiraswasta").show();
        $(".chooseTracer").hide();
      })
      $(".btnBatal").click(function(){
        $('#form_bekerja').hide()
        $('#form_study').hide()
        $('#form_wiraswasta').hide()
        $(".chooseTracer").show();
      })
    })
  },
  beforeUnmount() {
    this.$store.state.isAbsolute = false;
  },
  
};
</script>
