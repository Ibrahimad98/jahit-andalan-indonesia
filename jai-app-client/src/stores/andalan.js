import { defineStore } from "pinia";
import axios from "../config/axios";
import Swal from "sweetalert2";

export const useAndalanStore = defineStore("andalan", {
  state: () => ({
    orders: [],
  }),
  actions: {
    changePage(path) {
      this.router.push(path);
    },
    async register(dataUser) {
      console.log(dataUser, "<<<<<<<<<<<<<<<<<<");
      try {
        const { data } = await axios.post("register", {
          username: dataUser.username,
          password: dataUser.password,
        });
        this.changePage("/login");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Selamat, anda bisa masuk sekarang`,
          showConfirmButton: false,
          timer: 1500,
        });
        console.log("registered");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}`,
          footer: "",
        });
        console.log(error);
      }
    },
    async login(dataUser) {
      console.log(dataUser);
      try {
        const { data } = await axios.post("login", {
          username: dataUser.username,
          password: dataUser.password,
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("username", data.username);
        localStorage.setItem("id", data.id);
        // console.log(data.access_token);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Selamat datang ${localStorage.username}`,
          showConfirmButton: false,
          timer: 1500,
        });
        this.changePage("/");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}`,
          footer: "",
        });
        console.log(error);
      }
    },
    async fetchOrder() {
      try {
        const { data } = await axios.get(`orders`);
        // console.log(data, "ini dr store");

        this.articles = data;
      } catch (error) {
        console.log(error);
      }
    },

    async addOrder(payload) {
      try {
        const { data } = await axios.post("orders", {
          name: payload.name,
          amount: payload.amount,
          price: payload.price,
        });
        console.log("berhasil menambahkan data dari store");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sukses menambahkan order",
          showConfirmButton: false,
          timer: 1500,
        });
        this.changePage("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
});
