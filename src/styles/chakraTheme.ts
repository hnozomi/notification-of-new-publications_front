import { extendTheme } from '@chakra-ui/react';

export const CHAKRA_THEME = extendTheme({
  colors: {
    bg_blue_1: '#161DF0',
    bg_gray_2: '#504CF9',
    bg_gray_3: '#8E84FD',
    bg_gray_4: '#C5BBFF',
    bg_gray_5: '#F5F2FF',
  },
  styles: {
    global: {
      body: {
        bgColor: 'bg_gray_1',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      },
    },
  },
});
