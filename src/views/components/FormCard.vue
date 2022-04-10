<!-- prettier-ignore -->
<template>
  <div class="card">
    <div class="card-body px-0 pb-2">
      <form v-on:submit.prevent="submit">
        <div class="row p-4">
          <div class="col-2 mb-3">
            <img src="/img/ava.1b72e298.jpg" style="width:100%">
          </div>
          <div class="col-8 mb-3">
            <h6>{{profil.name}}</h6>
            <h6>{{profil.email}}</h6>
            <!-- <ul>
              <li>Sudah Terverfikasi</li>
              <li>Data sudah Lengkap</li>
            </ul> -->
          </div>
          <div class="col-4">
            <div class="input-group input-group-outline mb-3">
              <label class="col-12">Nama Lengkap</label><br/>
              <input type="text" class="form-control" v-model="profil.name" name="name" isrequired="true">
            </div>
          </div>
          <div class="col-4">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Gelar Depan</label><br/>
              <input type="text" class="form-control" v-model="profil.gelar_depan" name="gelar_depan" isrequired="true">
            </div>
          </div>
          <div class="col-4">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Gelar Belakang</label><br/>
              <input type="text" class="form-control" v-model="profil.gelar_belakang" name="gelar_belakang" isrequired="true">
            </div>
          </div>
          <div class="col-4">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">NIM</label><br/>
              <input type="text" class="form-control" v-model="profil.nim" name="nim" isrequired="true">
            </div>
          </div>
          <div class="col-4">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">NIK</label><br/>
              <input type="text" class="form-control" v-model="profil.nik" name="nik" isrequired="true">
            </div>
          </div>
          <div class="col-4">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Tempat Lahir</label><br/>
              <input type="text" class="form-control" v-model="profil.birth_place" name="birth_place" isrequired="true">
            </div>
          </div>
          <div class="col-4">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Tanggal Lahir</label><br/>
              <input type="date" class="form-control" v-model="profil.birth_date" name="birth_date" isrequired="true">
            </div>
          </div>
          <div class="col-4">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Tahun Masuk</label><br/>
              <input type="text" class="form-control" v-model="profil.entry_year" name="entry_year" isrequired="true">
            </div>
          </div>
          <div class="col-4">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Tahun Lulus</label><br/>
              <input type="text" class="form-control" v-model="profil.graduate_year" name="graduate_year" isrequired="true">
            </div>
          </div>
          <div class="col-4">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Fakultas</label><br/>
              <div class="col-12">
                  <Select2 v-model="profil.faculty" :options="myOptions" />
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Jurusan</label><br/>
              <div class="col-12">
                  <Select2 v-model="profil.departement" :options="myOptions2" />
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">No.Hp</label><br/>
              <input type="text" class="form-control" v-model="profil.phone_number" name="phone_number" isrequired="true">
            </div>
          </div>
          <div class="col-4">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Email</label><br/>
              <input type="email" class="form-control" v-model="profil.email" name="email" isrequired="true">
            </div>
          </div>
          <div class="col-4">
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
          <div class="col-4">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Alamat Tinggal</label><br/>
              <input type="text" class="form-control" v-model="profil.address" name="address" isrequired="true">
            </div>
          </div>
          <div class="col-4">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Foto</label><br/>
              <input type="file" class="form-control" name="foto" isrequired="true">
            </div>
          </div>
          <div class="col-4">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">KTP</label><br/>
              <input type="file" class="form-control" name="ktp" isrequired="true">
            </div>
          </div>
          <div class="col-4">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Ijazah</label><br/>
              <input type="file" class="form-control" name="ijazah" isrequired="true">
            </div>
          </div>
          <div class="col-8"></div>
          <div class="col-2">
            <vmd-button
                class="my-4 mb-2"
                variant="gradient"
                color="warning"
                fullWidth
                >Simpan
              </vmd-button>
          </div>
          <div class="col-2">
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
            myValue: 'Pilih Fakultas',
            myValue2: 'Pilih Jurusan',
            // myValue3: 'Pilih Provinsi',
            myOptions: ['Pilih Fakultas','Teknik', 'Bahasa dan Seni', 'MIPA', 'Ekonomi', 'Ilmu Sosial'],
            myOptions2: ['Pilih Jurusan','Teknik Informatika', 'Teknik Mesin', 'Seni Rupa', 'Ekonomi Bisnis', 'Pendidikan Ilmu Sosial'],
            // myOptions3: ['Pilih Provinsi','Aceh', 'Bandung', 'Jakarta', 'DI Yogyakarta', 'Jawa Tengah'], // or [{id: key, text: value}, {id: key, text: value}]
            //optionFakultas: [],
            profil:{
                name:'',
                gelar_depan:'',
                gelar_belakang:'',
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
            }
        }
    },
    mounted() {
      this.load();
    },
    methods: {
      load(){
          axios.get('http://alumni.eduraya.co.id:9000/api/profile/'+ this.$route.params.id).then(res => {
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
      submit(){
        this.$emit('save-profil', this.profil)
        const url = "http://alumni.eduraya.co.id:9000/api/profile/"+this.$route.params.id;
        axios
          .put(url, this.profil)
          .then(function (response) {
            console.log(response)
            alert(response.data.messege)
          })
          .catch((error) => alert(error));
        }
    }
  
};
</script>
