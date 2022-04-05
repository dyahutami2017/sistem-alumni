<!-- prettier-ignore -->
<template>
     <form role="form text-left" v-on:submit.prevent="submit">
        <div class="input-group input-group-outline my-3">
            <label class="form-label">Nama</label>
            <input type="text" class="form-control" v-model="user.nama">
        </div>
        <div class="input-group input-group-outline mb-4">
            <select class="form-control" v-model="user.jenis_pengguna">
                <option value="">Pilih Pengguna</option>
                <option value="Admin">Admin</option>
            </select>
        </div>
        <div class="input-group input-group-outline my-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" v-model="user.email">
        </div>
        <div class="input-group input-group-outline my-3">
            <label class="form-label">NIK</label>
            <input type="text" class="form-control" v-model="user.nik">
        </div>
        <div class="input-group input-group-outline my-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" v-model="user.password">
        </div>
        <button type="submit" class="btn bg-gradient-primary">Save changes</button>
    </form>
</template>
<script>
import setMaterialInput from "@/assets/js/material-input.js";
export default {
  name: "form-user",
  components: {},
  data() {
    return {
      user: {
        nama: "",
        jenis_pengguna: "",
        email: "",
        nik: "",
        password: "",
      },
    };
  },
  methods: {
    submit() {
      this.$emit("add-user", this.user);
      this.user = {
        nama: "",
        jenis_pengguna: "",
        email: "",
        nik: "",
        password: "",
      };
      console.log("ok");
    },
  },
  mounted() {
    setMaterialInput();
  },
};
</script>
