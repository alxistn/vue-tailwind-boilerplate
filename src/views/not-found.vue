<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full">
    <body class="h-full">
    ```
  -->
  <div class="min-h-full pt-16 pb-12 flex flex-col bg-white">
    <main class="grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div class="shrink-0 flex justify-center">
        <a
          class="inline-flex"
          @click="$router.replace('/')"
        >
          <span class="sr-only">Demapp</span>
          <img
            class="h-12 w-auto"
            src="../assets/logo-black.svg"
            alt=""
          >
        </a>
      </div>
      <div class="py-16">
        <div class="text-center">
          <p class="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            Erreur 404
          </p>
          <h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Page non trouvée.
          </h1>
          <p class="mt-2 text-base text-gray-500">
            Désolé, nous n'avons pas pu trouver la page que vous recherchez.
          </p>
          <div class="mt-6">
            <a
              class="text-base font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
              @click="$router.replace('/')"
            >
              Retourner à la page d'accueil<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  layout: 'no-shell',
}
</script>
