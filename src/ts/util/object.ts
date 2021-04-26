export function deepKeys(t: { [key: string]: any; } | string, path: string[] = []): string[] {
	return Object(t) === t ? Object.entries(t).flatMap(([ k, v ]) => deepKeys(v, [ ...path, k ])) : [ path.join(".") ];
}

export function deepProp(object: { [key: string]: any; } | string, propString: string): any {
	let value = object;
	const props: string[] = propString.split(".");
	for (let index = 0; index < props.length; index += 1) {
		if (props[index] === undefined) break;
		if (typeof value === "object") value = value[props[index]];
	}
	return value;
}

Object.defineProperty(Object, "deepProp", { value: deepProp, writable: false });
Object.defineProperty(Object, "deepKeys", { value: deepKeys, writable: false });
