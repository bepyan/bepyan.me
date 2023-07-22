import { Source_Code_Pro as FontMono } from 'next/font/google';
import localFont from 'next/font/local';

export const fontSansVariable = localFont({
  variable: '--font-sans-variable',
  display: 'swap',
  src: '../assets/fonts/PretendardVariable.woff2',
});

export const fontSans = localFont({
  variable: '--font-sans',
  display: 'swap',
  src: [
    {
      path: '../assets/fonts/Pretendard-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Pretendard-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Pretendard-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Pretendard-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Pretendard-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
  ],
});

export const fontSerif = localFont({
  variable: '--font-serif',
  display: 'swap',
  src: [
    {
      path: '../assets/fonts/AritaBuri-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/AritaBuri-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/AritaBuri-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/AritaBuri-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/AritaBuri-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
  ],
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});
