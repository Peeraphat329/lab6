<script setup lang="ts">
import DrawerSlideApp from "./components/DrawerSlideApp.vue";
import WindowMockup from "./components/WindowMockup.vue";
import FooterApp from "./components/FooterApp.vue";
</script>

<template>
  <div class="bg-base-100">
    <DrawerSlideApp>
      <template #window-mockup>
        <div class="h-screen flex items-center">
          <WindowMockup>
            <template #window-content>
              <div class="bg-base-100 w-full">
                <div class="flex justify-center">
                  <router-view> </router-view>
                </div>
              </div>
            </template>
          </WindowMockup>
        </div>
      </template>
    </DrawerSlideApp>
  </div>
</template>

<style scoped></style>
