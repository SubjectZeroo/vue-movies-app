<template>
    <div>
        <div class="flex flex-col md:flex-row items-center">
            <div class="relative mt-3 md:mt-0">
                <form class="search" v-on:submit.prevent="doSearch" role="search">
                    <input v-model="search" @blur="inactivate" ref="input" type="search" class="search__input bg-gray-800 text-sm sm:text-sm rounded-full w-64 px-4 pl-8 py-1" :class="{'active-input': activeInput}" required placeholder="Search Movies, Series..." aria-label="Search">
                    <div class="absolute top-0">
                        <svg class="fill-current w-4 text-gray-500 mt-2 ml-2" viewBox="0 0 24 24"><path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"></path></svg>
                    </div>
                </form>
            </div>
        </div>
        <div v-if="active" class="absolute z-20 w-full max-w-sm bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-800 dark:divide-gray-700">
            <div class="divide-y divide-gray-100 dark:divide-gray-700">
                <div v-for="search in searches" :key="search.id" >
                    <router-link :to="{name: mediaType(search.media_type), params: {id: search.id}}" class="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div class="flex-shrink-0">
                            <img class="w-11 h-11 rounded-full" :src="'https://image.tmdb.org/t/p/w185/'+search.poster_path">
                        </div>
                        <div class="pl-3 w-full">
                            <template v-if="search.media_type === 'tv'">
                                {{ search.name}}
                            </template>
                            <template v-else>
                                {{ search.title}}
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
        search: '',
        searches: null,
        error: null,
        active : false
        };
    },
    methods: {
        async doSearch() {
            this.searches = this.error = null
            try {
                const response = await fetch(`${API_URL}/search/multi/?api_key=${API_TOKEN}&query=${this.search}`)
                if(!response.ok) throw new Error("Not Found")
                const data  = await response.json();
                this.searches = data.results
                this.active = true;
            } catch(error) {
                this.error = error
            } 
        },
        activate : function() {
            if(this.searches !== '')
                this.active = true;
            },
        inactivate : function() {
            setTimeout( () => this.active = false, 900)
        },
        mediaType(media){
            return media == 'tv' ? "show-detail" : "movie-detail";
        }
    },
    computed: {
        activeInput() {
            if(this.searches) {
                return true;
            } else {
                return false;
            } 
        }
    },
    watch: {
        search() {
            this.doSearch()
        }
    }
}
</script>

<style>
.active_input {
  @apply focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1;
}

</style>