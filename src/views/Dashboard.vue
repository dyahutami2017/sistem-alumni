<template>
  <div class="py-4 container-fluid" style="min-height: 450px">
    <div class="row mb-4">
      <div class="col-lg-12 position-relative z-index-2">
        <div v-if="role === 'user'" class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <mini-cards
              v-if="profil_lengkap === 'ya'"
              title="Profil Sudah Lengkap"
              iconName="task_alt"
              iconClass="text-white"
              iconBackground="bg-gradient-success"
            />
            <mini-cards
              v-else-if="profil_lengkap === 'tidak'"
              title="Profil Belum Lengkap"
              iconName="highlight_off"
              iconClass="text-white"
              iconBackground="bg-gradient-primary"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <mini-cards
              v-if="survey_lengkap === 'ya'"
              title="Tracer Study Terisi"
              iconName="task_alt"
              iconClass="text-white"
              iconBackground="bg-gradient-success"
            />
            <mini-cards
              v-else-if="survey_lengkap === 'tidak'"
              title="Tracer Belum Terisi"
              iconName="task_alt"
              iconClass="text-white"
              iconBackground="bg-gradient-primary"
            />
          </div>
        </div>
        <div v-else class="row">
          <div class="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <mini-cards
              title="Pendaftar"
              value="150"
              iconName="person"
              iconClass="text-white"
              iconBackground="bg-gradient-info"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <mini-cards
              title="Teraktivasi"
              value="138"
              iconName="person"
              iconClass="text-white"
              iconBackground="bg-gradient-success"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <mini-cards
              title="Data Alumni"
              value="208"
              iconName="person"
              iconClass="text-white"
              iconBackground="bg-gradient-warning"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- prettier-ignore -->
  <div class="modal fade" id="modalDokumen">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title font-weight-normal" id="exampleModalLabel">Upload Dokumen</h5>
          <button type="button" class="btn-close text-dark closeModal" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6">
              <div class="input-group input-group-outline mb-3">
                <label class="label col-12">KTP</label><br/>
                <input type="file" class="form-control" name="ktp" isrequired="true">
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-group input-group-outline mb-3">
                <label class="label col-12">Ijazah</label><br/>
                <input type="file" class="form-control" name="ijazah" isrequired="true">
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn bg-gradient-secondary closeModal" data-bs-dismiss="modal"><i class="fa fa-times"></i> Tutup</button>
          <button type="button" class="btn bg-gradient-primary saveModal"><i class="fa fa-save"></i> Save</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MiniCards from "./components/MiniCards.vue";
import $ from "jquery";

export default {
  name: "dashboard-default",
  components: {
    MiniCards,
  },
  data() {
    return {
      profil_lengkap: "tidak",
      survey_lengkap: "ya",
      role: "user",
    };
  },
  mounted() {
    $("#modalDokumen").addClass("show");
    $(".modal").css("display", "block");
    $(".closeModal").click(function () {
      $("#modalDokumen").removeClass("show");
      $(".modal").css("display", "none");
    });
    $(".saveModal").click(function () {
      window.location.href = "/form_profile";
    });
  },
};
</script>
