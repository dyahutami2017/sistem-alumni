<!--prettier-ignore-->
<template>
  <div class="py-4 container-fluid" style="min-height: 450px">
    <div class="row mb-4">
      <div class="col-lg-12 position-relative z-index-2">
        <div class="card">
          <div class="card-body">
            <!-- <a href="#" class="btn btn-primary" id="btnPrint" v-if="printShow" @click="print()"><i class="fa fa-print"></i> Print Kartu Alumni</a> -->
            <!-- <a href="#" class="btn btn-primary" id="btnPrint" v-else><i class="fa fa-print"></i> Print Kartu Alumni</a> -->
            <a href="#" class="btn btn-primary" id="btnDownload" v-if="printShow === 'ya'" @click="generate()"><i class="fa fa-print"></i> Print Kartu Alumni</a>
            <a href="#" class="btn btn-primary" id="btnDownload" v-else><i class="fa fa-print"></i> Print Kartu Alumni</a>
            <div id="print_kartu" ref="testHtml" style="font-size:18px;" hidden>
              <img src="../assets/img/KartuAlumni.png" alt="" id="img_card">
              <div class="top-first text-dark">
                <span style="display:inline-block;  width:80px; text-align:left"></span>{{kartu.name}}
              </div>
              <div class="top-second text-dark">
                <span style="display:inline-block;  width:80px; text-align:left"></span>{{kartu.nik}}
              </div>
              <div class="top-third text-dark">
                <span style="display:inline-block;  width:80px; text-align:left"></span>{{kartu.nim}}
              </div>
              <div class="top-fourth text-dark">
                <span style="display:inline-block;  width:80px; text-align:left"></span>{{kartu.birth_place}}, {{kartu.birth_date}}
              </div>
              <div class="top-fifth text-dark">
                <span style="display:inline-block;  width:80px; text-align:left"></span>{{kartu.faculty}}, {{kartu.departement}}
              </div>
              <div class="top-sixth text-dark">
                <span style="display:inline-block;  width:80px; text-align:left"></span>{{kartu.graduate_year}}
              </div>
              <div class="top-seventh text-dark">
                <span style="display:inline-block;  width:80px; text-align:left"></span>{{kartu.expired_date}}
              </div>
              <div class="top-eight">
                <vue3-barcode :value="val" :height="40" display-value="false"/>
              </div>
              <div class="qr_code">
                <QRCodeVue3
                  :value="val"
                  :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
                  :dotsOptions="{
                    type: 'rounded',
                    color: '#000',
                    gradient: {
                      type: 'linear',
                      rotation: 0,
                      colorStops: [
                        { offset: 0, color: '#000' },
                        { offset: 1, color: '#000' },
                      ],
                    },
                  }"
                />
              </div>
              <div class="photo">
                <img :src="kartu.photo" />
              </div>
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
import QRCodeVue3 from "qrcode-vue3";
import Vue3Barcode from 'vue3-barcode'
import { jsPDF } from "jspdf";
import VueHtml2pdf from "vue-html2pdf"

export default {
  name: "kartu-alumni",
  components: {
    QRCodeVue3,
    Vue3Barcode,
    VueHtml2pdf
  },
  data() {
    return {
      gagal: '',
      profil_lengkap: "tidak",
      survey_lengkap: "ya",
      printShow: '',
      role: "user",
      val: "",
      src: "",
      validate: "",
      kartu: {
        name: '',
        birth_place: '',
        birth_date: '',
        address: '',
        phone_number: '',
        email: '',
        entry_year: '',
        graduate_year: '',
        nik: '',
        nim: '',
        faculty: '',
        departement: '',
        photo: '',
        expired_date: '',
      }
    };
  },
  methods: {
    load(){
        axios.get(process.env.VUE_APP_ROOT_API + 'profile/'+ this.$route.params.id).then(res => {
        this.kartu.name = res.data.user.name 
        this.kartu.birth_place = res.data.user.birth_place 
        this.kartu.entry_year = res.data.user.entry_year 
        this.kartu.phone_number = res.data.user.phone_number 
        this.kartu.address = res.data.user.address 
        this.kartu.email = res.data.user.email
        this.kartu.nik = res.data.user.nik
        this.kartu.nim = res.data.user.nim
        this.kartu.faculty = res.data.user.faculty_name
        this.kartu.departement = res.data.user.departement_name
        this.kartu.photo = res.data.user.photo_url
        this.val = res.data.user.nik
        //tgl lahir
        const birth = res.data.user.birth_date
        const [year,month,date] = birth.split("-")
        const result_birth = [date,month,year].join("-")
        this.kartu.birth_date = result_birth
        //tahun lulus
        const graduate = res.data.user.graduate_year
        const [year_g,month_g,date_g] = graduate.split("-")
        const result_graduate = [date_g,month_g,year_g].join("-")
        this.kartu.graduate_year = result_graduate
        this.validate = res.data.user.validated
        if(this.validate != 1){
          this.swalNotValidate();
          this.printShow = 'tidak'
        }
        else{
          this.printShow = 'ya'
        }
        document.getElementById('btnPrint').disabled = true;
        console.log(res.data)
      }).catch ((err) => {
        console.log(err);
        this.$swal({
          title: 'Dilarang',
          text: 'Data anda tidak ada',
          icon: 'error',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'OK'
        })
      })
    },
    tracer(){
        axios.get(process.env.VUE_APP_ROOT_API + 'dashboard/'+ this.$route.params.id).then(res => {
        console.log(this.validate);
        if(res.data.profile_completed == 0){
          this.swalFailedProfile('Mohon Lengkapi Data Profile!')
        }
        else if(res.data.tracer_completed == 0){
          this.swalFailed('Mohon Lengkapi Data Tracer Study!')
        }
        else{
          const exp = res.data.expired_date
          const [year,month,date] = exp.split("-")
          const result = [date,month,year].join("-")
          this.kartu.expired_date = result
        }
      }).catch ((err) => {
        console.log(err);
      })
    },
    swalFailed(text){
      this.$swal({
        title: 'Oops Maaf',
        text: text,
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$router.push('/tracer_study/'+this.$route.params.id);
        }
      })
    },
    swalFailedProfile(text){
      this.$swal({
        title: 'Oops Maaf',
        text: text,
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
    },
    swalNotValidate(){
      this.$swal({
        title: 'Oops Maaf',
        text: "Data anda belum valid, mohon hubungi admin IKA UNS",
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK'
      })
    },
    generate(){
      axios({
          url: 'http://localhost:8000/api/card/1', //your url
          method: 'GET',
          responseType: 'blob', // important
      }).then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'Kartu Alumni.pdf'); //or any other extension
          document.body.appendChild(link);
          link.click();
      });
    },
    print(){
      var contents = $("#print_kartu").html();
      var frame1 = $('<iframe />');
      frame1[0].name = "frame1";
      frame1.css({ "position": "absolute", "top": "-1000000px" });
      $("body").append(frame1);
      var frameDoc = frame1[0].contentWindow ? frame1[0].contentWindow : frame1[0].contentDocument.document ? frame1[0].contentDocument.document : frame1[0].contentDocument;
      frameDoc.document.open();
      //Create a new HTML document.
      frameDoc.document.write('<html><head><title></title>');
      frameDoc.document.write("<style>  #img_card{ width:80% } #print_kartu { position: relative; text-align: center; color: white;}");
      frameDoc.document.write(".top-first { position: absolute; top: 142px; left: 80px; text-align: center; font-size:12px }");
      frameDoc.document.write(".top-second { position: absolute; top: 163px; left: 80px; text-align: center; font-size:12px }");
      frameDoc.document.write(".top-third { position: absolute; top: 181px; left: 80px; text-align: center; font-size:12px }");
      frameDoc.document.write(".top-fourth { position: absolute; top: 201px; left: 80px; text-align: center; font-size:12px }");
      frameDoc.document.write(".top-fifth { position: absolute; top: 221px; left: 80px; text-align: center; font-size:12px }");
      frameDoc.document.write(".top-sixth { position: absolute; top: 241px; left: 80px; text-align: center; font-size:12px }");
      frameDoc.document.write(".top-seventh { position: absolute; top: 276px; left: 80px; text-align: center; font-size:12px }");
      frameDoc.document.write(".top-eight { position: absolute; top: 311px; left: 25px; text-align: center; font-size:12px }");
      frameDoc.document.write(".qr_code { position: absolute; top: 43%; left: 185px; text-align: center;}");
      frameDoc.document.write(".qr_code img { width:220px; height:220px }");
      frameDoc.document.write(".photo { position: absolute; top: 144px; right: 172px; text-align: center;}");
      frameDoc.document.write(".photo img { width:170px; height:200px}");
      frameDoc.document.write("</style>");
      frameDoc.document.write('</head><body>');
      //Append the external CSS file.
      //frameDoc.document.write('<link href="js/bootstrap.switch/bootstrap-switch.css" />');
      //Append the DIV contents.
      frameDoc.document.write(contents);
      frameDoc.document.write('</body></html>');
      frameDoc.document.close();
      setTimeout(function () {
        window.frames["frame1"].focus();
        window.frames["frame1"].print();
        frame1.remove();
      }, 500);
    }
  },
  beforeMount(){
    this.load();
    this.tracer();
  },
  mounted: function () {
    // $("#btnDownload").click(function() {  
    //   var doc = new jsPDF("p", "mm", "a4");

    //   doc.html(document.getElementById("print_kartu").innerHTML, {
    //     callback: function (doc) {
    //       doc.save();
    //     },
    //     'width': 170,
    //   });
    // })
  },
};
</script>

