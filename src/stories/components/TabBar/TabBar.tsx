import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

export type TabTheme = 'BASIC' | 'MAIN';
export interface Tab {
  title: string;
  contents: React.ReactNode;
  onClickTab?: () => void;
}
interface TabBarProps {
  tabs: Tab[];
  headTitle?: string;
  theme?: TabTheme;
  children?: React.ReactNode;
}

function TabBar({ headTitle, tabs, theme = 'BASIC', children }: TabBarProps) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = useCallback(
    (index) => {
      setActiveTab(index);
    },
    [setActiveTab],
  );

  return (
    <TabBarContainer className={theme === 'BASIC' ? 'basic' : 'main'}>
      {headTitle && (
        <div className="headTitle">
          <h6>{headTitle}</h6>
        </div>
      )}
      <ToonsTabBar tabTheme={theme}>
        <div className="tabHeader">
          <Swiper spaceBetween={10} slidesPerView={'auto'}>
            {tabs.map((_tab, index) => (
              <SwiperSlide key={index}>
                <Tab isActive={activeTab === index} tabTheme={theme}>
                  <button
                    onClick={() => {
                      handleTabClick(index);
                      _tab.onClickTab && _tab.onClickTab();
                    }}
                  >
                    <p>{_tab.title}</p>
                  </button>
                </Tab>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="tabContents">
          {tabs.length > 0 && tabs[activeTab].contents}
          {children}
        </div>
      </ToonsTabBar>
    </TabBarContainer>
  );
}

const Tab = styled.div<{ isActive: boolean; tabTheme: TabTheme }>`
  width: 11rem;
  max-width: 100%;
  height: 3rem;
  button {
    position: relative;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #fff;
    color: ${({ theme: { colors } }) => colors.gray40};
    border-radius: 0.36rem 0.36rem 0 0;
    border: 1px solid #000;
    border-bottom: none;
    transition: 0.2s;
    transform-origin: bottom center;
    p {
      &::after {
        display: block;
        width: 0;
        border-bottom: 5px solid ${({ theme: { colors } }) => colors.main};
        content: '';
        transition: 0.4s;
      }
    }
    &:hover {
      color: #000;
      font-size: 1.125rem;
    }
    ${({ isActive, theme: { colors }, tabTheme }) =>
      isActive &&
      css`
        height: 4.05rem;
        background-color: ${tabTheme === 'BASIC' ? colors.gray00 : colors.mainPale};
        color: #000;
        transform: translateY(-1rem);
        font-size: 1.25rem;
        p {
          font-weight: bold;
          &::after {
            width: 100%;
          }
        }
      `}
  }
`;

const ToonsTabBar = styled.div<{ tabTheme: TabTheme }>`
  div.tabHeader {
    position: relative;
    z-index: 20;
    width: 100%;
  }
  div.tabContents {
    position: relative;
    z-index: 10;
    width: 100%;
    min-height: 5rem;
    padding: 3rem;
    border: 1px solid #000;
  }
`;

const TabBarContainer = styled.div`
  width: 100%;
  .swiper {
    width: 100%;
    height: 4.05rem;
    align-items: flex-end;
    .swiper-wrapper {
      align-items: flex-end;
      .swiper-slide {
        max-width: 100%;
        height: 3rem;
      }
    }
  }

  div.headTitle {
    padding: 1rem 0;
    margin-bottom: 2rem;
    h6 {
      font-family: Black Han Sans;
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors.gray40};
    }
  }

  &.basic {
    div.headTitle {
      border-bottom: 2px solid #fff;
    }
    div.tabContents {
      background-color: ${({ theme: { colors } }) => colors.gray00};
    }
  }
  &.main {
    div.headTitle {
      border-bottom: 2px solid ${({ theme: { colors } }) => colors.main};
    }
    div.tabContents {
      background-color: ${({ theme: { colors } }) => colors.mainPale};
    }
  }

  @media screen and (min-width: 1280px) {
    .swiper .swiper-wrapper .swiper-slide {
      width: 10rem;
    }
  }

  @media screen and (max-width: 1279px) {
    .swiper .swiper-wrapper .swiper-slide {
      width: 9rem;
    }
  }

  @media screen and (max-width: 767px) {
    .swiper .swiper-wrapper .swiper-slide {
      width: 8rem;
    }
  }
`;

export default TabBar;
