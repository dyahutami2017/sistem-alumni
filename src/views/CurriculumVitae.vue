<!--prettier-ignore-->
<template>
  <div class="py-4 container-fluid" style="min-height: 450px">
    <div class="row mb-4">
      <div class="col-lg-12 position-relative z-index-2">
        <div class="card">
          <div class="card-body">
            <a href="#" class="btn btn-primary" id="btnPrint"><i class="fa fa-print"></i></a>
            <div id="print_cv">
              <h1 align=center>CURRICULUM VITAE</h1>
              <hr>
              <b>PERSONAL INFORMATION</b>
              <hr>
              <table style="width:50%">
                  <img src="../assets/img/ava.jpg" align="right" width="124" height="142" style="position:absolute; right:10%">
                <tr>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                    <td>Nama Lengkap</td>
                    <td>: {{cv.name}} </td>
                    <td></td>
                </tr>
                <tr>
                    <td>Tempat Tanggal Lahir</td>
                    <td>: {{cv.birth_place}}, {{cv.birth_date}} </td>  
                </tr>
                    <td>Alamat</td>
                    <td>: {{cv.address}}</td>
                <tr>
                    <td>NO HP</td>
                    <td>: {{cv.phone_number}}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>: {{cv.email}}</td>
                </tr>
              </table>
              <hr>
              <b>PENDIDIKAN FORMAL</b>
              <hr>
              <table style="width:80%">
                <tr>
                <th></th>
                <th></th>
                </tr>
                <tr>
                    <td>{{cv.entry_year}} - {{cv.graduate_year}}</td>
                    <td>Universitas Negeri Surakarta</td>
                </tr>
              </table>            
              <hr>
              <!-- <b>KEAHLIAN</b><hr>
                        Mengoperasikan Komputer : Microsoft Office<br> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import $ from "jquery";
import axios from "axios";
export default {
  name: "curriculum-vitae",
  components: {},
  data() {
    return {
      profil_lengkap: "tidak",
      survey_lengkap: "ya",
      role: "user",
      cv: {
        name: '',
        birth_place: '',
        birth_date: '',
        address: '',
        phone_number: '',
        email: '',
        entry_year: '',
        graduate_year: '',
      }
    };
  },
  methods: {
    load(){
          axios.get('http://alumni.eduraya.co.id:9000/api/profile/'+ this.$route.params.id).then(res => {
          this.cv.name = res.data.user.name 
          this.cv.birth_place = res.data.user.birth_place 
          this.cv.birth_date = res.data.user.birth_date 
          this.cv.entry_year = res.data.user.entry_year 
          this.cv.graduate_year = res.data.user.graduate_year 
          this.cv.phone_number = res.data.user.phone_number 
          this.cv.address = res.data.user.address 
          this.cv.email = res.data.user.email
          console.log(res.data)
        }).catch ((err) => {
          console.log(err);
        })
      },
  },
  mounted: function () {
    this.load();
    $("#btnPrint").click(function() {
      var divContents = document.getElementById("print_cv").innerHTML;
      var a = window.open("", "", "height=1000, width=1000");
      a.document.write("<html>");
      a.document.write("<body >");
      a.document.write(divContents);
      a.document.write("</body></html>");
      a.document.close();
      a.print();
    })
    
  },
};
</script>
