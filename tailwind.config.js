/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* elevated-dark-surface */
        input: "var(--color-input)", /* elevated-dark-surface */
        ring: "var(--color-ring)", /* quantum-blue */
        background: "var(--color-background)", /* deep-space-black */
        foreground: "var(--color-foreground)", /* white */
        primary: {
          DEFAULT: "var(--color-primary)", /* quantum-blue */
          foreground: "var(--color-primary-foreground)", /* deep-space-black */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* purple-accent */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* clear-red */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* elevated-dark-surface */
          foreground: "var(--color-muted-foreground)", /* muted-lavender-gray */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* bright-cyan */
          foreground: "var(--color-accent-foreground)", /* deep-space-black */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* elevated-dark-surface */
          foreground: "var(--color-popover-foreground)", /* white */
        },
        card: {
          DEFAULT: "var(--color-card)", /* elevated-dark-surface */
          foreground: "var(--color-card-foreground)", /* white */
        },
        success: {
          DEFAULT: "var(--color-success)", /* bright-green */
          foreground: "var(--color-success-foreground)", /* deep-space-black */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* amber */
          foreground: "var(--color-warning-foreground)", /* deep-space-black */
        },
        error: {
          DEFAULT: "var(--color-error)", /* clear-red */
          foreground: "var(--color-error-foreground)", /* white */
        },
        // Brand specific quantum colors
        quantum: {
          blue: "#00D4FF", /* quantum-blue */
          purple: "#8B5CF6", /* purple-accent */
          cyan: "#10FFCB", /* bright-cyan */
          surface: "#1A1A2E", /* elevated-dark-surface */
          space: "#0A0A0F", /* deep-space-black */
          text: {
            primary: "#FFFFFF", /* white */
            secondary: "#A0A0B8", /* muted-lavender-gray */
          }
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        heading: ["Orbitron", "sans-serif"],
        body: ["Inter", "sans-serif"],
        caption: ["Roboto Mono", "monospace"],
        data: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        'quantum-sm': '0 2px 8px rgba(0, 212, 255, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3)',
        'quantum-md': '0 4px 16px rgba(0, 212, 255, 0.15), 0 2px 6px rgba(0, 0, 0, 0.4)',
        'quantum-lg': '0 8px 32px rgba(0, 212, 255, 0.2), 0 4px 12px rgba(0, 0, 0, 0.5)',
        'quantum-xl': '0 16px 48px rgba(0, 212, 255, 0.25), 0 8px 24px rgba(0, 0, 0, 0.6)',
        'glow-primary': '0 0 20px rgba(0, 212, 255, 0.3)',
        'glow-secondary': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-accent': '0 0 20px rgba(16, 255, 203, 0.3)',
        'glow-success': '0 0 20px rgba(0, 255, 136, 0.3)',
      },
      animation: {
        'quantum-float': 'quantum-float 8s ease-in-out infinite',
        'quantum-pulse': 'quantum-pulse 2s ease-in-out infinite',
        'quantum-gradient': 'quantum-gradient 3s ease infinite',
        'mining-progress': 'mining-progress 2s ease-in-out infinite',
      },
      keyframes: {
        'quantum-float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.3' },
          '50%': { transform: 'translateY(-10px) rotate(180deg)', opacity: '0.8' },
        },
        'quantum-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(0, 212, 255, 0.5)' },
        },
        'quantum-gradient': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'mining-progress': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      backdropBlur: {
        'quantum': '10px',
      },
      backgroundImage: {
        'quantum-gradient': 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
        'quantum-border': 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(139, 92, 246, 0.2))',
        'ambient-pattern': `
          radial-gradient(circle at 25% 25%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
        `,
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}