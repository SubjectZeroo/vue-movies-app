<template>
  <div class="container mx-auto px-4 pt-16">
    <div class="popular-movies">
      <div class="uppercase tracking-wider text-orange-500 text-lg font-semibold">
        POPULAR SHOWS
       </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div class="mt-8" v-for="show in shows" :key="show.id">
            <router-link :to="{name: 'show-detail', params: {id: show.id}}">
                <img :src="'https://image.tmdb.org/t/p/w500'+show.poster_path" :alt="show.name">
            </router-link>
            <div class="mt-2">
                <a href="" class="text-lg mt-2 hover:text-gray-300">
                {{ show.name }}
                </a>
                <div class="flex items-center text-gray-400 text-sm mt-1">
                  <svg class="fill-current text-orange-500 w-4" viewBox="0 0 24 24"><g data-name="Layer 2"><path d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z" data-name="star"></path></g></svg>
                  <span class="ml-1">{{ show.vote_average * 10}}%</span>
                  <span class="mx-2">|</span>
                  <span>{{ show.first_air_date }}</span>
                </div>
                <!-- <div class="text-gray-400 text-sm"> {{ movie.genres }} </div> -->
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
        const shows = ref([]);
        fetch(
          `http://api.themoviedb.org/3/tv/popular?api_key=aa5ed91c2023f45e0f1d530c535f41ec`
        )
          .then((response) => response.json())
          .then((data) => {
            shows.value = data.results;

            console.log(data);
          });
     
  
      return {
          shows,  
      };
    },
};
</script>

<style>

</style>