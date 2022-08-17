import React from 'react';
import * as icons from '../../assets/icons';

export type IconType = keyof typeof icons;

interface IconProps {
  icon: IconType;
}

function Icon({ icon }: IconProps) {
  const SVGIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = icons[icon];

  return <SVGIcon />;
}

export default Icon;
