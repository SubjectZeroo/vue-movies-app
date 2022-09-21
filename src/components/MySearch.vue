<template>
    <div>
        <div class="flex flex-col md:flex-row items-center">
            <div class="relative mt-3 md:mt-0">
                <form class="search" v-on:submit.prevent="doSearch" >
                    <input v-model="search" type="text" class="search__input bg-gray-800 text-sm rounded-full w-80 px-4 pl-8 py-1 focus:outline-none focus-shadow-outline" required placeholder="Search Movies, Series...">
                    <input type="submit" class="search__submit absolute right-2.5 bottom-1" value="Search">
                    <div class="absolute top-0">
                        <svg class="fill-current w-4 text-gray-500 mt-2 ml-2" viewBox="0 0 24 24"><path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"></path></svg>
                    </div>
                </form>
            </div>
        </div>
        <div class=" absolute z-20 w-full max-w-sm bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-800 dark:divide-gray-700">
            <ul class="text-sm text-gray-700 dark:text-gray-200" >
                <li class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border-b-2 border-gray-800 relative cursor-pointer"  v-for="results in result" :key="results.id" >
                    {{ results.name }}
                    <template v-if="results.media_type === 'tv'">
                        {{ results.name}}
                    </template>
                    <template v-else>
                        {{ results.title}}
                    </template>
                </li>
            </ul>
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
        }
    }
}
</script>

<style>

</style>