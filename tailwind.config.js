module.exports = {
    content: ['./content/**/*.{njk,md}', './content/**/*.svg'],
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
      daisyui: {
        themes: ["light"], // Or just "light" if you only want light mode
        // darkTheme: "light", // Optional: Explicitly sets the light theme as the default for dark mode
      },
  };