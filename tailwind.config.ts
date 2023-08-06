import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-image': "url('/img/toxiang.jpg')",
      })
    }
  },
  variants: {},
  plugins: [],
} satisfies Config;