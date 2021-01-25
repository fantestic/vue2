<template>
  <div class="container">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <template v-for="(route, index) in $route.matched">
          <li v-if="route.meta.breadcrumb" :key="index">
            <router-link
              v-if="route.meta.breadcrumb.type === 'func'"
              :to="resolveRoute({ name: route.name, params: $route.params })"
            >{{ route.meta.breadcrumb.func($route) }}</router-link>
            <router-link
              v-else
              :to="resolveRoute({ name: route.name, params: $route.params })"
            >{{ route.meta.breadcrumb.text }}</router-link>
          </li>
        </template>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    resolveRoute(params) {
      // manually resolve routes as router-link elements will try and render
      // empty parent Components and not the first child component with empty route
      return this.$router.resolve(params).href
    }
  }
}
</script>

<style scoped>
  .breadcrumb {
    margin: 20px 0;
  }
</style>