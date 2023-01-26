<script lang="ts">
import FooterApp from "./FooterApp.vue";
export default {
  props: [],
  data() {
    return {
      onHorizontalRulePages: ["List"].includes(<string>this.$route.name),
    };
  },

  watch: {
    $route(to, from) {
      this.onHorizontalRulePages = ["List"].includes(<string>this.$route.name);
    },
  },
};
</script>
<script setup lang="ts">
import { watch, ref } from "vue";
import { useUserState } from "../store";
let counters = ref(0);
watch(
  useUserState().userState,
  () => {
    counters.value = useUserState().getCounter;
    console.log(counters.value);
  },
  { deep: true }
);
</script>
<template>
  <div class="container mx-auto flex justify-center">
    <div class="mockup-phone">
      <div class="camera">
        <div class="absolute top-1 -right-3/4 mr-2">
          <div
            class="text-xs font-bold h-8 w-10 flex justify-center items-center"
          >
            <a>{{ $route.name }}</a>
          </div>
        </div>
        <div class="absolute top-2 -left-3/4">
          <div class="flex gap-2 w-20">
            <router-link to="/overviews" class="btn btn-primary btn-xs drawer-button"
              ><i class="fa-regular fa-window-maximize"></i
            ></router-link>
            <div
              class="tooltip tooltip-bottom text-xs"
              :data-tip="`${counters} states`"
            >
              <router-link
                to="/state-list"
                for=""
                class="btn btn-secondary btn-xs"
              >
                <h1
                  v-if="counters !== 0"
                  class="duration absolute -top-2 -right-4 flex text-black px-2 py-1 rounded-full bg-secondary-content"
                >
                  {{ counters }}
                </h1>
                <i class="fa-solid fa-bell"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="display">
        <div
          :class="
            onHorizontalRulePages
              ? 'artboard-horizontal phone-5'
              : 'artboard-demo phone-3'
          "
          class="artboard"
        >
          <div
            class="flex w-min-full w-full h-full justify-center py-10 bg-slate-50 overflow-auto"
          >
            <slot name="window-content"></slot>
            <!-- <FooterApp></FooterApp> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
