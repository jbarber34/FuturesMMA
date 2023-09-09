/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        futuresWhite: '#FFFFFF',
        futuresBlack: '#010B13',
        futuresRed: '#C02C25',
        mmaGold: '#FFC000',
        winnerGreen: '#13A400',
        lossesRed: '#C3031C',
      },
      borderWidth: {
        16: '16px',
      },
      fontSize: {
        '12px': '12px',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      margin: {
        120: '35rem',
        134: '40rem',
      },
      height: {
        98: '26rem',
        100: '28rem',
        104: '32rem',
        108: '36rem',
        112: '40rem',
        116: '44rem',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        bump: {
          '0%, 100%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(0.9)' },
          '30%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1.15)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        bump: 'bump 1s ease-out',
      },
    },
  },
  plugins: [],
};
