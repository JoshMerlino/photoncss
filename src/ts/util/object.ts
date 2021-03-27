export const deepKeys = (t: any, path: string[] = []) : string[] => Object(t) === t ? Object.entries(t).flatMap(([ k, v ]) => deepKeys(v, [ ...path, k ])) : [ path.join(".") ];
Object.defineProperty(Object, "deepKeys", { value: deepKeys, writable: false });

export const deepProp = (object: any, propString: string) : any => {
	let value = object;
	const props = propString.split(".");
	for (let index = 0; index < props.length; index += 1) {
		if (props[index] === undefined) break;
        value = value[props[index]];
	}
    return value;
};
Object.defineProperty(Object, "deepProp", { value: deepProp, writable: false });
