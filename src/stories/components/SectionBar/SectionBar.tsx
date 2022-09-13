import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Toons } from '../../assets/toons-logo-lettering.svg';

type Platform = 'NAVER' | 'KAKAO';

interface SectionBarProps {
  platform: Platform;
  isActive: boolean;
  onClickMore: () => void;
}

function SectionBar({ platform, isActive, onClickMore }: SectionBarProps) {
  return (
    <BarContainer className={isActive ? 'active' : ''}>
      <div className="titleBox">
        <h5>{platform}</h5>
        <Toons />
      </div>
      <button onClick={onClickMore}>more →</button>
    </BarContainer>
  );
}

const BarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.14rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray50};
  transform: scaleX(0);
  transform-origin: left center;
  transition: 0.4s;
  overflow: hidden;
  div.titleBox {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    h5 {
      height: 3rem;
      line-height: 3rem;
      font-size: 2rem;
      font-family: Black Han Sans, sans-serif;
      color: ${({ theme }) => theme.colors.main};
      text-shadow: 2px 2px rgba(0, 0, 0, 0.7);
    }
  }
  button {
    height: 100%;
    padding-left: 1rem;
    box-sizing: border-box;
    font-size: 1.125rem;
    transition: 0.3s;
    &:hover {
      transform: skew(-20deg);
    }
  }
  &.active {
    transform: scaleX(1);
  }

  @media screen and (max-width: 414px) {
    div.titleBox {
      h5 {
        height: 2rem;
        line-height: 2rem;
        font-size: 1.75rem;
      }
      svg {
        transform: scale(0.8, 0.8) translate(-5px, -2px);
      }
    }
  }
`;

export default SectionBar;
