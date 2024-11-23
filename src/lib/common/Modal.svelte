<script>
  let { vault, title = 'New Vault', isOpen = $bindable() } = $props();

  function closeModal() {
    isOpen = false;
  }
</script>

{#if isOpen}
  <div class="overlay">
    <div class="modal-container">
      <div class="modal-title flex justify-between mb-4">
        <h2 class="text-2xl font-bold mb-2 text-gray-900">{title}</h2>
        <a class="cursor-pointer" onclick={closeModal}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </a>
      </div>

      <div class="modal-content pb-4">
        <form class="space-y-3" action="#" method="POST">
          <div>
            <div class="flex items-center justify-between">
              <label for="name" class="block text-sm/6 font-medium text-gray-900">Name</label>
            </div>
            <div class="mt-2">
              <input id="name" name="name" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
              </div>
            </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="username" class="block text-sm/6 font-medium text-gray-900">Username</label>
            </div>
            <div class="mt-2">
              <input id="username" name="username" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
              </div>
              <div class="mt-2 flex">
                <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
                  <button class="flex justify-center rounded-md text-sm/6 bg-neutral-100	 px-3 py-2 font-semibold shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                </button>
              </div>

              <div class="flex flex-wrap gap-1">
              <div class="flex items-center gap-x-1">
                  <input type="range" name="password-length" id="password-length" min="14" max="128" step="1" value="20">
                  <span>x characters</span>
                </div>

                <label for="uppercase-chars" class="flex items-center gap-x-1 cursor-pointer">
                  <input type="checkbox" name="uppercase-chars" id="uppercase-chars" checked>
                  <span>AZ</span>
                </label>

                <label for="lowercase-chars" class="flex items-center gap-x-1 cursor-pointer">
                  <input type="checkbox" name="lowercase-chars" id="lowercase-chars" checked>
                  <span>az</span>
                </label>

                <label for="numbers" class="flex items-center gap-x-1 cursor-pointer">
                  <input type="checkbox" name="number" id="numbers" checked>
                  <span>0-9</span>
                </label>

                <label for="special-chars" class="flex items-center gap-x-1 cursor-pointer">
                  <input type="checkbox" id="special-chars" checked>
                  <span>!@#$%^&*</span>
                </label>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label for="totp" class="block text-sm/6 font-medium text-gray-900">Authenticator key (TOTP)</label>
              </div>
              <div class="mt-2">
                <input id="totp" name="totp" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
              </div>
            </div>
          </form>
        </div>

      <div class="modal-footer">
        <div class="flex gap-x-2">
          <button type="submit" class="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
          <button class="flex justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold shadow-sm hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cancel</button>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-container {
      background: white;
      width: 70%;
      height: 60%;
      padding: 1rem;
      border-radius: 4px;
      display: grid;
      grid-template-rows: auto 1fr auto;

      .modal-title {
        border-bottom: 1px solid #ccc;
      }

      .modal-content {
        overflow-y: auto;
      }
    }
  }
</style>
