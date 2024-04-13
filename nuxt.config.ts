// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/seo",
        "@nuxtjs/tailwindcss",
        "@vueuse/nuxt",
        "nuxt-headlessui",
        "@nuxt/fonts",
        "nuxt-icon",
    ],
    app: {
        head: {
            link: [
                {
                    rel: "icon",
                    href: "/favicon.png",
                    type: "image/png",
                },
            ],
            htmlAttrs: { lang: "en-us" },
        },
    },
    nitro: {
        compressPublicAssets: {
            gzip: false,
            brotli: false,
        },
        preset: "bun",
        minify: true,
        prerender: {
            failOnError: true,
        },
    },
    devServer: {
        port: 5173,
    },
    schemaOrg: {
        enabled: false,
    },
    ogImage: {
        enabled: false,
    },
    // Make the happy-dom package only available in the server context
    runtimeConfig: {
        public: {
            language: "en-US",
            titleSeparator: "·",
            siteName: "Lysand",
            trailingSlash: true,
        },
    },
    site: {
        url: "https://dev.lysand.org",
    },
});
