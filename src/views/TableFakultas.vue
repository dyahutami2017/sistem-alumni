<template>
  <div class="container-fluid py-4" style="min-height: 450px">
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div
              class="bg-gradient-info shadow-light border-radius-lg pt-3 pb-3"
            >
              <h6 class="text-white text-capitalize ps-3">
                Data Fakultas
                <a
                  href="#"
                  class="badge badge-sm bg-gradient-light text-dark mb-1"
                  target=""
                  data-bs-toggle="modal"
                  data-bs-target="#tambahFaculty"
                  @click="showModal"
                >
                  <i class="fa fa-plus"></i>Tambah</a
                >
                <!-- <input
                  class="btn btn-primary btn-sm mb-1"
                  target=""
                  style="float: right; margin-right: 10px"
                  type="file"
                  @change="previewFiles"
                /> -->
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
                      style="width:20%"
                    >
                      Kode Fakultas
                    </th>
                    <th
                      class="text-left text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 p-0"
                    >
                      Nama Fakultas
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                      style="width:10%"
                    >
                      Act
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="faculty in faculties" :key="faculty.id">
                    <td class="align-middle text-center text-sm">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ faculty.code }}
                      </p>
                    </td>
                    <td class="align-middle text-left text-sm">
                      <p class="text-xs font-weight-bold mb-0">
                        {{ faculty.faculty_name }}
                      </p>
                    </td>
                    <td class="align-center d-flex justify-content-sm-around">
                      <a
                        href="#"
                        class="badge bg-gradient-info"
                        data-toggle="tooltip"
                        data-original-title="Edit Fakultas"
                        data-bs-toggle="modal"
                        data-bs-target="#tambahFaculty"
                        id=""
                        v-on:click="edit(faculty)"
                      >
                        <i class="fa fa-pencil"></i>
                      </a>
                       <a
                        href="#"
                        class="badge bg-gradient-danger "
                        data-toggle="tooltip"
                        data-original-title="Hapus Fakultas"
                        v-on:click="deleteFaculty(faculty.id)"
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
    <div class="modal fade" id="tambahFaculty" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title font-weight-normal" id="exampleModalLabel">Fakultas</h5>
            <button type="button" class="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
             <form role="form" class="text-start mt-3" @submit.prevent="add" v-on:add-faculty="addFaculty">
                <div class="mb-3">
                  <div class="input-group input-group-outline my-3">
                      <label class="form-label">Kode Fakultas</label>
                      <input type="text" class="form-control" name="kode" v-model="form.code">
                      <input type="hidden" class="form-control" name="id_f" v-model="form.id">
                  </div>
                </div>
                <div class="mb-3">
                  <div class="input-group input-group-outline my-3">
                      <label class="form-label">Nama Fakultas</label>
                      <input type="text" class="form-control" name="fakultas" v-model="form.faculty_name">
                  </div>
                </div>
                <button type="submit" class="btn bg-gradient-primary" v-show="!updateSubmit">Save changes</button>
                <button type="button" class="btn bg-gradient-primary" v-show="updateSubmit" @click="update(form)">Update changes</button>
              </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import setMaterialInput from "@/assets/js/material-input.js";
import Select2 from 'vue3-select2-component';
import VmdButton from "@/components/VmdButton.vue";
import VmdInput from "@/components/VmdInput.vue";
import FormUser from "./components/FormUser.vue";
import $ from "jquery";
import axios from "axios";

var XLSX = require("xlsx");
export default {
  name: "table-fakultas",
  components: {
    Select2,
    VmdButton,
    VmdInput,
    FormUser,
  },
  data() {
        return {
            faculties:[],
            form: {
              id: "",
              code: "",
              faculty_name: "",
            },
            updateSubmit: false,
          }
    },
    methods: {
      load(){
          axios.get(process.env.VUE_APP_ROOT_API + 'faculty').then(res => {
            console.log(res.data.faculty)
            this.faculties = res.data.faculty
        }).catch ((err) => {
          console.log(err);
        })
      },
      add(){
        const url = process.env.VUE_APP_ROOT_API + 'faculty';
        axios
          .post(url, this.form)
          .then(response => {
            console.log(response)
            this.swalAlert(response.data.messege,'Sukses','success')
            this.form.code = ''
            this.form.faculty_name = ''
            this.load()
          })
          .catch(error => {
            console.log(error.response)
            var obj = JSON.stringify(error.response.data)
            var dt = JSON.parse(obj);
            if(dt.code != undefined){
              this.swalAlert(dt.code, 'Gagal', 'error');
            }
            else if(dt.faculty_name != undefined){
              this.swalAlert(dt.faculty_name, 'Gagal', 'error');
            }
          })
      },
      addUser(form) {
        this.faculties.push(form);
      },
      edit(faculty){ 
        $(".input-group-outline").addClass('is-focused')
        this.updateSubmit = true
        this.form.id = faculty.id 
        this.form.code = faculty.code 
        this.form.faculty_name = faculty.faculty_name 
      },
      update(form){ 
        return axios.put(process.env.VUE_APP_ROOT_API + 'faculty/' + form.id , this.form).then(response => {
          this.load()
          this.updateSubmit = false
          this.swalAlert(response.data.messege,'Sukses','success')
        }).catch((err) => {
          console.log(err);
          
        })
      },
      deleteFaculty(id){
        axios.delete(process.env.VUE_APP_ROOT_API + 'faculty/' + id).then(response =>{
            this.load()
            let index = this.faculty.indexOf(form.code)
            this.faculties.splice(index,1)
            this.swalAlert(response.data.messege,'Sukses','success')
        }).catch(error => {
            console.log(error)
          })
      },
      showModal(){
        this.form.id = "",
        this.form.code = "",
        this.form.faculty_name = "",
        this.updateSubmit = false
      },
      previewFiles(e) {
          var input = e.target;
          var reader = new FileReader();
          reader.onload = () => {
            var fileData = reader.result;
            var wb = XLSX.read(fileData, {type : 'binary'});
            wb.SheetNames.forEach((sheetName) => {
              var rowObj =XLSX.utils.sheet_to_json(wb.Sheets[sheetName]);	        
              // this.excelData = JSON.stringify(rowObj)
              console.log(JSON.stringify(rowObj))
            })
          };
          reader.readAsBinaryString(input.files[0]);
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
      setMaterialInput();
      this.load();
  },
};
</script>
