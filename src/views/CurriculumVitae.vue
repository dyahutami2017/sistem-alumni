<!--prettier-ignore-->
<template>
  <div class="py-4 container-fluid" style="min-height: 450px">
    <div class="row mb-4">
      <div class="col-lg-12 position-relative z-index-2">
        <div class="card">
          <div class="card-body" id="print_cv">
            <h1 align=center>CURRICULUM VITAE</h1>
              <hr>
              <b>PERSONAL INFORMATION</b>
              <hr>
              <table style="width:50%">
                  <img class="logo-print" src="../assets/img/team-3.jpg" align="right" width="124" height="142">
                <tr>
                <th></th>
                <th></th>
                </tr>
                <tr>
                    <td>Nama Lengkap</td>
                    <td>: Alec M. Thompson </td>
                </tr>
                <tr>
                    <td>Tempat Tanggal Lahir</td>
                    <td>: Sleman, 10 Januari 1997 </td>  
                </tr>
                    <td>Alamat</td>
                    <td>: Jalan Komarudin No 20</td>
                <tr>
                    <td>NO HP</td>
                    <td>: 085664842748</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>: muhtaromhawari312@gmail</td>
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
                    <td>2010-2015</td>
                    <td>Universitas Negeri Surakarta</td>
                </tr>
              </table>            
              <hr>
              <b>KEAHLIAN</b><hr>
                        Mengoperasikan Komputer : Microsoft Office<br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import $ from "jquery";
export default {
  name: "dashboard-default",
  components: {},
  data() {
    return {
      profil_lengkap: "tidak",
      survey_lengkap: "ya",
      role: "user",
    };
  },
  methods: {},
  mounted: function () {
    window.addEventListener("load", function () {
      var divContents = document.getElementById("print_cv").innerHTML;
      var a = window.open("", "", "height=1000, width=1000");
      a.document.write("<html>");
      a.document.write("<body >");
      a.document.write(divContents);
      a.document.write("</body></html>");
      a.document.close();
      a.print();
    });
  },
};
</script>
