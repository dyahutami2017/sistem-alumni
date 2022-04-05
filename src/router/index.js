import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import TableAlumni from "../views/TableAlumni.vue";
import Billing from "../views/Billing.vue";
import RTL from "../views/Rtl.vue";
import Notifications from "../views/Notifications.vue";
import Profile from "../views/Profile.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import FormProfile from "../views/FormProfile.vue";
import FormTracer from "../views/FormTracer.vue";
import FormAkun from "../views/FormAkun.vue";
import TableUser from "../views/TableUser.vue";
import cv from "../views/CurriculumVitae.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/data_alumni",
    name: "Data Alumni",
    component: TableAlumni,
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
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/form_profile",
    name: "Form Profile",
    component: FormProfile,
  },
  {
    path: "/tracer_study",
    name: "Tracer Study",
    component: FormTracer,
  },
  {
    path: "/data_user",
    name: "Data User",
    component: TableUser,
  },
  {
    path: "/setting_account",
    name: "Pengaturan Akun",
    component: FormAkun,
  },
  {
    path: "/cv",
    name: "Curriculum Vitae",
    component: cv,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
