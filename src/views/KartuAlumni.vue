<!--prettier-ignore-->
<template>
  <div class="py-4 container-fluid" style="min-height: 450px">
    <div class="row mb-4">
      <div class="col-lg-12 position-relative z-index-2">
        <div class="card">
          <div class="card-body">
            <a href="#" class="btn btn-primary" id="btnPrint"><i class="fa fa-print"></i></a>
            <div id="print_kartu" style="font-size:18px;">
              <img src="../assets/img/E-Kartu.png" alt="" style="width:80%">
              <div class="top-first text-info">
                <span style="display:inline-block;  width:80px; text-align:left"></span>{{kartu.name}}
              </div>
              <div class="top-second text-info">
                <span style="display:inline-block;  width:80px; text-align:left"></span>{{kartu.nik}}
              </div>
              <div class="top-third text-info">
                <span style="display:inline-block;  width:80px; text-align:left"></span>{{kartu.nim}}
              </div>
              <div class="top-fourth text-info">
                <span style="display:inline-block;  width:80px; text-align:left"></span>{{kartu.birth_place}}, {{kartu.birth_date}}
              </div>
              <div class="top-fifth text-info">
                <span style="display:inline-block;  width:80px; text-align:left"></span>{{kartu.faculty}}, {{kartu.departement}} -  S1
              </div>
              <div class="top-sixth text-info">
                <span style="display:inline-block;  width:80px; text-align:left"></span>{{kartu.graduate_year}}
              </div>
              <div class="top-seventh text-info">
                <span style="display:inline-block;  width:80px; text-align:left"></span>12 September 2022
              </div>
              <div class="qr_code">
                <QRCodeVue3
                  :value="val"
                  :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
                  :dotsOptions="{
                    type: 'rounded',
                    color: '#403DFF',
                    gradient: {
                      type: 'linear',
                      rotation: 0,
                      colorStops: [
                        { offset: 0, color: '#403DFF' },
                        { offset: 1, color: '#403DFF' },
                      ],
                    },
                  }"
                />
              </div>
              <div class="photo">
                <img src="/img/ava.1b72e298.jpg" />
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

export default {
  name: "kartu-alumni",
  components: {
    QRCodeVue3,
  },
  data() {
    return {
      profil_lengkap: "tidak",
      survey_lengkap: "ya",
      role: "user",
      val: "",
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
      }
    };
  },
  methods: {
    load(){
          axios.get('http://alumni.eduraya.co.id:9000/api/profile/'+ this.$route.params.id).then(res => {
          this.kartu.name = res.data.user.name 
          this.kartu.birth_place = res.data.user.birth_place 
          this.kartu.birth_date =  res.data.user.birth_date
          this.kartu.entry_year = res.data.user.entry_year 
          this.kartu.graduate_year = res.data.user.graduate_year 
          this.kartu.phone_number = res.data.user.phone_number 
          this.kartu.address = res.data.user.address 
          this.kartu.email = res.data.user.email
          this.kartu.nik = res.data.user.nik
          this.kartu.nim = res.data.user.nim
          this.kartu.faculty = res.data.user.faculty
          this.kartu.departement = res.data.user.departement
          this.val = res.data.user.nik
          console.log(res.data)
        }).catch ((err) => {
          console.log(err);
        })
      },
  },
  mounted: function () {
    this.load();
    $("#btnPrint").click(function() {
      var contents = $("#print_kartu").html();
				var frame1 = $('<iframe />');
				frame1[0].name = "frame1";
				frame1.css({ "position": "absolute", "top": "-1000000px" });
				$("body").append(frame1);
				var frameDoc = frame1[0].contentWindow ? frame1[0].contentWindow : frame1[0].contentDocument.document ? frame1[0].contentDocument.document : frame1[0].contentDocument;
				frameDoc.document.open();
				//Create a new HTML document.
				frameDoc.document.write('<html><head><title></title>');
        frameDoc.document.write("<style> #print_kartu { position: relative; text-align: center; color: white;}");
        frameDoc.document.write(".top-first { position: absolute; top: 14%; left: 80px; text-align: center; font-size:12px }");
        frameDoc.document.write(".top-second { position: absolute; top: 16%; left: 80px; text-align: center; font-size:12px }");
        frameDoc.document.write(".top-third { position: absolute; top: 18%; left: 80px; text-align: center; font-size:12px }");
        frameDoc.document.write(".top-fourth { position: absolute; top: 20%; left: 80px; text-align: center; font-size:12px }");
        frameDoc.document.write(".top-fifth { position: absolute; top: 22%; left: 80px; text-align: center; font-size:12px }");
        frameDoc.document.write(".top-sixth { position: absolute; top: 24%; left: 80px; text-align: center; font-size:12px }");
        frameDoc.document.write(".top-seventh { position: absolute; top: 28%; left: 80px; text-align: center; font-size:12px }");
        frameDoc.document.write(".qr_code { position: absolute; top: 43%; left: 180px; text-align: center;}");
        frameDoc.document.write(".qr_code img { width:220px; height:220px }");
        frameDoc.document.write(".photo { position: absolute; top: 150px; right: 170px; text-align: center;}");
        frameDoc.document.write(".photo img { width:160px;}");
        frameDoc.document.write(".text-info { color:#403DFF;}");
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
    })
    
  },
};
</script>
<style>
@media print {
  #print_kartu {
    position: relative;
    text-align: center;
    color: white;
  }

  .top-first {
    position: absolute;
    top: 18%;
    left: 210px;
    text-align: center;
  }
  .top-second {
    position: absolute;
    top: 21%;
    left: 210px;
    text-align: center;
  }
  .top-third {
    position: absolute;
    top: 24%;
    left: 210px;
    text-align: center;
  }
  .top-fourth {
    position: absolute;
    top: 27%;
    left: 210px;
    text-align: center;
  }
  .top-fifth {
    position: absolute;
    top: 30%;
    left: 210px;
    text-align: center;
  }
  .top-sixth {
    position: absolute;
    top: 33%;
    left: 210px;
    text-align: center;
  }
  .top-seventh {
    position: absolute;
    top: 38%;
    left: 210px;
    text-align: center;
  }
}
 #print_kartu {
    position: relative;
    text-align: center;
    color: white;
  }

  .top-first {
    position: absolute;
    top: 180px;
    left: 210px;
    text-align: center;
  }
  .top-second {
    position: absolute;
    top: 203px;
    left: 210px;
    text-align: center;
  }
  .top-third {
    position: absolute;
    top: 230px;
    left: 210px;
    text-align: center;
  }
  .top-fourth {
    position: absolute;
    top: 256px;
    left: 210px;
    text-align: center;
  }
  .top-fifth {
    position: absolute;
    top: 282px;
    left: 210px;
    text-align: center;
  }
  .top-sixth {
    position: absolute;
    top: 307px;
    left: 210px;
    text-align: center;
  }
  .top-seventh {
    position: absolute;
    top: 358px;
    left: 210px;
    text-align: center;
  }
  .qr_code {
    position: absolute;
    top: 540px;
    left: 341px;
    text-align: center;
  }

  .qr_code img{
    width:300px; 
    height:300px
  }
  .photo {
    position: absolute;
    top: 17%;
    right: 275px;
    width: 80px;
    text-align: center;
  }
  .photo img{
    width: 230px;
  }
</style>
