<script>
import { mapActions } from "pinia";
import { useAndalanStore } from "../stores/andalan";

export default {
  name: "RegisterForm",
  data() {
    return {
      registerForm: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useAndalanStore, ["register"]),

    submitForm() {
      // console.log(this.registerForm);

      this.register(this.registerForm);
    },
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
        <h3 style="margin-top: 50px"><strong>Register</strong></h3>
      </div>
      <div class="d-flex justify-content-center" style="height: 70%">
        <div>
          <p class="mt-2">input username and password to register</p>
          <form @submit.prevent="submitForm" class="form">
            <input
              type="text"
              placeholder="username"
              class="mt-4 form-control"
              v-model="registerForm.username"
            />
            <input
              type="password"
              placeholder="password"
              class="mt-4 form-control"
              v-model="registerForm.password"
            />
            <input
              type="submit"
              class="mt-3 btn btn-primary"
              value="Register"
            />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
