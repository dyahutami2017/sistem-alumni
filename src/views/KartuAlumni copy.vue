<!--prettier-ignore-->
<template>
  <div class="py-4 container-fluid" style="min-height: 450px">
    <div class="row mb-4">
      <div class="col-lg-12 position-relative z-index-2">
        <div class="card">
          <div class="card-body">
            <a href="#" class="btn btn-primary" id="btnPrint"><i class="fa fa-print"></i></a>
            <div id="print_kartu" style="font-size:14px">
              <img src="../assets/img/kartu_alumni.png" alt="" style="width:90%">
              <div class="top-first text-dark">
                <span style="display:inline-block;  width:103px; text-align:left">Nama </span>: {{kartu.name}}
              </div>
              <div class="top-second text-dark">
                <span style="display:inline-block;  width:103px; text-align:left">NIK </span>: {{kartu.nik}}
              </div>
              <div class="top-third text-dark">
                <span style="display:inline-block;  width:103px; text-align:left">No Anggota </span>: {{kartu.nim}}
              </div>
              <div class="top-fourth text-dark">
                <span style="display:inline-block;  width:103px; text-align:left">TTL </span>: {{kartu.birth_place}}, {{kartu.birth_date}}
              </div>
              <div class="top-fifth text-dark">
                <span style="display:inline-block;  width:100px; text-align:left">Fakultas/Prodi </span> : {{kartu.faculty}}, {{kartu.departement}} -  S1
              </div>
              <div class="top-sixth text-dark">
                <span style="display:inline-block;  width:100px; text-align:left">Lulus Tahun </span> : {{kartu.graduate_year}}
              </div>
              <div class="top-seventh text-dark">
                <span style="display:inline-block;  width:103px; text-align:left">Kadaluarsa </span>: 12 September 2022
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
export default {
  name: "kartu-alumni",
  components: {},
  data() {
    return {
      profil_lengkap: "tidak",
      survey_lengkap: "ya",
      role: "user",
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
          axios.get(process.env.VUE_APP_ROOT_API + 'profile/'+ this.$route.params.id).then(res => {
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
        frameDoc.document.write(".top-first { position: absolute; top: 12%; left: 130px; text-align: center; font-size:12px }");
        frameDoc.document.write(".top-second { position: absolute; top: 14%; left: 130px; text-align: center; font-size:12px }");
        frameDoc.document.write(".top-third { position: absolute; top: 16%; left: 130px; text-align: center; font-size:12px }");
        frameDoc.document.write(".top-fourth { position: absolute; top: 18%; left: 130px; text-align: center; font-size:12px }");
        frameDoc.document.write(".top-fifth { position: absolute; top: 20%; left: 130px; text-align: center; font-size:12px }");
        frameDoc.document.write(".top-sixth { position: absolute; top: 22%; left: 130px; text-align: center; font-size:12px }");
        frameDoc.document.write(".top-seventh { position: absolute; top: 25%; left: 130px; text-align: center; font-size:12px }");
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
</style>
