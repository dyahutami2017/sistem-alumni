<!-- prettier-ignore -->
<template>
  <div class="card">
    <div class="card-body px-0 pb-2">
      <form v-on:submit.prevent="submit">
        <div class="row p-4">
          <div class="col-lg-2 col-sm-4 mb-3">
            <img :src="photo_url" style="width:100%">
          </div>
          <div class="col-lg-8 col-sm-6 mb-3">
            <h4>{{profil.name}}</h4>
            <h5>{{profil.email}}</h5>
            <!-- <ul>
              <li>Sudah Terverfikasi</li>
              <li>Data sudah Lengkap</li>
            </ul> -->
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="col-12">Nama Lengkap</label><br/>
              <input type="text" class="form-control" v-model="profil.name" name="name" isrequired="true">
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">No Ijazah</label><br/>
              <input type="text" class="form-control" v-model="profil.diploma_number" name="diploma_number" isrequired="true">
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">IPK</label><br/>
              <input type="text" class="form-control" v-model="profil.gpa" name="gpa" isrequired="true">
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">NIM</label><br/>
              <input type="text" class="form-control" v-model="profil.nim" name="nim" isrequired="true">
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">NIK</label><br/>
              <input type="text" class="form-control" v-model="profil.nik" name="nik" isrequired="true">
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Tempat Lahir</label><br/>
              <input type="text" class="form-control" v-model="profil.birth_place" name="birth_place" isrequired="true">
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Tanggal Lahir</label><br/>
              <input type="date" class="form-control" v-model="profil.birth_date" name="birth_date" isrequired="true">
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Tahun Masuk</label><br/>
              <input type="date" class="form-control" v-model="profil.entry_year" name="entry_year" isrequired="true">
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Tahun Lulus</label><br/>
              <input type="date" class="form-control" v-model="profil.graduate_year" name="graduate_year" isrequired="true">
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Fakultas</label><br/>
              <div class="col-12">
                  <Select2 v-model="profil.faculty" :options="myOptions" />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Jurusan</label><br/>
              <div class="col-12">
                  <Select2 v-model="profil.departement" :options="myOptions2" />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">No.Hp</label><br/>
              <input type="text" class="form-control" v-model="profil.phone_number" name="phone_number" isrequired="true">
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Email</label><br/>
              <input type="email" class="form-control" v-model="profil.email" name="email" isrequired="true">
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Jenis Kelamin</label><br/>
              <div class="col-12">
                <select name="gender" id="gender" class="form-control" v-model="profil.gender">
                  <option value="">Pilih Jenis Kelamin</option>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select> 
                  <!-- <Select2 v-model="profil.Provinsi" :options="myOptions3" @change="myChangeEvent($event)" @select="mySelectEvent($event)" /> -->
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Alamat Tinggal</label><br/>
              <input type="text" class="form-control" v-model="profil.address" name="address" isrequired="true">
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Sosial Media</label><br/>
              <input type="text" class="form-control" v-model="profil.social_media" name="social_media" isrequired="true">
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Organisasi</label><br/>
              <input type="text" class="form-control" v-model="profil.organization" name="organization" isrequired="true">
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Pencapaian</label><br/>
              <input type="text" class="form-control" v-model="profil.achievement" name="achievement" isrequired="true">
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Foto</label><br/>
              <input type="file" class="form-control" name="foto" ref="file" id="file" isrequired="true" @change="uploadPhoto()">
            </div>
            <div class="border p-2 mt-3">
              <p>Preview:</p>
              <template v-if="preview">
                <img :src="preview" class="img-fluid" style="width:150px"/>
              </template>
            </div>
            <!-- <img :src="photo_url" class="shadow-sm border-radius-sm" style="width:80px; margin-bottom:10px"> -->
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">KTP</label><br/>
              <input type="file" class="form-control" name="ktp" ref="ktp" id="ktp" isrequired="true" @change="uploadKTP()">
            </div>
            <div class="border p-2 mt-3">
              <p>Preview:</p>
              <template v-if="preview_ktp">
                <img :src="preview_ktp" class="img-fluid" style="width:150px"/>
              </template>
            </div>
            <!-- <img :src="ktp_url" class="shadow-sm border-radius-sm" style="width:80px; margin-bottom:10px"> -->
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Ijazah</label><br/>
              <input type="file" class="form-control" name="ijazah" ref="ijazah" id="ijazah" isrequired="true" @change="uploadIjazah()">
            </div>
            <div class="border p-2 mt-3">
              <p>Preview:</p>
              <template v-if="preview_ijazah">
                <img :src="preview_ijazah" class="img-fluid" style="width:150px"/>
              </template>
            </div>
            <!-- <img :src="ijazah_url" class="shadow-sm border-radius-sm" style="width:80px; margin-bottom:10px"> -->
          </div>
          <div class="col-lg-8"></div>
          <div class="col-lg-2 col-sm-6">
            <vmd-button
                class="my-4 mb-2"
                variant="gradient"
                color="info"
                fullWidth
                >Simpan
              </vmd-button>
          </div>
          <div class="col-lg-2 col-sm-6">
            <vmd-button
                class="my-4 mb-2"
                variant="gradient"
                color="light"
                fullWidth
                >Batal
              </vmd-button>
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
import axios from "axios";
let self;
export default {
  name: "form-card",
  components: {
    Select2,
    VmdButton
  },
  created: function() {
    self = this;
    this.load();
  },
  data() {
      return {
          src: '',
          photo_url: '',
          ktp_url: '',
          ijazah_url: '',
          preview: null,
          preview_ktp: null,
          preview_ijazah: null,
          token: localStorage.getItem('token'),
          myValue: 'Pilih Fakultas',
          myValue2: 'Pilih Jurusan',
          // myValue3: 'Pilih Provinsi',
          myOptions: ['Pilih Fakultas'],
          myOptions2: ['Pilih Jurusan'],
          // myOptions3: ['Pilih Provinsi','Aceh', 'Bandung', 'Jakarta', 'DI Yogyakarta', 'Jawa Tengah'], // or [{id: key, text: value}, {id: key, text: value}]
          //optionFakultas: [],
          profil:{
              name:'',
              diploma_number:'',
              gpa:'',
              nim:'',
              nik:'',
              birth_place:'',
              birth_date:'',
              entry_year:'',
              graduate_year:'',
              phone_number:'',
              address:'',
              email:'',
              faculty:'',
              departement:'',
              gender:'',
              social_media:'',
              organization:'',
              achievement:'',
              photo:'',
              identity_card:'',
              bachelor_certificate:'',
          }
      }
  },
  mounted() {
    this.load();
    this.load_faculty();
    this.load_departement();
  },
  methods: {
    load(){
        axios.get('http://api.alumni.eduraya.co.id/api/profile/'+ self.$route.params.id, 
        {
          headers: {'Authorization': 'Bearer '+ this.token}
        }
        ).then(res => {
        self.profil.name = res.data.user.name 
        self.profil.nim = res.data.user.nim 
        self.profil.nik = res.data.user.nik 
        self.profil.birth_place = res.data.user.birth_place 
        self.profil.birth_date = res.data.user.birth_date 
        self.profil.entry_year = res.data.user.entry_year 
        self.profil.graduate_year = res.data.user.graduate_year 
        self.profil.phone_number = res.data.user.phone_number 
        self.profil.address = res.data.user.address 
        self.profil.email = res.data.user.email
        self.profil.diploma_number = res.data.user.diploma_number
        self.profil.gpa = res.data.user.gpa
        self.profil.social_media = res.data.user.social_media
        self.profil.organization = res.data.user.organization
        self.profil.achievement = res.data.user.achievement
        self.photo_url = res.data.user.photo_url
        self.ktp_url = res.data.user.identity_card_url
        self.ijazah_url = res.data.user.bachelor_certificate_url
        self.profil.photo = res.data.user.photo
        self.profil.identity_card = res.data.user.identity_card
        self.profil.bachelor_certificate = res.data.user.bachelor_certificate
        if(res.data.user.faculty == null || res.data.user.faculty == ''){
          self.profil.faculty = 'Pilih Fakultas'
        }
        else{
          self.profil.faculty = res.data.user.faculty  
        }
        if(res.data.user.departement == null || res.data.user.departement == ''){
          self.profil.departement = 'Pilih Jurusan'
        }
        else{
          self.profil.departement = res.data.user.departement  
        }
        if(res.data.user.gender == null || res.data.user.gender == ''){
          self.profil.gender = ''
        }
        else{
          self.profil.gender = res.data.user.gender  
        }
      }).catch ((err) => {
        console.log(err);
      })
    },
    load_faculty(){
        axios.get('http://api.alumni.eduraya.co.id/api/faculty').then(res => {
          console.log(res.data.faculty)
          for(var i=0; i < res.data.faculty.length; i++){
            this.myOptions.push({
              "id" : res.data.faculty[i].id,
              "text" : res.data.faculty[i].faculty_name
            })
          }
      }).catch ((err) => {
        console.log(err);
      })
    },
    load_departement(){
        axios.get('http://api.alumni.eduraya.co.id/api/departement').then(res => {
          console.log(res.data.Departement)
          for(var i=0; i < res.data.Departement.length; i++){
            this.myOptions2.push({
              "id" : res.data.Departement[i].id,
              "text" : res.data.Departement[i].departement_name
            })
          }
      }).catch ((err) => {
        console.log(err);
      })
    },
    uploadPhoto() {
      self.profil.photo = self.$refs.file.files[0];
      console.log(self.profil.photo);
      if (self.$refs.file.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        }
        reader.readAsDataURL(self.$refs.file.files[0]);
      }
    },
    uploadKTP() {
      self.profil.identity_card = self.$refs.ktp.files[0];
      console.log(self.profil.identity_card);
      if (self.$refs.ktp.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview_ktp = e.target.result;
        }
        reader.readAsDataURL(self.$refs.ktp.files[0]);
      }
    },
    uploadIjazah() {
      self.profil.bachelor_certificate = self.$refs.ijazah.files[0];
      console.log(self.profil.bachelor_certificate)
      if (self.$refs.ijazah.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview_ijazah = e.target.result;
        }
        reader.readAsDataURL(self.$refs.ijazah.files[0]);
      }
    },
    submit(){
      // this.$emit('save-profil', this.profil)
      // const url = "http://api.alumni.eduraya.co.id/api/profile/"+this.$route.params.id;
      // axios
      //   .put(url, this.profil)
      //   .then(function (response) {
      //     console.log(response)
      //     alert(response.data.messege)
      //   })
      //   .catch((error) => alert(error));
      let formData = new FormData();
      formData.append('photo', self.profil.photo);
      formData.append('identity_card', self.profil.identity_card);
      formData.append('bachelor_certificate', self.profil.bachelor_certificate);
      formData.append('address', self.profil.address);
      formData.append('birth_date', self.profil.birth_date);
      formData.append('birth_place', self.profil.birth_place);
      formData.append('departement', self.profil.departement);
      formData.append('diploma_number', self.profil.diploma_number);
      formData.append('email', self.profil.email);
      formData.append('entry_year', self.profil.entry_year);
      formData.append('faculty', self.profil.faculty);
      formData.append('gpa', self.profil.gpa);
      formData.append('graduate_year', self.profil.graduate_year);
      formData.append('name', self.profil.name);
      formData.append('nik', self.profil.nik);
      formData.append('phone_number', self.profil.phone_number);
      formData.append('social_media', self.profil.social_media);
      formData.append('gender', self.profil.gender);
      formData.append('organization', self.profil.organization);
      formData.append('achievement', self.profil.achievement);
      formData.append('nim', self.profil.nim);
      formData.append('_method', 'POST')
      console.log(self.profil.photo);
      const url = "http://api.alumni.eduraya.co.id/api/profile/"+self.$route.params.id;
      axios
        .post(url, formData, {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          })
        .then(function (response) {
          console.log(response)
          self.$swal({
            title: 'Sukses',
            text: response.data.messege,
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              location.reload();
            }
          })
          // if(confirm(response.data.messege)){
          //   location.reload();
          // }
        })
        .catch(error => {
          var obj = JSON.stringify(error.response.data)
          var dt = JSON.parse(obj);
          if(dt.name != undefined){
            this.swalAlert(dt.name, 'Gagal', 'error');
          }
          else if(dt.email != undefined){
            this.swalAlert(dt.email, 'Gagal', 'error');
          }
          else if(dt.nik != undefined){
            this.swalAlert(dt.nik, 'Gagal', 'error');
          }
          else if(dt.nim != undefined){
            this.swalAlert(dt.nim, 'Gagal', 'error');
          }
          else if(dt.faculty != undefined){
            this.swalAlert(dt.faculty, 'Gagal', 'error');
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
          else if(dt.birth_date != undefined){
            this.swalAlert(dt.birth_date, 'Gagal', 'error');
          }
          else if(dt.birth_place != undefined){
            this.swalAlert(dt.birth_place, 'Gagal', 'error');
          }
          else if(dt.gender != undefined){
            this.swalAlert(dt.gender, 'Gagal', 'error');
          }
          else if(dt.address != undefined){
            this.swalAlert(dt.address, 'Gagal', 'error');
          }
          else if(dt.phone_number != undefined){
            this.swalAlert(dt.phone_number, 'Gagal', 'error');
          }
          else if(dt.social_media != undefined){
            this.swalAlert(dt.social_media, 'Gagal', 'error');
          }
          else if(dt.gpa != undefined){
            this.swalAlert(dt.gpa, 'Gagal', 'error');
          }
          else if(dt.diploma_number != undefined){
            this.swalAlert(dt.diploma_number, 'Gagal', 'error');
          }
          else if(dt.organization != undefined){
            this.swalAlert(dt.organization, 'Gagal', 'error');
          }
          else if(dt.achievement != undefined){
            this.swalAlert(dt.achievement, 'Gagal', 'error');
          }
          else if(dt.photo != undefined){
            this.swalAlert(dt.photo, 'Gagal', 'error');
          }
          else if(dt.identity_card != undefined){
            this.swalAlert(dt.identity_card, 'Gagal', 'error');
          }
          else if(dt.bachelor_certificate != undefined){
            this.swalAlert(dt.bachelor_certificate, 'Gagal', 'error');
          }
          else{
            this.swalAlert(dt)
          }
        });
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
  }
};
</script>
<style>
.select2 {
  width:100%!important;
}
</style>