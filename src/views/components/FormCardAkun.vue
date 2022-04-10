<!-- prettier-ignore -->
<template>
  <form v-on:submit.prevent="submit">
    <div class="row p-4">
      <div class="col-lg-6 col-md-12 col-sm-12">
        <div class="input-group input-group-outline mb-3">
          <label class="label col-12">Password Sekarang</label><br/>
          <input type="password" class="form-control" v-model="password.sekarang" isrequired="true">
        </div>
        <div class="input-group input-group-outline mb-3">
          <label class="label col-12">Password Baru</label><br/>
          <input type="password" class="form-control" v-model="password.baru" isrequired="true">
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
              color="warning"
              fullWidth
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
export default {
  name: "form-card",
  components: {
    VmdButton
  },
  data() {
        return {
            password:{
                sekarang: "",
                baru: "",
                konfirmasi: "",
            }
        }
    },
    methods: {
      submit() {
        this.$emit("update-akun", this.password);
        const url = "http://alumni.eduraya.co.id:9000/api/profile/"+this.$route.params.id;
        axios
          .put(url, this.password)
          .then(function (response) {
            console.log(response.message);
          })
          .catch((error) => console.log(error));
      },
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
