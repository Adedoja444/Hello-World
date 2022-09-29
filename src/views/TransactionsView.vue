<template>
  <section>
    <div class="container">
        <h3 class="text-center my-5">Transactions</h3>
        <OrderCard v-for="(order, index) in orders" :key="index" :order="order"/>
      </div>
      <div class="container">
        <h5>Processing</h5>
        <order-card v-for="order in processingOrders" :key="order.id" :order="order"  @increase-count="count++" />
      </div>

      <div>
        <h3>{{ count }}</h3>
      </div>
  </section>
</template>

<script>
import OrderCard from '@/components/OrderCard.vue'
export default {
    data() {
        return {
          count: 0,
            orders: [
                {id: 1, name: 'Jane', receipt_number: '1000-GH', gender: 'Female', stage: 'processing'},
                {id: 2, name: 'Hannah', receipt_number: '1010-AC', gender: 'Female', stage: 'processing'},
                {id: 3, name: 'Daniel', receipt_number: '1005-DT', gender: 'Male', stage: 'shipped'},
                {id: 4, name: 'Margaret', receipt_number: '1017-RH', gender: 'Female', stage: 'completed'},
                {id: 5, name: 'Jose', receipt_number: '1002-PF', gender: 'Male', stage: 'shipped'},
                {id: 6, name: 'Fate', receipt_number: '1025-SN', gender: 'Male', stage: 'completed'},
            ]
        }
    },
    components: {
        OrderCard
    },
    methods: {

    },
    computed: {
        processingOrders() {
            return this.orders.filter((order) => order.stage === 'processing')
        }
    }
};
</script>

<style>
.processing {
  width: 75%;
}

.for-img img {
  width: 85%;
}

.for-text {
  width: 30%;
}

.transaction-section {
    border: 2px solid grey;
    padding: 5px 10px;
    border-radius: 5px;
}
</style>