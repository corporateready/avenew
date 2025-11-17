const config = {
  plugins: {
    "@tailwindcss/postcss": {
      config: "./tailwind.config.js",
    },
    'cssnano':
      process.env.NODE_ENV === "production"
        ? {
            preset: [
              "default",
              {
                discardComments: { removeAll: true },
              },
            ],
          }
        : false,
  },
};

export default config;
