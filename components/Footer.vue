<template>
  <footer>
    <nuxt-link to="/privacy">
      プライバシーポリシー
    </nuxt-link>
    <nuxt-link to="/developer">
      メンバーページ
    </nuxt-link>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {
}
</script>

<style lang="scss" scoped>
</style>
