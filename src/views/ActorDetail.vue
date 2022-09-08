<template>
    <!-- <div class="actor-info border-b border-gray-800">
      <div class="container mx-auto px-4 py-16 flex flex-col md:flex-row">
          <div class="flex-none">
              <img class="w-64 lg:w-96" :src="'https://image.tmdb.org/t/p/w500'+actor.profile_path" :alt="actor.name">
          </div>
          <div class="md:ml-24">
                  <h2 class="text-4xl mt-4 md:mt-0 font-semibold">{{ actor.name }}</h2>
                  <div class="flex flex-wrap items-center text-gray-400 text-sm mt-3">
                    <svg class="fill-current text-gray-400 hover:text-white w-4" viewBox="0 0 448 512"><path d="M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40z"></path></svg>
                      <div class="ml-1">{{ actor.birthday }} in {{ actor.place_of_birth }}</div>
                  </div>
                  <p class="text-gray-300 mt-8">{{ actor.biography }}</p>
                  <div class="mt-12">
                      <h4 class="text-white font-semibold"></h4>
                      <div class="flex mt-4">
                          <div class="mr-8"></div>
                      </div>
                  </div>
          </div>
      </div>
    </div> -->
    <div class="actor-infor border-b border-gray-800">
    <div class="container mx-auto px-4 py-16 flex flex-col md:flex-row">
      <div class="flex-none">
        <img :src="'https://image.tmdb.org/t/p/w300'+actor.profile_path" :alt="actor.name" class="w-76">
        <ul class="flex-items-center mt-4">
          <li class="ml-6"></li>
        </ul>
      </div>
      <div class="md:ml-24">
        <h2 class="text-4xl mt-4 md:mt-0 font-semibold"> {{ actor.name }}</h2>
        <div class="flex flex-wrap items-center text-gray-400 text-sm mt-3">
            <svg class="fill-current text-gray-400 hover:text-white w-4" viewBox="0 0 448 512"><path d="M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40z"></path></svg>
            <div class="ml-1">{{ actor.birthday }} in {{ actor.place_of_birth }}</div>
        </div>
        <p class="text-gray-300 mt-8">{{ actor.biography }}</p>
        <h4 class="font-semibold mt-12">Know For</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div class="mt-4" v-for="combined_credit in combined_credits.cast" :key="combined_credit.id">
            <router-link :to="{name: mediaType(combined_credit.media_type), params: {id: combined_credit.id}}">
              <img :src="'https://image.tmdb.org/t/p/w185/'+combined_credit.poster_path" alt="" class="hover:opacity-75 transition ease-in-out duration-150">
            </router-link>
            <router-link  :to="{name: mediaType(combined_credit.media_type), params: {id: combined_credit.id}}" class="text-sm leading-normal block text-gray-400 hover:text-white mt-1">
                <div v-if="combined_credit.media_type === 'tv'">
                    {{ combined_credit.name}}
                </div>
                <div v-else>
                    {{ combined_credit.title}}
                </div>
            </router-link>
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
              actor: {},
              combined_credits: {},
          };
      },
      mounted() {
          fetch(
              `${API_URL}/person/${this.id}?api_key=${API_TOKEN}`
          )
          .then((response) => response.json())
          .then((data) => (this.actor = data))
          .catch((err) => console.log(err))

          fetch(
              `${API_URL}/person/${this.id}/combined_credits?api_key=${API_TOKEN}`
          )
          .then((response) => response.json())
          .then((data) => (this.combined_credits = data))
          .catch((err) => console.log(err))
      },
      methods: {
        mediaType(media){
            return media == 'tv' ? "show-detail" : "movie-detail";
        }
      }
  };
  </script>
  
  <style>
  
  </style>