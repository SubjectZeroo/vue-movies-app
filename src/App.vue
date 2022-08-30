<template>
  <main class="font-sans bg-gray-900 text-white">
     <NavBar />
     <router-view />
  </main>
 
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default{
  components: {
    NavBar
  }
}
</script>