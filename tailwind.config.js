/**
 * Alamy Plugin — Tailwind config
 *
 * Token names match tokens.css and the Figma file's Variables.
 * Use semantic classes in components (bg-action, text-primary, etc.)
 * rather than primitive ones (bg-green-500) wherever possible.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primitives
        green: {
          100: '#E6FFF1',
          500: '#00FF70',
          600: '#00E063',
        },
        grey: {
          50:  '#FAFAFA',
          100: '#F2F2F2',
          200: '#E5E5E5',
          300: '#CCCCCC',
          500: '#808080',
          700: '#4D4D4D',
          900: '#1A1A1A',
          950: '#0A0A0A',
        },
        red: {
          500: '#E5484D',
        },

        // Semantic
        bg: {
          DEFAULT: 'var(--color-bg)',
          subtle:  'var(--color-bg-subtle)',
          hover:   'var(--color-bg-hover)',
          inverse: 'var(--color-bg-inverse)',
        },
        text: {
          DEFAULT:    'var(--color-text)',
          secondary:  'var(--color-text-secondary)',
          tertiary:   'var(--color-text-tertiary)',
          inverse:    'var(--color-text-inverse)',
          'on-action': 'var(--color-text-on-action)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          strong:  'var(--color-border-strong)',
          focus:   'var(--color-border-focus)',
        },
        action: {
          DEFAULT: 'var(--color-action)',
          hover:   'var(--color-action-hover)',
          subtle:  'var(--color-action-subtle)',
        },
        danger: 'var(--color-danger)',
      },

      spacing: {
        // 4px-base scale, matches Figma primitives
        '1':  '4px',
        '2':  '8px',
        '3':  '12px',
        '4':  '16px',
        '5':  '20px',
        '6':  '24px',
        '8':  '32px',
        '10': '40px',
        '12': '48px',
      },

      borderRadius: {
        none: '0',
        sm:   '4px',
        md:   '6px',
        lg:   '8px',
        pill: '9999px',
      },

      borderWidth: {
        '1': '1px',
      },

      fontFamily: {
        display: ['"PP Formula Condensed"', '"Arial Narrow"', 'sans-serif'],
        ui:      ['"Noto Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },

      fontSize: {
        '11': ['11px', { lineHeight: '14px', letterSpacing: '0.02em' }],
        '12': ['12px', { lineHeight: '17px' }],
        '13': ['13px', { lineHeight: '18px' }],
        '15': ['15px', { lineHeight: '21px' }],
        '18': ['18px', { lineHeight: '24px' }],
        '24': ['24px', { lineHeight: '29px' }],
        '32': ['32px', { lineHeight: '38px' }],
      },

      fontWeight: {
        regular:  '400',
        medium:   '500',
        semibold: '600',
        bold:     '700',
      },
    },
  },
  plugins: [],
};
