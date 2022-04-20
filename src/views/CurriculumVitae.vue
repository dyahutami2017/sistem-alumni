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
              <table style="width:50%; height:150px">
                  <img :src="cv.photo" align="right" style="position:absolute; right:10%; height: 142px; width: 142px;">
                <tr>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>: {{cv.name}} </td>
                    <td></td>
                </tr>
                <tr>
                    <td>Birth Place, Birth Date</td>
                    <td>: {{cv.birth_place}}, {{cv.birth_date}} </td>  
                </tr>
                    <td>Address</td>
                    <td>: {{cv.address}}</td>
                <tr>
                    <td>Phone Number</td>
                    <td>: {{cv.phone_number}}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>: {{cv.email}}</td>
                </tr>
              </table>
              <hr>
              <b>EDUCATION</b>
              <hr>
              <table style="width:80%">
                <tr>
                <th></th>
                <th></th>
                </tr>
                <tr>
                    <td>{{cv.entry_year}} - {{cv.graduate_year}}</td>
                    <td>Universitas Sebelas Maret</td>
                </tr>
              </table>            
              <hr>
              <b>ORGANIZATION</b>
              <hr>
              <table style="width:80%">
                <tr>
                <th></th>
                <th></th>
                </tr>
                <tr>
                    <td>{{cv.organization}}</td>
                </tr>
              </table>  
              <hr>
              <b>ACHIEVEMENTS</b>
              <hr>
              <table style="width:80%">
                <tr>
                <th></th>
                <th></th>
                </tr>
                <tr>
                    <td>{{cv.achievement}}</td>
                </tr>
              </table>  
              <!-- <b>Organisasi</b><hr>
                        {{cv.organization}}<br> -->
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
      src: "",
      cv: {
        name: '',
        birth_place: '',
        birth_date: '',
        address: '',
        phone_number: '',
        email: '',
        entry_year: '',
        graduate_year: '',
        organization: '',
        achievement: '',
        photo: '',
      }
    };
  },
  methods: {
    load(){
          axios.get('http://api.alumni.eduraya.co.id/api/profile/'+ this.$route.params.id).then(res => {
          this.cv.name = res.data.user.name 
          this.cv.birth_place = res.data.user.birth_place 
          this.cv.birth_date = res.data.user.birth_date 
          this.cv.entry_year = res.data.user.entry_year 
          this.cv.graduate_year = res.data.user.graduate_year 
          this.cv.phone_number = res.data.user.phone_number 
          this.cv.address = res.data.user.address 
          this.cv.email = res.data.user.email
          this.cv.organization = res.data.user.organization
          this.cv.achievement = res.data.user.achievement
          this.cv.photo = res.data.user.photo_url
          console.log(res.data)
        }).catch ((err) => {
          console.log(err);
        })
      },
      checkProfile(){
        axios.get('http://api.alumni.eduraya.co.id/api/dashboard/'+ this.$route.params.id).then(res => {
        console.log(res.data);
        if(res.data.profile_completed == 0){
          this.$swal({
            title: 'Oops Maaf',
            text: "Mohon Lengkapi Data Profil!",
            icon: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              this.$router.push('/form_profile/'+this.$route.params.id);
            }
          })
        }
      }).catch ((err) => {
        console.log(err);
        this.$swal({
            title: 'Oops Maaf',
            text: "Terdapat Masalah Pada Jaringan!",
            icon: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
          })
      })
    },
  },
  mounted: function () {
    this.load();
    this.checkProfile();
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
