<!-- prettier-ignore -->
<template>
  <div class="card">
    <div class="card-body px-0 pb-2">
      <form v-on:submit.prevent="submit">
        <div class="row p-4">
          <div class="col-lg-2 col-sm-4 mb-3">
            <img :src="profil.photo" style="width:100%">
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
              <label class="label col-12">No Diploma</label><br/>
              <input type="text" class="form-control" v-model="profil.diploma_number" name="diploma_number" isrequired="true">
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">GPA</label><br/>
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
              <input type="file" class="form-control" name="foto" ref="file" id="file" isrequired="true" @change="uploadFile()">
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">KTP</label><br/>
              <input type="file" class="form-control" name="ktp" isrequired="true" >
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Ijazah</label><br/>
              <input type="file" class="form-control" name="ijazah" isrequired="true" >
            </div>
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

export default {
  name: "form-card",
  components: {
    Select2,
    VmdButton
  },
  data() {
        return {
            src: '',
            myValue: 'Pilih Fakultas',
            myValue2: 'Pilih Jurusan',
            // myValue3: 'Pilih Provinsi',
            myOptions: ['Pilih Fakultas','Fakultas Teknik', 'Bahasa dan Seni', 'MIPA', 'Ekonomi', 'Ilmu Sosial'],
            myOptions2: ['Pilih Jurusan','Teknik Informatika', 'Teknik Mesin', 'Seni Rupa', 'Ekonomi Bisnis', 'Pendidikan Ilmu Sosial'],
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
                // identity_card:'',
                // bachelor_certificate:'',
            }
        }
    },
    mounted() {
      this.load();
    },
    methods: {
      load(){
          axios.get(process.env.VUE_APP_ROOT_API + 'profile/'+ this.$route.params.id).then(res => {
          this.profil.name = res.data.user.name 
          this.profil.nim = res.data.user.nim 
          this.profil.nik = res.data.user.nik 
          this.profil.birth_place = res.data.user.birth_place 
          this.profil.birth_date = res.data.user.birth_date 
          this.profil.entry_year = res.data.user.entry_year 
          this.profil.graduate_year = res.data.user.graduate_year 
          this.profil.phone_number = res.data.user.phone_number 
          this.profil.address = res.data.user.address 
          this.profil.email = res.data.user.email
          this.profil.diploma_number = res.data.user.diploma_number
          this.profil.gpa = res.data.user.gpa
          this.profil.social_media = res.data.user.social_media
          this.profil.organization = res.data.user.organization
          this.profil.achievement = res.data.user.achievement
          // this.profil.photo = res.data.user.photo_url
          // this.profil.identity_card = res.data.user.identity_card
          // this.profil.bachelor_certificate = res.data.user.bachelor_certificate
          if(res.data.user.faculty == null || res.data.user.faculty == ''){
            this.profil.faculty = 'Pilih Fakultas'
          }
          else{
            this.profil.faculty = res.data.user.faculty  
          }
          if(res.data.user.departement == null || res.data.user.departement == ''){
            this.profil.departement = 'Pilih Jurusan'
          }
          else{
            this.profil.departement = res.data.user.departement  
          }
          if(res.data.user.gender == null || res.data.user.gender == ''){
            this.profil.gender = ''
          }
          else{
            this.profil.gender = res.data.user.gender  
          }
        }).catch ((err) => {
          console.log(err);
        })
      },
      uploadFile() {
        this.profil.photo = this.$refs.file.files[0];
        // let formData = new FormData();
        // formData.append('photo', this.profil.photo);
        // formData.append('address', this.profil.address);
        // formData.append('birth_date', this.profil.birth_date);
        // formData.append('birth_place', this.profil.birth_place);
        // formData.append('departement', this.profil.departement);
        // formData.append('diploma_number', this.profil.diploma_number);
        // formData.append('email', this.profil.email);
        // formData.append('entry_year', this.profil.entry_year);
        // formData.append('faculty', this.profil.faculty);
        // formData.append('gpa', this.profil.gpa);
        // formData.append('graduate_year', this.profil.graduate_year);
        // formData.append('name', this.profil.name);
        // formData.append('nik', this.profil.nik);
        // formData.append('phone_number', this.profil.phone_number);
        // formData.append('social_media', this.profil.social_media);
        console.log(this.profil.photo);
        // const url = process.env.VUE_APP_ROOT_API + 'profile/'+this.$route.params.id;
        // axios
        //   .put(url, formData, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data'
        //         }
        //     })
        //   .then(function (response) {
        //     console.log(response)
        //     alert(response.data.messege)
        //   })
        //   .catch((error) => alert(error));
      },
      submit(){
        let formData = new FormData();
        formData.append('photo', this.profil.photo);
        formData.append('address', this.profil.address);
        formData.append('birth_date', this.profil.birth_date);
        formData.append('birth_place', this.profil.birth_place);
        formData.append('departement', this.profil.departement);
        formData.append('diploma_number', this.profil.diploma_number);
        formData.append('email', this.profil.email);
        formData.append('entry_year', this.profil.entry_year);
        formData.append('faculty', this.profil.faculty);
        formData.append('gpa', this.profil.gpa);
        formData.append('graduate_year', this.profil.graduate_year);
        formData.append('name', this.profil.name);
        formData.append('nik', this.profil.nik);
        formData.append('phone_number', this.profil.phone_number);
        formData.append('social_media', this.profil.social_media);
        console.log(this.profil.photo);
        const url = "http://api.alumni.eduraya.co.id/api/profile/"+this.$route.params.id;
        axios
          .put(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
          .then(function (response) {
            console.log(response)
            alert(response.data.messege)
          })
          .catch((error) => alert(error));
      }
        // this.$emit('save-profil', this.profil)
        // const url = "http://api.alumni.eduraya.co.id/api/profile/"+this.$route.params.id;
        // axios
        //   .put(url, this.profil)
        //   .then(function (response) {
        //     console.log(response)
        //     alert(response.data.messege)
        //   })
        //   .catch((error) => alert(error));
        // }
    }
  
};
</script>
