<template>
    <div>
      <div class="transaction-section mb-3">
        <h5 class="badge bg-primary text-white fw-light">{{order.stage}}</h5>
          <div class="d-flex justify-content-space-between align-items-center ">
            <div class="d-flex processing text-align-center">
              <div class="for-img ">
                <img src="../assets/images/grace.jpg" alt="image" class="img-fluid" />
              </div>
              <div class="for-text">
                <h4>{{order.name}}</h4>
                <p>{{order.gender}}</p>
              </div>
            </div>
          <div>
            <p>Receipt No.:{{order.receipt_number}}</p>
            <button class=" btn btn-primary">Details</button>
          </div>
          </div>
        </div>
        </div>
        
        <button @click="$emit('increase-count')">Count</button>
</template>

<script>
export default {
     props: {
      order: Object
     },
   
     emits: []
}
</script>

<style>

</style>