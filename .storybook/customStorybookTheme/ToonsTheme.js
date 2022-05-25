import { create } from '@storybook/theming';
import ToonsLogo from '../../static/logo_dark@2x.png';

export default create({
  base: 'dark',
  brandTitle: 'TOONS Storybook',
  brandUrl: '/',
  brandImage: ToonsLogo,

  colorPrimary: '#A4F4C4',
  colorSecondary: '#777',

  appBg: '#2B2B2B',
  appContentBg: '#999',
  appBorderColor: '#EDEDED',
  appBorderRadius: 10,

  // Text colors
  textColor: '#EDEDED',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barSelectedColor: '#A4F4C4',
});
