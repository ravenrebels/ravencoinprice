// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
        public: "/",
        src: "/",
    },
    plugins: [
        [
            "@snowpack/plugin-webpack",
            {
                sourceMap: true,
            },
        ],
    ],
};
