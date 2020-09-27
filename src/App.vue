<template>
  <div class="w-full flex flex-col justify-center items-center my-16">
    <header class="w-full max-w-screen-md">
      <h1 class="font-bold text-gray-800 text-2xl mb-16">Cute random cat pics</h1>
    </header>
    <router-view />
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-gray-300;
}
</style>
