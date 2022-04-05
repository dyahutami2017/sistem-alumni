<template>
  <div class="container-fluid py-4" style="min-height: 450px">
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div
              class="bg-gradient-warning shadow-light border-radius-lg pt-3 pb-3"
            >
              <h6 class="text-white text-capitalize ps-3">
                Data User
                <a
                  href="#"
                  class="badge badge-sm bg-gradient-light text-dark mb-1"
                  target=""
                  data-bs-toggle="modal"
                  data-bs-target="#tambahUser"
                >
                  <i class="fa fa-plus"></i>Tambah</a
                >
                <a
                  href="#"
                  class="btn btn-primary mb-1"
                  target=""
                  style="float: right; margin-right: 10px"
                >
                  <i class="fa fa-download"></i> Import</a
                >
              </h6>
            </div>
          </div>
          <div class="card-body px-0 pb-2">
            <!-- prettier-ignore -->
            <div class="table-responsive p-0">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Nama
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Role
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      NIK
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Email
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Act
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users" :key="user.id">
                    <td class="align-middle text-center text-sm">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ user.nama }}
                      </p>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ user.jenis_pengguna }}
                      </p>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ user.nik }}
                      </p>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">
                        {{ user.email }}
                      </span>
                    </td>
                    <td class="align-center d-flex justify-content-sm-around">
                      <a
                        href="#"
                        class="badge bg-gradient-info"
                        data-toggle="tooltip"
                        data-original-title="Edit User"
                        data-bs-toggle="modal"
                        data-bs-target="#tambahUser"
                        id=""
                      >
                        <i class="fa fa-pencil"></i>
                      </a>
                       <a
                        href="#"
                        class="badge bg-gradient-danger "
                        data-toggle="tooltip"
                        data-original-title="Hapus User"
                        v-on:click="deleteUser(user.id)"
                      >
                        <i class="fa fa-trash"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- prettier-ignore -->
    <div class="modal fade" id="tambahUser" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title font-weight-normal" id="exampleModalLabel">Tambah User</h5>
            <button type="button" class="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
             <form-user  v-on:add-user="addUser"/>
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
import VmdInput from "@/components/VmdInput.vue";
import FormUser from "./components/FormUser.vue";
import $ from "jquery";

export default {
  name: "table-user",
  components: {
    Select2,
    VmdButton,
    VmdInput,
    FormUser,
  },
  data() {
        return {
            users:[
              {
                id: "1",
                nama: "Super Admin",
                jenis_pengguna: "Super Admin",
                email: "superadmin@gmail",
                nik: "340413450999001",
                password: "19990909",
              },
              {
                id: "2",
                nama: "Admin 1",
                jenis_pengguna: "Admin",
                email: "admin1@gmail",
                nik: "340413450999001",
                password: "19990909",
              },
            ],
          }
    },
    methods: {
      addUser(user) {
        this.users.push(user);
      },
      deleteUser(id){
        this.users = this.users.filter(function(user){
          return user.id !== id;
        })
      }
    },
    mounted() {
  },
};
</script>
