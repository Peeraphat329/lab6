<script lang="ts">
export default {
  props: [],
};
</script>
<script setup lang="ts">
const readme = [
  "Simple management student form.",
  "Fill in the given form and see the results.",
  "Strange information will be rejected by validation system.",
  "And also delete action is available to!",
  "Hope you enjoy my application :)",
];
const usage = [
  "Pinia for managing statement",
  "Tailwind for customizing UI/UX and more!",
];
</script>
<template>
  <div class="card w-96 bg-base-100 shadow-xl h-full z-10">
    <figure class="">
      <div class="absolute">
        <div class="flex gap-8">
          <div class="">
            <router-link to="/overviews" class="btn bg-primary">
              <i class="fa-solid fa-house fa-xl"></i>
            </router-link>
            <p class="text-primary-content font-semibold text-sm">Overview</p>
          </div>
          <div class="">
            <router-link to="/form-register" class="btn">
              <i class="fa-solid fa-table-list fa-xl"></i>
            </router-link>
            <p class="text-white text-sm text-center">Form</p>
          </div>
          <div class="">
            <router-link to="/state-list" class="btn"
              ><i class="fa-solid fa-list fa-xl"></i
            ></router-link>
            <p class="text-white text-center text-sm">List</p>
          </div>
        </div>
      </div>
      <img
        class="h-64 object-cover w-full"
        src="https://images.iphonemod.net/wp-content/uploads/2022/09/iphone-14-wallpaper-img-1.png"
        alt="Shoes"
      />
    </figure>
    <div class="card-body text-sm z-10">
      <h2 class="card-title">
        Student Form Management
        <div class="badge badge-secondary">1.0.0</div>
      </h2>
      <div class="text-xs">
        <div class="badge badge-primary">README</div>
        <div class="chat chat-start">
          <div class="chat-bubble">
            <p v-for="text in readme">{{ text }}</p>
          </div>
        </div>
      </div>
      <div class="self-end">
        <div class="badge badge-error flex float-right uppercase">Usage</div>
        <br />
        <div class="chat chat-end">
          <div class="chat-bubble bg-accent-focus text-xs">
            <p v-for="u in usage">{{ u }}</p>
          </div>
        </div>
      </div>
      <div
        class="badge badge-info text-white font-semibold text-xs py-4 text-center self-center"
      >
        Currently, screen size is not supported on mobile device.
        Sorry for inconvenient.
      </div>
      <div class="card-actions justify-center mt-2">
        <div class="badge badge-secondary font-semibold">
          นายพีรพัฒน์ บางขัน 6404101329
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
