import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import DashboardAdmin from "../views/DashboardAdmin.vue";
// import TableAlumni from "../views/TableAlumni.vue";
import TableAlumniAdmin from "../views/TableAlumniAdmin.vue";
import Billing from "../views/Billing.vue";
import RTL from "../views/Rtl.vue";
import Notifications from "../views/Notifications.vue";
import Profile from "../views/Profile.vue";
import SignIn from "../views/SignIn.vue";
import SignInAdmin from "../views/SignInAdmin.vue";
import SignUp from "../views/SignUp.vue";
import SignUpAdmin from "../views/SignUpAdmin.vue";
import FormProfile from "../views/FormProfile.vue";
import FormTracer from "../views/FormTracer.vue";
import FormAkun from "../views/FormAkun.vue";
import FormAkunAdmin from "../views/FormAkunAdmin.vue";
import TableUser from "../views/TableUser.vue";
import cv from "../views/CurriculumVitae.vue";
import KartuAlumni from "../views/KartuAlumni.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard/:id",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/admin/dashboard",
    name: "Dashboard Admin",
    component: DashboardAdmin,
  },
  {
    path: "/admin/data_alumni",
    name: "Data Alumni",
    component: TableAlumniAdmin,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: Notifications,
  },
  {
    path: "/profile/:id",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/admin/sign-in",
    name: "SignIn Admin",
    component: SignInAdmin,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/admin/sign-up",
    name: "SignUp Admin",
    component: SignUpAdmin,
  },
  {
    path: "/form_profile/:id",
    name: "Form Profile",
    component: FormProfile,
  },
  {
    path: "/tracer_study/:id",
    name: "Tracer Study",
    component: FormTracer,
  },
  {
    path: "/admin/data_user",
    name: "Data User",
    component: TableUser,
  },
  {
    path: "/setting_account/:id",
    name: "Pengaturan Akun",
    component: FormAkun,
  },
  {
    path: "/admin/setting_account",
    name: "Pengaturan Akun Admin",
    component: FormAkunAdmin,
  },
  {
    path: "/cv/:id",
    name: "Curriculum Vitae",
    component: cv,
  },
  {
    path: "/kartu_alumni/:id",
    name: "Kartu Alumni",
    component: KartuAlumni,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
