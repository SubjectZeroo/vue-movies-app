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
                  </div>
                  <p class="text-gray-300 mt-8">{{ serie.overview }}</p>
                  <div class="mt-12">
                      <h4 class="text-white font-semibold"></h4>
                      <div class="flex mt-4">
                          <div class="mr-8"></div>
                      </div>
                  </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import {API_URL, API_TOKEN} from "../config/env"
  export default {
      props: ["id"],
      data() {
          return {
              serie: {},
          };
      },
      mounted() {
          fetch(
              `${API_URL}/tv/${this.id}?api_key=${API_TOKEN}`
          )
          .then((response) => response.json())
          .then((data) => (this.serie = data))
          .catch((err) => console.log(err))
      },
  };
  </script>
  
  <style>
  
  </style>