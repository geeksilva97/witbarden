<script>
    import Modal from '$lib/common/Modal.svelte';
    

    let isModalOpen = $state(false);
    let v = $state([]);

    $effect(() => {
        const encodedVaults = localStorage.vaults || '[]';

        v = JSON.parse(encodedVaults);
    });

    function openModal() {
        isModalOpen = true;
    }

    function copyToClipboard(password) {}
</script>

<div class="overflow-x-auto">
    <div class="w-full flex justify-end">
        <button
            onclick={openModal}
            data-modal-target="static-modal" data-modal-toggle="static-modal"
            type="submit" class="flex justify-center rounded-md bg-indigo-600 mb-2 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            New Vault
        </button>
    </div>

    <table class="min-w-full table-auto">
        <thead>
            <tr class="bg-gray-200">
                <th class="px-4 py-2 text-left">Name</th>
                <th class="px-4 py-2 text-left">Username</th>
                <th class="px-4 py-2 text-left">Password</th>
            </tr>
        </thead>
        <tbody>
            {#each v as vault, index}
                <tr class="border-t">
                    <td class="px-4 py-2">{vault.name}</td>
                    <td class="px-4 py-2">{vault.username}</td>
                    <td class="px-4 py-2">
                        <div class="flex items-center gap-x-1">
                            <span> *** </span>
                            <button onclick={() => copyToClipboard(v.password)} class="outline rounded-md px-1.5 py-1 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Copy</button>
                        </div>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<Modal bind:isOpen={isModalOpen} />
