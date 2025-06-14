import localFont from 'next/font/local';

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