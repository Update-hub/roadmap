<template>
  <section class="container">
    <div>
      <favorite :status="true" @change-status="toggleFavorite" />
      <logo />
      <p>{{ animal }}</p>
      <div v-for="(roadmap, index) in roadmaps" :key="index">
        <p>{{ roadmap.title }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Favorite from '~/components/Favorite.vue'
import { Component, Vue } from 'vue-property-decorator'

interface RoadmapCard {
  title: string;
  description: string;
  thumbnailURL: string;
  reviewScore: number;
  lastUpdate: number;
  isEditable: number;
}

@Component({
  components: {
    Favorite
  }
})
export default class FeedPage extends Vue {
  animal = 1111
  roadmaps: RoadmapCard[] = [
    {
      title: 'タイトル',
      description: 'string',
      thumbnailURL: 'string',
      reviewScore: 11,
      lastUpdate: 11,
      isEditable: 11
    }
  ];

  toggleFavorite($event) {
    console.log($event)
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
