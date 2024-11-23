let vaults = $state([]);

const getVaultsFromStorage = () => {
	const encodedVaults = localStorage.vaults || '[]';

	return JSON.parse(encodedVaults);
};

export const vaultStore = {
	get vaults() { return vaults; },
	getVaultsFromStorage,
	loadVaultsFromStorage: () => {
		vaults = getVaultsFromStorage();
		console.log('loading vaults', vaults)
	},
	add: (vault) => {
		const encodedVaults = localStorage.vaults || '[]';
		const decodedVaults = JSON.parse(encodedVaults);

		decodedVaults.push(vault);
		
		localStorage.vaults = JSON.stringify(decodedVaults);
		vaults = decodedVaults;
	}
};
