import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';

interface Tab {
  title: string;
  contents: React.ReactNode;
}
interface LogoProps {
  headTitle?: string;
  tabs: Tab[];
}

function TabBar({ headTitle, tabs }: LogoProps) {
  const [activeTab, setActiveTab] = useState(0);

  const onClickTab = useCallback(
    (index) => {
      setActiveTab(index);
    },
    [setActiveTab],
  );

  return (
    <TabBarContainer>
      {headTitle && (
        <div className="headTitle">
          <h6>{headTitle}</h6>
        </div>
      )}
      <ToonsTabBar>
        <ul className="tabHeader">
          {tabs.map((_tab, index) => (
            <Tab key={index} isActive={activeTab === index}>
              <button onClick={() => onClickTab(index)}>
                <p>{_tab.title}</p>
              </button>
            </Tab>
          ))}
        </ul>
        <div className="tabContents">{tabs[activeTab].contents}</div>
      </ToonsTabBar>
    </TabBarContainer>
  );
}

const Tab = styled.li<{ isActive: boolean }>`
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
        border-bottom: 3px solid ${({ theme: { colors } }) => colors.main};
        content: '';
        transition: 0.4s;
      }
    }
    &:hover {
      color: #000;
      font-size: 1.125rem;
    }
    ${({ isActive, theme }) =>
      isActive &&
      css`
        height: 4.05rem;
        background-color: ${theme.colors.gray00};
        color: #000;
        font-weight: bold;
        transform: translateY(-1rem);
        font-size: 1.25rem;
        p {
          &::after {
            width: 100%;
          }
        }
      `}
  }
`;

const ToonsTabBar = styled.div`
  ul.tabHeader {
    display: flex;
    justify-content: flex-start;
    gap: 0.5rem;
    width: 100%;
  }
  div.tabContents {
    position: relative;
    z-index: 10;
    width: 100%;
    min-height: 5rem;
    padding: 3rem;
    background-color: ${({ theme: { colors } }) => colors.gray00};
    border: 1px solid #000;
  }
`;

const TabBarContainer = styled.div`
  width: 100%;

  div.headTitle {
    padding: 1rem 0;
    margin-bottom: 2rem;
    border-bottom: 2px solid #fff;
    h6 {
      font-family: Black Han Sans;
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors.gray40};
    }
  }
`;

export default TabBar;
