<!-- prettier-ignore -->
<template>
  <div class="card">
    <div class="card-body px-0 pb-2">
      <form v-on:submit.prevent="submit">
        <div class="row p-4">
          <div class="col-4 mb-3">
            <img style="width:300px;" src="https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80">
          </div>
          <div class="col-8 mb-3">
            <h6>Richard Davis</h6>
            <h6>alecthompson@mail.com</h6>
            <ul>
              <li>Sudah Terverfikasi</li>
              <li>Data sudah Lengkap</li>
            </ul>
          </div>
          <div class="col-4">
            <div class="input-group input-group-outline mb-3">
              <label class="col-12">Nama Lengkap</label><br/>
              <input type="text" class="form-control" v-model="profil.nama" name="nama" isrequired="true">
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
              <input type="text" class="form-control" v-model="profil.tempat_lahir" name="tempat_lahir" isrequired="true">
            </div>
          </div>
          <div class="col-4">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Tanggal Lahir</label><br/>
              <input type="date" class="form-control" v-model="profil.tanggal_lahir" name="tanggal_lahir" isrequired="true">
            </div>
          </div>
          <div class="col-4">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Tahun Masuk</label><br/>
              <input type="text" class="form-control" v-model="profil.tahun_masuk" name="tahun_masuk" isrequired="true">
            </div>
          </div>
          <div class="col-4">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Tahun Lulus</label><br/>
              <input type="text" class="form-control" v-model="profil.tahun_lulus" name="tahun_lulus" isrequired="true">
            </div>
          </div>
          <div class="col-4">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Fakultas</label><br/>
              <div class="col-12">
                  <Select2 v-model="myValue" :options="myOptions" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Jurusan</label><br/>
              <div class="col-12">
                  <Select2 v-model="myValue2" :options="myOptions2" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">No.Hp</label><br/>
              <input type="text" class="form-control" v-model="profil.no_hp" name="no_hp" isrequired="true">
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
              <label class="label col-12">Provinsi</label><br/>
              <div class="col-12">
                  <Select2 v-model="myValue3" :options="myOptions3" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Alamat Tinggal</label><br/>
              <input type="text" class="form-control" v-model="profil.alamat" name="alamat" isrequired="true">
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
import axios from "axios"

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
            myValue3: 'Pilih Provinsi',
            myOptions: ['Pilih Fakultas','Teknik', 'Bahasa dan Seni', 'MIPA', 'Ekonomi', 'Ilmu Sosial'],
            myOptions2: ['Pilih Jurusan','Teknik Informatika', 'Teknik Mesin', 'Seni Rupa', 'Ekonomi Bisnis', 'Pendidikan Ilmu Sosial'],
            myOptions3: ['Pilih Provinsi','Aceh', 'Bandung', 'Jakarta', 'DI Yogyakarta', 'Jawa Tengah'], // or [{id: key, text: value}, {id: key, text: value}]
            //optionFakultas: [],
            profil:{
                nama:'',
                gelar_depan:'',
                gelar_belakang:'',
                nim:'',
                nik:'',
                tempat_lahir:'',
                tanggal_lahir:'',
                tahun_masuk:'',
                tahun_lulus:'',
                no_hp:'',
                alamat:'',
            }
        }
    },
    methods: {
        // getFakultas(e) {
        //   axios.get("url").then(({data}) => {
        //     this.optionFakultas = data
        //   }).catch(err => {
        //     console.log(err)
        //   })
        //     console.log(e)
        // },
        myChangeEvent(val){
            console.log(val);
        },
        mySelectEvent({id, text}){
            console.log({id, text})
        },
        submit(){
            this.$emit('save-profil', this.profil)
            this.profil = {
                nama:'',
                gelar_depan:'',
                gelar_belakang:'',
                nim:'',
                nik:'',
                tempat_lahir:'',
                tanggal_lahir:'',
                tahun_masuk:'',
                tahun_lulus:'',
                no_hp:'',
                alamat:'',
            }
            console.log('ok')
        }
    }
  
};
</script>
