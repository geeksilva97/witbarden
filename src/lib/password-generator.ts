export function generatePassword(options: {
	minLength: number,
	maxLength: number,
	passwordOptions: {
		upperCase: boolean,
		lowerCase: boolean,
		numbers: boolean,
		specialChars: boolean
	}
}) {
	const charCategoryMap = {
		upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		lowerCase: 'abcdefghijklmnopqrstuvwxyz',
		numbers: '0123456789',
		specialChars: '!@#$%^&*()-_=+[]{}|;:,.<>?'
	};

	const getRandomCharFrom = (chars) => chars.charAt(Math.floor(Math.random() * chars.length));

	let { allChars, password } = Object.keys(options.passwordOptions)
	.reduce<{ allChars: string; password: string[] }>((acc, current) => {
		if (options.passwordOptions[current]) {
			console.log('current', current, charCategoryMap[current])

			acc['allChars'] += charCategoryMap[current];
			acc['password'].push(getRandomCharFrom(charCategoryMap[current]));
		}

		return acc;
	}, { allChars: '', password: [] });

		if (allChars.length === 0) {
			throw new Error('Must select at least one character category');
		}

    const passwordLength = Math.floor(Math.random() * (options.maxLength - options.minLength + 1)) + options.minLength;

    for (let i = password.length; i < passwordLength; i++) {
        password.push(getRandomCharFrom(allChars));
    }

    password = password.sort(() => Math.random() - 0.5);

    return password.join('');
}
