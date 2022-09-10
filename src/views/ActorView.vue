<template>
  <div class="container mx-auto px-4 pt-16">
    <div class="popular-actors">
      <div class="uppercase tracking-wider text-orange-500 text-lg font-semibold">
        Popular Actors
       </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div class="actor mt-8" v-for="actor in actors" :key="actor.id">
            <router-link :to="{name: 'actor-detail', params: {id: actor.id}}">
                <img :src="'https://image.tmdb.org/t/p/w235_and_h235_face/'+actor.profile_path" :alt="actor.name" class="hover:opacity-75 transition ease-in-out duration-150">
            </router-link>
            <div class="mt-2">
                <router-link :to="{name: 'actor-detail', params: {id: actor.id}}" class="text-lg mt-2 hover:text-gray-300">
                {{ actor.name }}
                </router-link>
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
        const actors = ref([]);
        fetch(
          `http://api.themoviedb.org/3/person/popular?api_key=aa5ed91c2023f45e0f1d530c535f41ec`
        )
          .then((response) => response.json())
          .then((data) => {
            actors.value = data.results;
          });
      return {
          actors,  
      };
    },
};
</script>