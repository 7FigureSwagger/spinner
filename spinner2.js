let timer = 100;

for (let i = 0; i < 50; i++) {
	setTimeout(() => {
		process.stdout.write("\r|   ");
	}, 100);

	setTimeout(() => {
		process.stdout.write("\r/   ");
	}, (timer += 100));

	setTimeout(() => {
		process.stdout.write("\r-   ");
	}, (timer += 100));

	setTimeout(() => {
		// Need to escape the backslash since it's a special character.
		process.stdout.write("\r\\   ");
	}, (timer += 100));
}
