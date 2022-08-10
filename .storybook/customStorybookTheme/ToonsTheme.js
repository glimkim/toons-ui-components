import { create } from '@storybook/theming';
import ToonsLogo from '../../static/logo-dark.png';

export default create({
  base: 'dark',
  brandTitle: 'TOONS Storybook',
  brandUrl: '/',
  brandImage: ToonsLogo,

  colorPrimary: '#92CFFF',
  colorSecondary: '#777',

  appBg: '#2B2B2B',
  appContentBg: '#999',
  appBorderColor: '#EDEDED',
  appBorderRadius: 10,

  // Text colors
  textColor: '#EDEDED',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barSelectedColor: '#92CFFF',
});
