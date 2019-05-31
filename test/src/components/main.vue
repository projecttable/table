<template>
    <div class="main">
        <left></left>
        <index></index>
    </div>
</template>

<script>
import index from '@/pages/header.vue'
import left from '@/pages/left.vue'
export default {
  components:{ index, left }
}
</script>

<style lang='stylus' scoped>
    .main{
        display: flex;
    }
</style>
