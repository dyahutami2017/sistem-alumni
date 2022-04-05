<!-- prettier-ignore -->
<template>
  <div class="card">
    <div class="card-body px-0 pb-2">
      <form v-on:submit.prevent="submit">
        <div class="row p-4">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Nama</label><br/>
              <input type="text" class="form-control" v-model="akun.nama">
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">NIK</label><br/>
              <input type="text" class="form-control" v-model="akun.nik" isrequired="true">
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Email</label><br/>
              <input type="email" class="form-control" v-model="akun.email" isrequired="true">
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="input-group input-group-outline mb-3">
              <label class="label col-12">Password</label><br/>
              <input type="password" class="form-control" v-model="akun.password" isrequired="true">
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6">
            <button type="submit" class="btn bg-gradient-warning w-100 my-4 mb-2">Update</button>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6">
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
import VmdButton from "@/components/VmdButton.vue";

export default {
  name: "form-card",
  components: {
    VmdButton
  },
  data() {
        return {
            akun:{
                nama: "",
                nik: "",
                email: "",
                password: "",
            }
        }
    },
    methods: {
      submit() {
        this.$emit("update-akun", this.akun);
        console.log(this.akun);
      },
    },
};
</script>
