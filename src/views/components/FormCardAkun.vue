<!-- prettier-ignore -->
<template>
  <form>
    <div class="row p-4">
      <div class="col-lg-6 col-md-12 col-sm-12">
        <div class="input-group input-group-outline mb-3">
          <label class="label col-12">Password Sekarang</label><br/>
          <input type="password" class="form-control" v-model="password.password" isrequired="true">
        </div>
        <div class="input-group input-group-outline mb-3">
          <label class="label col-12">Password Baru</label><br/>
          <input type="password" class="form-control" v-model="password.new_password" isrequired="true">
        </div>
        <div class="input-group input-group-outline mb-3">
          <label class="label col-12">Konfirmasi Password</label><br/>
          <input type="password" class="form-control" v-model="password.konfirmasi" isrequired="true">
        </div>
        <div class="row">
          <div class="col-6">
            <vmd-button
              class="my-4 mb-2"
              variant="gradient"
              color="info"
              fullWidth
              @click.prevent="submit()"
              >Ubah
            </vmd-button>
          </div>
          <div class="col-6">
            <vmd-button
              class="my-4 mb-2 btnBatal"
              variant="gradient"
              color="light"
              fullWidth
              >Batal
            </vmd-button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
/* eslint-disable */
import VmdButton from "@/components/VmdButton.vue";
import $ from "jquery";
import axios from "axios";
export default {
  name: "form-card",
  components: {
    VmdButton
  },
  data() {
        return {
          password:{
                id: this.$route.params.id,
                password: "",
                new_password: "",
                konfirmasi: "",
            }
        }
    },
    methods: {
      submit() {
        if(this.password.new_password != this.password.konfirmasi){
          this.swalFailed('Oops Maaf','Konfirmasi Password Anda Tidak Sama!','warning');
        }
        else{
          const url = "http://api.alumni.eduraya.co.id/api/change_password";
          axios
            .post(url, this.password)
            .then((response) => {
              this.swalFailed('Sukses', response.data.messege ,'success');
              console.log(response.data.messege);
            })
            .catch((error) => {
              console.log(error)
              var obj = JSON.stringify(error.response.data)
              var dt = JSON.parse(obj);
              if(dt.password != undefined){
                this.swalFailed('Gagal', dt.password,  'error');
              }
              else if(dt.new_password != undefined){
                this.swalFailed('Gagal',dt.new_password, 'error');
              }
              else{
                this.swalFailed('Gagal','Password Lama Anda Salah', 'error');
              }
            });
        }
      },
      swalFailed(title, text, icon){
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
      $(".btnBatal").click(function (e) {
        $(".formUpdate").hide();
        $(".data_akun").show();
        $(".btnEdit").show();
      })
    }
};
</script>
