// password is the hashed master key
export async function deriveKey(password) {
	const encoder = new TextEncoder();
	const passwordKey = await window.crypto.subtle.importKey(
		"raw",
		encoder.encode(password),
		"PBKDF2",
		false,
		["deriveKey"]
	);

	const salt = window.crypto.getRandomValues(new Uint8Array(16));
	const iv = window.crypto.getRandomValues(new Uint8Array(12));

	const derivedKey = await window.crypto.subtle.deriveKey(
		{
			name: "PBKDF2",
			salt: salt,
			iterations: 100000,
			hash: "SHA-256",
		},
		passwordKey,
		{name: "AES-GCM", length: 256},
		false,
		["encrypt", "decrypt"]
	);

	return { salt, iv, derivedKey };
}

export async function encryptData({ iv, derivedKey }, textToEncrypt) {
	const encoder = new TextEncoder();
	const encodedMessage = encoder.encode(textToEncrypt);

	const ciphertext = await window.crypto.subtle.encrypt(
		{
			name: "AES-GCM",
			iv: iv,
		},
		derivedKey,
		encodedMessage
	);

	// To base 64
	const base64Ciphertext = btoa(String.fromCharCode(...new Uint8Array(ciphertext)));

	return base64Ciphertext;
}
