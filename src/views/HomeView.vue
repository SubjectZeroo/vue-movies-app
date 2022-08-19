<template>
  <!-- <div class="movie-list">
    <div class="movie" v-for="movie in movies" :key="movie.imdbID">
      <img :src="movie.Poster" alt="Movie Poster">
      <div class="type">{{ movie.Type }}</div>
    </div>
  </div> -->
  <div class="container mx-auto px-4 pt-16">
    <div class="popular-movies">
      <div class="uppercase tracking-wider text-orange-500 text-lg font-semibold">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div class="mt-8"  v-for="movie in movies" :key="movie.imdbID">
           <img :src="movie.Poster" alt="Movie Poster">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
    setup() {
        const movies = ref([]);
        fetch(
          `http://www.omdbapi.com/?i=tt3896198&apikey=427cab4e&s=joker`
        )
          .then((response) => response.json())
          .then((data) => {
            movies.value = data.Search;
          });
     
  
      return {
          movies,  
      };
    },
};
</script>

<style>

</style>