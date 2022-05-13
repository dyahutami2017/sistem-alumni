<!-- prettier-ignore -->
<template>
  <div class="card">
    <div class="card-body px-0 pt-0 pb-2">
      <div class="chooseTracer p-5">
        <a href="#" class="btn btn-info" id="lanjut_bekerja" style="margin-right: 30px; width: 150px"><i class="fa fa-briefcase"></i> Bekerja</a>
        <a href="#" class="btn btn-info" id="lanjut_study" style="margin-right: 30px; width: 150px"><i class="fa fa-graduation-cap"></i> Studi Lanjut </a>
        <a href="#" class="btn btn-info" id="lanjut_wiraswasta" style="margin-right: 30px; width: 150px"><i class="fa fa-shopping-basket"></i> Wiraswasta </a>
        <a href="#"  v-on:click="no_work()" class="btn btn-info" id="tidak_kanjut" style="margin-right: 30px; width: 200px"><i class="fa fa-child"></i> Belum Ketiganya</a>
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
                <option value="Karyawan Tetap">Karyawan Tetap</option>
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
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Tracer Study
              </th>
              <th
                class="text-left text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 p-0"
              >
                Update Date
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Expired Date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="history in histories" :key="history.id">
              <td class="align-middle text-center text-sm">
                <p v-if="history.id == 1" class="text-xs font-weight-bold mb-0">
                  Bekerja
                </p>
                <p v-else-if="history.id == 2" class="text-xs font-weight-bold mb-0">
                  Melanjutkan
                </p>
                <p v-else-if="history.id == 3" class="text-xs font-weight-bold mb-0">
                  Wirausaha
                </p>
                <p v-else class="text-xs font-weight-bold mb-0">
                  Belum Bekerja
                </p>
              </td>
              <td class="align-middle text-left text-sm">
                <p class="text-xs font-weight-bold mb-0">
                  {{ date(history.update_date)}}
                </p>
              </td>
              <td class="align-middle text-center text-sm">
                <p class="text-xs font-weight-bold mb-0">
                  {{ date(history.expired_date) }}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
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
import moment from 'moment'

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
          histories: [],
      }
  },
  methods: {
      date: function (date) {
        return moment(date).format('DD MMMM YYYY');
      },
      update_bekerja() {
        const url = "http://api.alumni.eduraya.co.id/api/tracer_w/"+ this.$route.params.id;
        axios
          .post(url, this.tracer_w)
          .then((response) => {
            this.swalAlert(response.data.messege, 'Sukses', 'success');
          })
          .catch((error) => {
            console.log(error)
            var obj = JSON.stringify(error.response.data)
            var dt = JSON.parse(obj);
            if(dt.company_name != undefined){
              this.swalAlert(dt.company_name, 'Gagal', 'error');
            }
            else if(dt.company_address != undefined){
              this.swalAlert(dt.company_address, 'Gagal', 'error');
            }
            else if(dt.company_sector != undefined){
              this.swalAlert(dt.company_sector, 'Gagal', 'error');
            }
            else if(dt.position != undefined){
              this.swalAlert(dt.position, 'Gagal', 'error');
            }
            else if(dt.contract_status != undefined){
              this.swalAlert(dt.contract_status, 'Gagal', 'error');
            }
            else if(dt.salary != undefined){
              this.swalAlert(dt.salary, 'Gagal', 'error');
            }
            else if(dt.job_matches != undefined){
              this.swalAlert(dt.job_matches, 'Gagal', 'error');
            }
            else if(dt.start_working != undefined){
              this.swalAlert(dt.start_working, 'Gagal', 'error');
            }
            else if(dt.get_job_from != undefined){
              this.swalAlert(dt.get_job_from, 'Gagal', 'error');
            }
            else{
              this.swalAlert(dt)
            }
          })
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
      update_study() {
        const url = "http://api.alumni.eduraya.co.id/api/tracer_s/"+ this.$route.params.id;
        axios
          .put(url, this.tracer_s)
          .then((response) => {
            // alert(response.data.messege);
             this.swalAlert(response.data.messege, 'Sukses', 'success')
          })
          .catch(error => {
            var obj = JSON.stringify(error.response.data)
            var dt = JSON.parse(obj);
            if(dt.university_name != undefined){
              this.swalAlert(dt.university_name, 'Gagal', 'error');
            }
            else if(dt.university_address != undefined){
              this.swalAlert(dt.university_address, 'Gagal', 'error');
            }
            else if(dt.study_location != undefined){
              this.swalAlert(dt.study_location, 'Gagal', 'error');
            }
            else if(dt.departement != undefined){
              this.swalAlert(dt.departement, 'Gagal', 'error');
            }
            else if(dt.entry_year != undefined){
              this.swalAlert(dt.entry_year, 'Gagal', 'error');
            }
            else if(dt.graduate_year != undefined){
              this.swalAlert(dt.graduate_year, 'Gagal', 'error');
            }
            else if(dt.study_matches != undefined){
              this.swalAlert(dt.study_matches, 'Gagal', 'error');
            }
            else{
              this.swalAlert(dt)
            }
          });
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
      update_usaha() {
        const url = "http://api.alumni.eduraya.co.id/api/tracer_e/"+ this.$route.params.id;
        axios
          .put(url, this.tracer_e)
          .then((response) => {
            // alert(response.data.messege);
             this.swalAlert(response.data.messege, 'Sukses', 'success')
          })
          .catch(error => {
            console.log(error.response)
            var obj = JSON.stringify(error.response.data)
            var dt = JSON.parse(obj);
            if(dt.business_name != undefined){
              this.swalAlert(dt.business_name, 'Gagal', 'error');
            }
            else if(dt.business_address != undefined){
              this.swalAlert(dt.business_address, 'Gagal', 'error');
            }
            else if(dt.business_sector != undefined){
              this.swalAlert(dt.business_sector, 'Gagal', 'error');
            }
            else if(dt.business_phone != undefined){
              this.swalAlert(dt.business_phone, 'Gagal', 'error');
            }
            else if(dt.establish_year != undefined){
              this.swalAlert(dt.establish_year, 'Gagal', 'error');
            }
            else if(dt.capital_source != undefined){
              this.swalAlert(dt.capital_source, 'Gagal', 'error');
            }
            else if(dt.income != undefined){
              this.swalAlert(dt.income, 'Gagal', 'error');
            }
            else if(dt.business_matches != undefined){
              this.swalAlert(dt.business_matches, 'Gagal', 'error');
            }
            else{
              this.swalAlert(dt)
            }          
          });
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
      load_history(){
          axios.get('http://api.alumni.eduraya.co.id/api/tracer/'+ this.$route.params.id).then(res => {
          this.histories = res.data.tracer_update_history
          console.log(res.data);
        }).catch ((err) => {
          console.log(err);
        })
      },
      no_work() {
        const url = "http://api.alumni.eduraya.co.id/api/no_work/"+ this.$route.params.id;
        axios
          .post(url)
          .then((response) => {
            this.swalAlert(response.data.messege, 'Sukses', 'success');
            this.load_history();
          })
          .catch((error) => {
            console.log(error)            
              this.swalAlert('Proses Tidak Tersimpan', 'Gagal', 'error');
          })
      },
      swalAlert(text,title,icon){
        this.$swal({
          title: title,
          text: text,
          icon: icon,
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'OK'
        })
      }
  },
  mounted() {
    this.load();
    this.load_study();
    this.load_usaha();
    this.load_history();
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
