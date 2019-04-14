<template>
  <button @click="changeStatus">
    {{ isFavorite ? '追加済み' : 'お気に入りに追加' }}
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

@Component
export default class Favorite extends Vue {
  @Prop({ type: Boolean, required: true }) readonly status!: boolean;

  get isFavorite(): boolean {
    return this.status
  }

  @Emit()
  changeStatus() {
    return this.isFavorite
  }
}
</script>

<style lang="scss"></style>
