<template>
    <div class="serie-info border-b border-gray-800">
      <div class="container mx-auto px-4 py-16 flex flex-col md:flex-row">
          <div class="flex-none">
              <img class="w-64 lg:w-96" :src="'https://image.tmdb.org/t/p/w500'+serie.poster_path" :alt="serie.name">
          </div>
          <div class="md:ml-24">
                  <h2 class="text-4xl mt-4 md:mt-0 font-semibold">{{ serie.name }}</h2>
                  <div class="flex flex-wrap items-center text-gray-400 text-sm mt-3">
                      <svg class="fill-current text-orange-500 w-4" viewBox="0 0 24 24"><g data-name="Layer 2"><path d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z" data-name="star"></path></g></svg>
                      <div class="ml-1">{{ serie.vote_average * 10}}%</div>
                      <div class="mx-2">|</div>
                      <span>{{ serie.first_air_date }}</span>
                      <span class="mx-2">|</span>
                    <span v-for="genre in serie.genres" :key="genre.id">
                        {{ genre.name }}, 
                    </span>
                  </div>
                  <p class="text-gray-300 mt-8">{{ serie.overview }}</p>
                  <div class="mt-12">
                    <h4 class="text-white font-semibold">
                        Featured Crew
                    </h4>
                    <div class="flex mt-4">
                        <div class="mr-8" v-for="team in teams" :key="team.id">
                            <div>
                                {{ team.name }}
                            </div>
                            <div class="text-sm text-gray-400">{{ team.job }}</div>
                        </div>
                    </div>
                </div>
                <div class="mt-12">
                    <MyModal>
                        <template v-slot:iframe>
                            <iframe  class="responsive-iframe absolute top-0 left-0 w-full h-full" :src="'https://www.youtube.com/embed/'+trailer[0].key" style="border-0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </template>
                    </MyModal>
                </div>
          </div>
      </div>
    </div>
    <div class="movie-cast border-b border-gray-">
        <div class="container mx-auto px-4 py-16">
            <h2 class="text-4xl font-semibold">Cast</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                <div class="mt-8" v-for="actor in actors" :key="actor.id">
                    <router-link :to="{name: 'actor-detail', params: {id: actor.id}}">
                        <img :src="'https://image.tmdb.org/t/p/w500'+actor.profile_path" alt="" class="hover:opacity-75 transition ease in-out duration-150">    
                    </router-link>
                    <div class="mt-2">
                        <router-link :to="{name: 'actor-detail', params: {id: actor.id}}">
                            {{ actor.name }}
                        </router-link>
                        <div class="text-sm text-gray-">
                            {{ actor.character }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="movie-images">
        <div class="container mx-auto px-4 py-16">
            <h2 class="text-4xl font-semibold">Images</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div class="mt-8"  v-for="image in images" :key="image.id">
                    <a href="#">
                        <img :src="'https://image.tmdb.org/t/p/w500'+image.file_path" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import {API_URL, API_TOKEN} from "../config/env"
  import MyModal from "../components/MyModal.vue";
  export default {
      components: { MyModal },
      props: ["id"],
      data() {
          return {
              serie: {},
              teams:{},
              actors:{},
              images:{},
              trailer:{}
          };
      },
      mounted() {
          fetch(
              `${API_URL}/tv/${this.id}?api_key=${API_TOKEN}`
          )
          .then((response) => response.json())
          .then((data) => (this.serie = data))
          .catch((err) => console.log(err));

          fetch(
            `${API_URL}/tv/${this.id}/credits?api_key=${API_TOKEN}`
            )
            .then((response) => response.json())
            .then(data => {
            this.actors = data.cast.slice(0, 5) 
            this.teams = data.crew.slice(0, 2) 
            }).catch((err) => console.log(err));

            fetch(
            `${API_URL}/tv/${this.id}/images?api_key=${API_TOKEN}`
            )
            .then((response) => response.json())
            .then(data => {
               this.images = data.backdrops.slice(0, 9) 
            }).catch((err) => console.log(err))


            fetch(
            `${API_URL}/tv/${this.id}/videos?api_key=${API_TOKEN}`
            )
            .then((response) => response.json())
            .then(data => {
                    this.trailer = data.results.filter(el => el.name.includes('Official Trailer'));
                    console.log(this.trailer)
            }).catch((err) => console.log(err))
      },
  };
  </script>
  
  <style>
  
  </style>