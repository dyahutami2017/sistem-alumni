<!-- prettier-ignore -->
<template>
  <div class="card">
    <div class="card-body px-0 pt-0 pb-2">
      <div class="chooseTracer p-5">
        <a href="#" class="btn btn-info" id="lanjut_bekerja" style="margin-right: 30px; width: 150px"><i class="fa fa-briefcase"></i> Bekerja</a>
        <a href="#" class="btn btn-info" id="lanjut_study" style="margin-right: 30px; width: 150px"><i class="fa fa-graduation-cap"></i> Studi Lanjut </a>
        <a href="#" class="btn btn-info" id="lanjut_wiraswasta" style="margin-right: 30px; width: 150px"><i class="fa fa-shopping-basket"></i> Wiraswasta </a>
      </div>
      <div id="form_bekerja">
        <div class="row p-4">
          <div class="col-lg-6 col-md-12 col-sm-12">           
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Nama Perusahaan</label><br/>
              <input type="nama" class="form-control form-control-default" name="nama_perusahaan" v-model="tracer_w.company_name" isrequired="true">
              <input type="hidden" class="form-control form-control-default" name="paska_kampus" isrequired="true">
              <input type="hidden" class="form-control form-control-default" name="user_id" id="user_id" v-model="tracer_w.user_id" isrequired="true">
            </div>

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Alamat Perusahaan</label><br/>
              <input type="text" class="form-control" name="alamat_perusahaan"  v-model="tracer_w.company_address" isrequired="true">
            </div>

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Bidang/Sektor Industri</label><br/>
              <div class="col-12">
                  <Select2 v-model="tracer_w.company_sector" :options="optionBidang" />
              </div>
            </div>

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Kapan anda mulai bekerja</label><br/>
              <input type="date" name="waktu_bekerja" id="waktu_bekerja" class="form-control"  v-model="tracer_w.start_working">
            </div>

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Apakah Pekerjaan sesuai dengan jurusan anda</label><br/>
              <select name="job_relevan" id="job_relevan" class="form-control" v-model="tracer_w.job_matches">
                <option value="1">Ya</option>
                <option value="2">Tidak</option>
              </select>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Posisi dalam Perusahaan</label><br/>
              <input type="text" class="form-control form-control-default" name="posisi_perusahaan" isrequired="true" v-model="tracer_w.position">
            </div>

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Status Kontrak</label><br/>
              <select name="status_kontrak" id="status_kontrak" class="form-control" v-model="tracer_w.contract_status">
                <option value="Karyawan Tetap (PKWTT)">Karyawan Tetap (PKWTT)</option>
                <option value="Karyawan Tidak Tetap">Karyawan Tidak Tetap</option>
                <option value="Karyawan Paruh Waktu">Karyawan Paruh Waktu</option>
                <option value="Outsourcing">Outsourcing</option>
              </select>
            </div>

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Gaji</label><br/>
              <input type="text" class="form-control form-control-default" name="gaji" isrequired="true" placeholder="5000000" v-model="tracer_w.salary">
            </div>

             <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Saya memperoleh pekerjaan ini dari</label><br/>
              <input type="text" name="get_job_from" id="get_job_from" class="form-control" v-model="tracer_w.get_job_from">
            </div>   
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">  
            <div class="input-group mb-3 row">
              <div class="col-lg-4 col-md-6 col-sm-12">
                <vmd-button
                  class="my-1 mb-2 btnSave"
                  variant="gradient"
                  color="info"
                  fullWidth
                  v-on:click="add_bekerja()"
                  >Simpan
                </vmd-button>
                <vmd-button
                  class="my-1 mb-2 btnUpdate"
                  variant="gradient"
                  color="info"
                  fullWidth
                  v-on:click="update_bekerja()"
                  >Update
                </vmd-button>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <vmd-button
                  class="my-1 mb-2 btnBatal"
                  variant="gradient"
                  color="light"
                  fullWidth
                  >Batal
                </vmd-button>
              </div>              
            </div>
          </div>
        </div>
      </div>
      <div id="form_study">
        <div class="row p-4">
          <div class="col-lg-6 col-md-12 col-sm-12">           
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Nama Perguruan Tinggi</label><br/>
              <input type="nama" class="form-control form-control-default" name="nama_kampus" isrequired="true" v-model="tracer_s.university_name">
            </div>       

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Studi</label><br/>
              <select name="jenis_studi" id="jenis_studi" class="form-control" v-model="tracer_s.study_location">
                <option value="dalam negeri">Dalam Negeri</option>
                <option value="luar negeri">Luar Negeri</option>
              </select> 
            </div> 

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Tahun Masuk</label><br/>
              <input type="year" class="form-control" name="tahun_masuk" isrequired="true" v-model="tracer_s.entry_year">
            </div>

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Apakah kelanjutan study sesuai dengan jurusan sebelumnya?</label><br/>
              <select name="study_relevan" id="study_relevan" class="form-control" v-model="tracer_s.study_matches">
                <option value="1">Ya</option>
                <option value="2">Tidak</option>
              </select>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Alamat Perguruan Tinggi</label><br/>
              <input type="text" class="form-control" name="alamat_kampus" isrequired="true" v-model="tracer_s.university_address">
            </div>

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Bidang/Jurusan</label><br/>
              <div class="col-12">
                  <Select2 :options="optionBidang" v-model="tracer_s.departement" />
              </div>
            </div>

            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Tahun Lulus</label><br/>
              <input type="year" class="form-control" name="tahun_lulus" isrequired="true" v-model="tracer_s.graduate_year">
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="input-group mb-3 row">
              <div class="col-lg-4 col-md-6 col-sm-12">
                <vmd-button
                  class="my-1 mb-2 btnSaveStudy"
                  variant="gradient"
                  color="info"
                  fullWidth
                  v-on:click="add_study()"
                  >Simpan
                </vmd-button>
                <vmd-button
                  class="my-1 mb-2 btnUpdateStudy"
                  variant="gradient"
                  color="info"
                  fullWidth
                  v-on:click="update_study()"
                  >Update
                </vmd-button>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <vmd-button
                  class="my-1 mb-2 btnBatal"
                  variant="gradient"
                  color="light"
                  fullWidth
                  >Batal
                </vmd-button>
              </div>              
            </div>
          </div>
        </div>
      </div>
      <div id="form_wiraswasta">
        <div class="row p-4">
          <div class="col-lg-6 col-md-12 col-sm-12">           
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Nama Usaha</label><br/>
              <input type="nama" class="form-control form-control-default" name="nama_usaha" isrequired="true" v-model="tracer_e.business_name">
            </div>       
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Tahun Berdiri</label><br/>
              <input type="text" class="form-control" name="tahun_usaha" isrequired="true" v-model="tracer_e.establish_year">
            </div>
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Estimasi Pendapatan Per Bulan</label><br/>
              <input type="text" class="form-control" name="estimasi_usaha" isrequired="true" v-model="tracer_e.income">
            </div>
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Sumber Permodalan</label><br/>
              <select class="form-control" name="sumber_usaha" id="sumber_usaha" v-model="tracer_e.capital_source">
                <option value="pribadi">Pribadi</option>
                <option value="investasi">Investasi</option>
                <option value="hibah">Hibah</option>
              </select>
            </div>
          </div>

          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Alamat Usaha</label><br/>
              <input type="text" class="form-control" name="alamat_usaha" isrequired="true" v-model="tracer_e.business_address">
            </div>
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Bidang Usaha</label><br/>
              <input type="text" class="form-control" name="bidang_usaha" isrequired="true" v-model="tracer_e.business_sector">
            </div>
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">No. Telp</label><br/>
              <input type="text" class="form-control" name="telp_usaha" isrequired="true" v-model="tracer_e.business_phone">
            </div>
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Apakah kelanjutan usaha sesuai dengan jurusan sebelumnya?</label><br/>
              <select name="business_relevan" id="business_relevan" class="form-control" v-model="tracer_e.business_matches">
                <option value="1">Ya</option>
                <option value="2">Tidak</option>
              </select>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="input-group row">
              <div class="col-lg-4 col-md-6 col-sm-12">
                <vmd-button
                  class="my-1 mb-2 btnSaveUsaha"
                  variant="gradient"
                  color="info"
                  fullWidth
                  v-on:click="add_usaha()"
                  >Simpan
                </vmd-button>
                <vmd-button
                  class="my-1 mb-2 btnUpdateUsaha"
                  variant="gradient"
                  color="info"
                  fullWidth
                  v-on:click="update_usaha()"
                  >Update
                </vmd-button>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <vmd-button
                  class="my-1 mb-2 btnBatal"
                  variant="gradient"
                  color="light"
                  fullWidth
                  >Batal
                </vmd-button>
              </div>              
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
          tracer_w: {
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
          },
          tracer_s: {
            user_id: this.$route.params.id,
            university_name: '',
            university_address: '',
            study_location: '',
            departement: '',
            entry_year: '',
            graduate_year: '',
            study_matches: '',
          },
          tracer_e: {
            user_id: this.$route.params.id,
            business_name: '',
            business_address: '',
            business_sector: '',
            business_phone: '',
            establish_year: '',
            capital_source: '',
            income: '',
            business_matches: '',
          },
      }
  },
  methods: {
      add_bekerja() {
        const url = "http://api.alumni.eduraya.co.id/api/tracer_w";
        axios
          .post(url, this.tracer_w)
          .then(function (response) {
            alert(response.data.messege);
          })
          .catch((error) => alert(error));
      },
      update_bekerja() {
        const url = "http://api.alumni.eduraya.co.id/api/tracer_w/"+ this.$route.params.id;
        axios
          .put(url, this.tracer_w)
          .then(function (response) {
            alert(response.data.messege);
          })
          .catch((error) => alert(error));
      },
      load(){
          axios.get('http://api.alumni.eduraya.co.id/api/tracer_w/'+ this.$route.params.id).then(res => {
          this.tracer_w = res.data
          console.log(res.data);
          this.tracer_w.company_name = res.data.tracer_work.company_name 
          this.tracer_w.company_address = res.data.tracer_work.company_address 
          this.tracer_w.company_sector = res.data.tracer_work.company_sector 
          this.tracer_w.position = res.data.tracer_work.position 
          this.tracer_w.contract_status = res.data.tracer_work.contract_status 
          this.tracer_w.salary = res.data.tracer_work.salary 
          this.tracer_w.job_matches = res.data.tracer_work.job_matches 
          this.tracer_w.start_working = res.data.tracer_work.start_working 
          this.tracer_w.get_job_from = res.data.tracer_work.get_job_from 
    
          $('.btnSave').hide()
          $('.btnUpdate').show()
        }).catch ((err) => {
          $('.btnSave').show()
          $('.btnUpdate').hide()
          console.log(err);
        })
      },

      add_study() {
        const url = "http://api.alumni.eduraya.co.id/api/tracer_s";
        console.log(this.tracer_s)
        axios
          .post(url, this.tracer_s)
          .then(function (response) {
            alert(response.data.messege);
          })
          .catch((error) => alert(error));
      },
      update_study() {
        const url = "http://api.alumni.eduraya.co.id/api/tracer_s/"+ this.$route.params.id;
        axios
          .put(url, this.tracer_s)
          .then(function (response) {
            alert(response.data.messege);
          })
          .catch((error) => alert(error));
      },
      load_study(){
          axios.get('http://api.alumni.eduraya.co.id/api/tracer_s/'+ this.$route.params.id).then(res => {
          this.tracer_s = res.data
          console.log(res.data);
          this.tracer_s.university_name = res.data.tracer_study.university_name 
          this.tracer_s.university_address = res.data.tracer_study.university_address 
          this.tracer_s.study_location = res.data.tracer_study.study_location 
          this.tracer_s.departement = res.data.tracer_study.departement 
          this.tracer_s.entry_year = res.data.tracer_study.entry_year 
          this.tracer_s.graduate_year = res.data.tracer_study.graduate_year 
          this.tracer_s.study_matches = res.data.tracer_study.study_matches 
          this.tracer_s.completed = res.data.tracer_study.completed          
          $('.btnSaveStudy').hide()
          $('.btnUpdateStudy').show()
        }).catch ((err) => {
          $('.btnSaveStudy').show()
          $('.btnUpdateStudy').hide()
          console.log(err);
        })
      },
      add_usaha() {
        const url = "http://api.alumni.eduraya.co.id/api/tracer_e";
        axios
          .post(url, this.tracer_e)
          .then(function (response) {
            alert(response.data.messege);
          })
          .catch((error) => alert(error));
      },
      update_usaha() {
        const url = "http://api.alumni.eduraya.co.id/api/tracer_e/"+ this.$route.params.id;
        axios
          .put(url, this.tracer_e)
          .then(function (response) {
            alert(response.data.messege);
          })
          .catch((error) => alert(error));
      },
      load_usaha(){
          axios.get('http://api.alumni.eduraya.co.id/api/tracer_e/'+ this.$route.params.id).then(res => {
          this.tracer_e = res.data
          console.log(res.data);
          this.tracer_e.business_name = res.data.tracer_entrepreneur.business_name 
          this.tracer_e.business_address = res.data.tracer_entrepreneur.business_address 
          this.tracer_e.business_sector = res.data.tracer_entrepreneur.business_sector 
          this.tracer_e.business_phone = res.data.tracer_entrepreneur.business_phone 
          this.tracer_e.establish_year = res.data.tracer_entrepreneur.establish_year 
          this.tracer_e.capital_source = res.data.tracer_entrepreneur.capital_source 
          this.tracer_e.income = res.data.tracer_entrepreneur.income 
          this.tracer_e.business_matches = res.data.tracer_entrepreneur.business_matches 
          this.tracer_e.completed = res.data.tracer_entrepreneur.completed          
          $('.btnSaveUsaha').hide()
          $('.btnUpdateUsaha').show()
        }).catch ((err) => {
          $('.btnSaveUsaha').show()
          $('.btnUpdateUsaha').hide()
          console.log(err);
        })
      },
  },
  mounted() {
    this.load();
    this.load_study();
    this.load_usaha();
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