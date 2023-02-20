<script>
import { mapActions } from "pinia";
import { useAndalanStore } from "../stores/andalan";

export default {
  name: "LoginForm",
  methods: {
    ...mapActions(useAndalanStore, ["changePage", "login"]),
    submitForm() {
      // console.log(this.loginForm);

      this.login(this.loginForm);
    },
  },
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
    };
  },
};
</script>
<template>
  <section
    style="
      height: 567px;
      background-image: url('https://digitaltouchsystems.com/wp-content/uploads/2017/02/orange-wallpaper-8-1024x576-1.jpg');
      background-color: black;
    "
    class="d-flex justify-content-center align-items-center"
  >
    <div
      style="height: 500px; border-radius: 30px; width: 500px"
      class="bg-light"
    >
      <div style="height: 30%" class="d-flex justify-content-center">
        <h3 style="margin-top: 50px"><strong>Login</strong></h3>
      </div>
      <div class="d-flex justify-content-center" style="height: 70%">
        <div>
          <p class="mt-2">input username and password</p>
          <form class="form" @submit.prevent="submitForm">
            <input
              type="text"
              placeholder="username"
              class="mt-4 form-control"
              v-model="loginForm.username"
            />
            <input
              type="password"
              placeholder="password"
              class="mt-4 form-control"
              v-model="loginForm.password"
            />
            <input type="submit" class="mt-3 btn btn-primary" value="Login" />
            <p class="mt-4">
              doesn't have an account?
              <a href="#" @click.prevent="changePage('/register')"
                >register here</a
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
