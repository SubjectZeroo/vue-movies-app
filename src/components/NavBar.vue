<template>
    <nav class="border-b border-gray-800">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6">
        <ul class="flex flex-col md:flex-row items-center">
          <router-link to="/">MovieApp</router-link>
          <li class="md:ml-6 mt-3 md:mt-0">
                <router-link to="/">Movies</router-link>
          </li>
          <li class="md:ml-6 mt-3 md:mt-0">
            <router-link to="/shows">Series</router-link> 
          </li>
          <li class="md:ml-6 mt-3 md:mt-0">
              <router-link to="/actors">Actors</router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>