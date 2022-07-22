import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Kakao } from '../../assets/kakao_icon.svg';
import { ReactComponent as Naver } from '../../assets/naver_icon.svg';
import { ReactComponent as Toons } from '../../assets/toons_icon.svg';

type Platform = 'NAVER' | 'KAKAO';

interface SectionBarProps {
  platform: Platform;
  isActive: boolean;
  onClickMore: () => void;
}
``;
const platformSVG: {
  [key in Platform]: JSX.Element;
} = {
  NAVER: <Naver className="platform" />,
  KAKAO: <Kakao className="platform" />,
};

function SectionBar({ platform, isActive, onClickMore }: SectionBarProps) {
  return (
    <BarContainer className={isActive ? 'active' : ''}>
      <figure>
        {platformSVG[platform]}
        <Toons />
      </figure>
      <button onClick={onClickMore}>more →</button>
    </BarContainer>
  );
}

const BarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 2.13rem;
  padding-bottom: 0.7rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray50};
  transform: scaleX(0);
  transform-origin: left center;
  overflow: hidden;
  transition: 0.4s;
  figure {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    svg.platform {
      height: 1.43rem;
      width: auto;
    }
  }
  button {
    font-size: 1.125rem;
    transition: 0.3s;
    &:hover {
      transform: skew(-20deg);
    }
  }
  &.active {
    transform: scaleX(1);
  }
`;

export default SectionBar;
