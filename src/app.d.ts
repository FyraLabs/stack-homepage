declare global {
	namespace app {
		interface platform {
			caches: cachestorage;
			cf?: incomingrequestcfproperties;
			ctx: executioncontext;
			env: env;
		}
	}
}

export {};
