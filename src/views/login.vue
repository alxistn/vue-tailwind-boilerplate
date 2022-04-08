<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="mx-auto h-12 w-auto"
        src="../assets/logo.png"
        alt="Workflow"
      >
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Connectez-vous à votre compte
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Et
        <a
          href="#"
          class="font-medium text-indigo-600 hover:text-indigo-500"
        >
          commencez votre essai gratuit de 7 jours
        </a>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form
          class="space-y-6"
          method="POST"
          @submit.prevent="signInWithEmail"
        >
          <div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div class="mt-1">
              <input
                id="email"
                v-model="email"
                name="email"
                type="email"
                autocomplete="email"
                required=""
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
            </div>
          </div>

          <div>
            <button
              :disabled="loading"
              type="submit"
              :class="loading ? 'cursor-not-allowed' : ''"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg
                v-if="loading"
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>

              Se connecter
            </button>
          </div>
        </form>


        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">
                Ou continuez avec
              </span>
            </div>
          </div>

          <div class="mt-6">
            <button
              class="w-full"
              @click="signWithGoogle"
            >
              <a
                href="#"
                class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span class="sr-only">Se connecter avec Google</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z"
                    fill="#4285F4"
                  /><path
                    d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z"
                    fill="#34A853"
                  /><path
                    d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z"
                    fill="#FBBC05"
                  /><path
                    d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z"
                    fill="#EA4335"
                  />
                </svg>

                <span class="ml-2">Se connecter avec Google</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'no-shell',
  data() {
    return {
      loading: false,
      email: ""
    }
  },
  methods: {
    signInWithEmail() {
      if (this.loading) return;
      this.loading = true;
      // your sign in code
      this.loading = false;
    },
    signWithGoogle() {
      if (this.loading) return;
      this.loading = true;
      // your google sign in implementation
      this.loading = false;
    }
  }
}
</script>
