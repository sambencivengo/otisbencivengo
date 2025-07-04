import localFont from 'next/font/local';
import { Cormorant_Garamond, EB_Garamond } from 'next/font/google';

export const jules = localFont({
  src: [
    {
      path: './fonts/jules/JulesText-BookSwashes.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/jules/JulesText-MediumSwashes.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/jules/JulesText-BoldSwashes.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/jules/JulesText-BlackSwashes.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/jules/JulesText-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-jules',
  display: 'swap',
  preload: true,
});

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-eb-garamond',
  display: 'swap',
});