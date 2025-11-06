# Landing Page: Framfolio

This is one of my casestudy project. THis is build with React + NextJs ecocystem inaddition to that i have used Tailwind CSS & Typescript to give it a concrete code base. This is well documented and components are resuable for different sections.

To run the development server:

first download the git repository then

```bash
pnpm install
pnpm run dev
```

this will serve the app on [http://localhost:3000](http://localhost:3000).
Open it with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Demo

Preview:

live:

## Features

-  Live previews
-  Fullscreen mode
-  Cross platform

## Authors

-  [@mhdAshraful](https://www.github.com/mhdAshraful)

# Hi, I'm Ashraful! 👋

## 🚀 About Me

I'm a full stack developer havily focused on frontend.

## 🛠 Skills

Javascript/TypeScript, HTML, CSS, React, NextJS, Tailwind CSS, SCSS, StyledComponents, MongoDB, SQL, PostgreSQL, Prisma, ThreeJS, WebGL,GSAP, Framer Motion, GLSL, Vite etc.

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=orange)](https://mhdAshraful.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mhdashraful)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/mhdAshraful)

## Other Common Github Profile Sections

👩‍💻 I'm currently working on...

🧠 I'm currently learning...

👯‍♀️ I'm looking to collaborate on...

🤔 I'm looking for help with...

💬 Ask me about...

📫 How to reach me...

😄 Pronouns...

⚡️ Fun fact...

Perfect — you’re thinking in the right direction.
If you want **ShadCN UI** components to align with your **custom Tailwind design system**, you should define your own color palette **upfront** in `tailwind.config.ts` (or `.js`).

Let’s go step-by-step 👇

---

### 🧩 1. Base concept

Tailwind allows you to define **custom color scales** under `theme.extend.colors`.
ShadCN components reference **CSS variables** for themes (like `--primary`, `--secondary`, etc.), so we’ll bridge your custom palette with those variables.

---

### 🪶 2. Folder and setup

You already have:

```
app/
  globals.css
tailwind.config.ts
postcss.config.mjs
```

That’s perfect — you’ll edit `tailwind.config.ts` and `globals.css`.

---

### 🎨 3. Define your color palette in `tailwind.config.ts`

Let’s create structured color definitions (based on your designer’s naming):

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"], // allows dark theme toggle
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				// Primary brand colors
				primary: {
					50: "#f5f3ff",
					100: "#ede9fe",
					200: "#ddd6fe",
					300: "#c4b5fd",
					400: "#a78bfa",
					500: "#8b5cf6",
					600: "#7c3aed",
					700: "#6d28d9",
					800: "#5b21b6",
					900: "#4c1d95",
				},
				gray: {
					50: "#f9fafb",
					100: "#f3f4f6",
					200: "#e5e7eb",
					300: "#d1d5db",
					400: "#9ca3af",
					500: "#6b7280",
					600: "#4b5563",
					700: "#374151",
					800: "#1f2937",
					900: "#111827",
				},
				neutral: {
					50: "#fafafa",
					100: "#f4f4f5",
					200: "#e4e4e7",
					300: "#d4d4d8",
					400: "#a1a1aa",
					500: "#71717a",
					600: "#52525b",
					700: "#3f3f46",
					800: "#27272a",
					900: "#18181b",
				},
				violet: {
					50: "#f5f3ff",
					100: "#ede9fe",
					200: "#ddd6fe",
					300: "#c4b5fd",
					400: "#a78bfa",
					500: "#8b5cf6",
					600: "#7c3aed",
					700: "#6d28d9",
					800: "#5b21b6",
					900: "#4c1d95",
				},
				black: "#000000",
				white: "#ffffff",
				slate: {
					50: "#f8fafc",
					100: "#f1f5f9",
					200: "#e2e8f0",
					300: "#cbd5e1",
					400: "#94a3b8",
					500: "#64748b",
					600: "#475569",
					700: "#334155",
					800: "#1e293b",
					900: "#0f172a",
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};

export default config;
```

---

### 💅 4. Connect Tailwind with ShadCN theming variables

ShadCN uses CSS variables for its theme system, so we’ll map them to your color choices.

Edit your `globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
	:root {
		/* Brand + UI Theme Variables */
		--background: theme(colors.white);
		--foreground: theme(colors.gray.900);
		--card: theme(colors.white);
		--card-foreground: theme(colors.gray.900);
		--popover: theme(colors.white);
		--popover-foreground: theme(colors.gray.900);
		--primary: theme(colors.primary.600);
		--primary-foreground: theme(colors.white);
		--secondary: theme(colors.gray.100);
		--secondary-foreground: theme(colors.gray.800);
		--muted: theme(colors.slate.100);
		--muted-foreground: theme(colors.slate.600);
		--accent: theme(colors.violet.500);
		--accent-foreground: theme(colors.white);
		--border: theme(colors.gray.200);
		--input: theme(colors.gray.200);
		--ring: theme(colors.violet.500);
		--radius: 0.5rem;
	}

	.dark {
		--background: theme(colors.gray.900);
		--foreground: theme(colors.gray.50);
		--card: theme(colors.gray.800);
		--card-foreground: theme(colors.gray.50);
		--popover: theme(colors.gray.800);
		--popover-foreground: theme(colors.gray.50);
		--primary: theme(colors.violet.500);
		--primary-foreground: theme(colors.white);
		--secondary: theme(colors.gray.700);
		--secondary-foreground: theme(colors.gray.50);
		--muted: theme(colors.gray.700);
		--muted-foreground: theme(colors.gray.400);
		--accent: theme(colors.violet.600);
		--accent-foreground: theme(colors.white);
		--border: theme(colors.gray.700);
		--input: theme(colors.gray.700);
		--ring: theme(colors.violet.600);
	}
}
```

Now all ShadCN components (Button, Card, etc.) automatically follow your design system colors.

---

### 🧱 5. Generate a ShadCN component

For example:

```bash
pnpm dlx shadcn@latest add button
```

Then open the generated `components/ui/button.tsx`.
You’ll see classnames like `bg-primary text-primary-foreground`.
These are linked directly to your theme variables → which you’ve defined above.
So if your designer later changes “Primary 500” → `#7a3cf2`, just update your palette.

---

### 🧠 6. Bonus — make future customization easier

To keep it clean:

-  Group all design tokens (colors, radius, spacing) in `/styles/tokens.css` or `/styles/theme.css`
-  Import them into `globals.css`
-  Optionally connect to Figma tokens with [Style Dictionary](https://amzn.github.io/style-dictionary/)

---

Would you like me to show a **real Button component** example using your palette (so you can see how ShadCN applies these variables in Tailwind)?
