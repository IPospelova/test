<template>
  <section class="gallery">
    <input
      type="text"
      class="input"
      :value="pageTitle"
      @keyup="updateTitle($event)"
    />
    <div class="row">
      <div v-for="character in characters" :key="character.id" class="col-md-3">
        <!-- gallery__card -->
        <div
          :class="{ 'gallery__card--season': $route.path === '/seasons' }"
          class="gallery__card"
        >
          <div
            :class="{ 'gallery__img-wrap--season': $route.path === '/seasons' }"
            class="gallery__img-wrap"
          >
            <img :src="character.imgSrc" alt="" class="gallery__img" />
          </div>

          <!-- if charcters -->
          <div v-if="$route.path === '/'" class="gallery__bottom">
            <h3 class="gallery__nick">nick: {{ character.nickname }}</h3>
            <p class="gallery__name">name: {{ character.name }}</p>
            <p class="gallery__date">birthday: {{ character.birthday }}</p>
          </div>

          <!-- else seasons -->
          <div v-else class="gallery__bottom gallery__bottom--season">
            <h3 class="gallery__nick">title: {{ character.title }}</h3>
            <p class="gallery__name">season: {{ character.season }}</p>
            <p class="gallery__date">date: {{ character.air_date }}</p>
          </div>
        </div>
        <!-- gallery__card END -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'gallery',
  props: {
    characters: {
      type: Array,
      required: true
    },
    pageTitle: {
      type: String,
      required: true
    }
  },
  data() {
    return {}
  },

  methods: {
    updateTitle(event) {
      this.$emit('onUpdateInput', event.target.value)
    }
  }
}
</script>
