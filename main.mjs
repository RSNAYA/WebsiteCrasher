document.documentElement.remove();

WebAssembly.instantiateStreaming(
	fetch(
		"./main.wasm", {
			cache: "force-cache"
		}
	), {
		location: {
			reload: location.reload.bind(location, false)
		}
	}
);