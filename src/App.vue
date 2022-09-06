<template>
  <main class="font-sans bg-gray-900 text-white">
     <NavBar />
     <router-view />
     <MyFooter />
  </main>
 
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import MyFooter from "@/components/MyFooter.vue";
export default{
  components: {
    NavBar,
    MyFooter
  }
}
</script>