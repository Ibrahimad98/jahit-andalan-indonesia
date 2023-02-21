<script>
import { useAndalanStore } from "../stores/andalan";
import { mapActions } from "pinia";

export default {
  name: "Navbar",
  data() {
    return {
      username: localStorage.getItem("username"),
    };
  },
  methods: {
    ...mapActions(useAndalanStore, ["changePage"]),
    logOut() {
      localStorage.clear();

      this.changePage("/login");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You're logged out",
        showConfirmButton: false,
        timer: 700,
      });
    },
  },
};
</script>
<template>
  <nav
    style="
      overflow: hidden;
      height: 70px;
      background-image: url('https://digitaltouchsystems.com/wp-content/uploads/2017/02/orange-wallpaper-8-1024x576-1.jpg');
      background-size: cover;
    "
    class="row d-flex shadow"
  >
    <div class="col m-1 d-flex justify-content-center align-items-center">
      <a
        style="text-decoration: none; color: white"
        href="#"
        @click.prevent="changePage('/')"
        ><img
          style="border-radius: 30px; height: 50px; width: 50px"
          src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/47f9dfa3ccf95f45c1c9e4a4050dd0d8.jpeg"
          alt=""
      /></a>
    </div>
    <div class="col-9 d-flex align-items-center justify-content-between">
      <a
        style="text-decoration: none; color: white"
        href="#"
        class="mt-2"
        @click.prevent="changePage('/orders')"
        ><p><strong>Add an order</strong></p></a
      >
      <p class="me-4 mt-2 text-light">Hello {{ username }}</p>
    </div>
    <div class="col d-flex align-items-center">
      <a
        style="text-decoration: none; color: white"
        href="#"
        @click.prevent="logOut"
        ><img
          style="height: 30px; width: 30px"
          src="../assets/41-413813_shutdown-button-clipart-arrow-icon-logout-white-png.png"
      /></a>
    </div>
  </nav>
</template>
<style></style>
