<template>
  <header class="header">
    <div class="container">
      <nav class="nav nav--navbar">
        <!-- <router-link
          to="/"
          :class="{ active: $route.path === '/' }"
          class="link link--navbar"
          >characters
        </router-link>
        <router-link
          to="/seasons"
          :class="{ active: $route.path === '/seasons' }"
          class="link link--navbar"
          >seasons
        </router-link>
        <router-link to="/" class="link link--navbar">episodes </router-link>
        <router-link to="/" class="link link--navbar">quote</router-link>
        <router-link to="/" class="link link--navbar">deaths</router-link> -->
        <!-- <router-link
          v-for="link in links"
          :key="link.id"
          :to="link.to"
          :class="activeClass(link)"
          class="link link--navbar"
          >{{ link.name }}</router-link
        > -->
        <router-link
          v-for="link in activeLinks"
          :key="link.id"
          :to="link.to"
          :class="link.activeClass"
          class="link link--navbar"
          >{{ link.name }}</router-link
        >
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'page-header',
  data() {
    return {
      links: [
        { to: '/', name: 'characters' },
        { to: '/seasons', name: 'seasons' },
        { to: '/episodes', name: 'episodes' },
        { to: '/quote', name: 'quote' },
        { to: '/deaths', name: 'deaths' }
      ]
    }
  },

  computed: {
    activeLinks() {
      this.links.forEach(el =>
        this.$route.path === el.to
          ? (el.activeClass = 'active')
          : (el.activeClass = '')
      )
      return this.links
    }
  },

  methods: {
    activeClass(link) {
      if (this.$route.path === link.to) return 'active'
      return ''
    }
  }
}
</script>
