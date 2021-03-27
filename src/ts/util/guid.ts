// Generates a UUID in XXXXXXXXXXXX
export default function guid() : string {

	// Generate a random 4 digit number in hex XXXX
	const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

	// String together 3 - 4 digit sections
	return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;

}
