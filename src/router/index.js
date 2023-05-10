import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Events from "../views/PageEvents";
import Rankings from "../views/PageRankings";
import Athletes from "../views/PageAthletes";
import News from "../views/PageNews";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
  },
  {
    path: "/rankings",
    name: "Rankings",
    component: Rankings,
  },
  {
    path: "/athletes",
    name: "Athletes",
    component: Athletes,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
