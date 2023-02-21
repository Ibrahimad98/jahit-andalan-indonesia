<script>
import Navbar from "../components/Navbar.vue";
import { useAndalanStore } from "../stores/andalan";
import { mapActions, mapState } from "pinia";

export default {
  name: "OrderForm",
  data() {
    return {
      order: {
        name: "",
        amount: "",
        price: "",
      },
    };
  },
  methods: {
    ...mapActions(useAndalanStore, ["addOrder"]),

    submitForm() {
      // console.log(this.order);

      this.addOrder(this.order);
    },
  },
  components: {
    Navbar,
  },
};
</script>
<template>
  <Navbar />
  <section
    class="bg-light"
    style="padding-top: 20px; min-height: 500px; padding-bottom: 30px"
  >
    <div style="margin: 50px">
      <h1 class="mb-4">Order Form</h1>
      <form @submit.prevent="submitForm" class="form" style="width: 50%">
        <input
          v-model="order.name"
          type="text"
          class="form-control mt-4"
          placeholder="order name"
        />
        <input
          type="number"
          class="form-control mt-4"
          placeholder="order amount"
          v-model="order.amount"
        />
        <input
          v-model="order.price"
          type="number"
          class="form-control mt-4"
          placeholder="order price"
        />
        <input type="submit" class="btn btn-warning mt-5" value="Submit" />
      </form>
    </div>
  </section>
</template>
