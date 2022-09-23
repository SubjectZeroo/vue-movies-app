<template>
    <div>
        <div class="flex flex-col md:flex-row items-center">
            <div class="relative mt-3 md:mt-0">
                <form class="search" v-on:submit.prevent="doSearch" role="search">
                    <input v-model="search" type="search" class="search__input bg-gray-800 text-sm rounded-full w-64 px-4 pl-8 py-1 focus:outline-none focus:shadow-outline" required placeholder="Search Movies, Series..." aria-label="Search">
                    <input type="submit" class="search__submit absolute right-2.5 bottom-1" value="Search">
                    <div class="absolute top-0">
                        <svg class="fill-current w-4 text-gray-500 mt-2 ml-2" viewBox="0 0 24 24"><path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"></path></svg>
                    </div>
                </form>
            </div>
        </div>
        <div class="absolute z-20 w-full max-w-sm bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-800 dark:divide-gray-700" aria-labelledby="dropdownNotificationButton">
            <div class="divide-y divide-gray-100 dark:divide-gray-700">
                <div v-for="results in result" :key="results.id" >
                    <router-link :to="{name: mediaType(results.media_type), params: {id: results.id}}" class="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div class="flex-shrink-0">
                            <img class="w-11 h-11 rounded-full" :src="'https://image.tmdb.org/t/p/w185/'+results.poster_path" alt="Jese image">
                        </div>
                        <div class="pl-3 w-full">
                            <template v-if="results.media_type === 'tv'">
                                {{ results.name}}
                            </template>
                            <template v-else>
                                {{ results.title}}
                            </template>
                        </div>
                    </router-link>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import {API_URL, API_TOKEN} from "../config/env"
export default {
data(){
    return {
        search: null,
        result: null,
        error: null
        };
    },
    methods: {
        async doSearch() {
            this.result = this.error = null
            try {
                const response = await fetch(`${API_URL}/search/multi/?api_key=${API_TOKEN}&query=${this.search}`)
                if(!response.ok) throw new Error("Not Found")
                const data  = await response.json();
                console.log(data.results);
                this.result = data.results
            } catch(error) {
                this.error = error
            } finally {
                this.search = null
            }
        },
        mediaType(media){
            return media == 'tv' ? "show-detail" : "movie-detail";
        }
    }
}
</script>

<style>

</style>