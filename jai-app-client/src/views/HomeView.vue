<script>
import Navbar from "../components/Navbar.vue";
import { useAndalanStore } from "../stores/andalan";
import { mapActions, mapState } from "pinia";

export default {
  name: "HomeView",
  components: {
    Navbar,
  },
  computed: {
    ...mapState(useAndalanStore, ["orders"]),
  },
  methods: {
    ...mapActions(useAndalanStore, ["fetchOrder"]),
  },
  created() {
    this.fetchOrder();
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
      <h1 class="mb-4">Order List</h1>
      <table class="table">
        <tr class="border">
          <th>No</th>
          <th>Name</th>
          <th>Amount</th>
          <th>Price</th>
        </tr>
        <tr class="border" v-for="(orders, idx) in orders">
          <td>{{ idx + 1 }}</td>
          <td>{{ orders.name }}</td>
          <td>{{ orders.amount }}</td>
          <td>{{ orders.price }}</td>
        </tr>
      </table>
    </div>
  </section>
</template>
