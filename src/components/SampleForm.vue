<template>
  <div class="container">
    <h1 class="form-header">Here is sample form</h1>
    <div class="row">
      <div class="col-md-12">
        <b-b-form/>
      </div>
    </div>
  </div>
</template>
<script>
import BBForm from './boostrap-samples/BaseForm'
export default {
  name: 'SampleForm',
  components: {
    BBForm
  }
}
</script>
<style lang="scss">
  .form-header {
    color: red;
  }
</style>
