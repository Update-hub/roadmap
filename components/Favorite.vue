<template>
  <button @click="changeStatus">
    {{ isFavorite ? '追加済み' : 'お気に入りに追加' }}
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Favorite extends Vue {
  @Prop({ type: Boolean, required: true }) status!: boolean;

  isFavorite = this.status;

  changeStatus() {
    this.isFavorite = !this.isFavorite
    this.$emit('changeStatus', this.isFavorite)
  }
}
</script>

<style lang="scss"></style>
