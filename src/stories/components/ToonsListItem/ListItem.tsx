import React, { HTMLAttributes, useCallback, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import { ReactComponent as AlertIcon } from '../../assets/alert-icon.svg';
import { ReactComponent as ActiveAlertIcon } from '../../assets/alert-icon-active.svg';
import ToonsItemBG from '../../assets/toons-item-bg.svg';

type Days = 'MON' | 'TUE' | 'WED' | 'THUR' | 'FRI' | 'SAT' | 'SUN';

export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  name: string;
  author: string;
  day: Days;
  thumbnailURL: string;
  viewLink: string;
  onToggleItem: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const days: {
  [key in Days]: string;
} = {
  MON: '월요',
  TUE: '화요',
  WED: '수요',
  THUR: '목요',
  FRI: '금요',
  SAT: '토요',
  SUN: '일요',
};

const ListItem = ({
  name,
  author,
  day,
  thumbnailURL,
  viewLink,
  onToggleItem = console.log,
  ...props
}: ListItemProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const onClickItem = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      onToggleItem(e);
      setIsActive((prev) => !prev);
    },
    [onToggleItem],
  );

  const onClickViewLink = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!viewLink) return e.preventDefault();
      window.open(viewLink, '_blank');
    },
    [viewLink],
  );

  return (
    <ToonsLi isActive={isActive} {...props}>
      <ImageFigure>
        <img src={thumbnailURL || 'https://via.placeholder.com/90x90'} alt={name + 'thumbnail'} />
      </ImageFigure>
      <ContentsBox>
        <button className="alertBtn" onClick={onClickItem}>
          {isActive ? <ActiveAlertIcon /> : <AlertIcon />}
        </button>
        <h5>{name}</h5>
        <span className="author">{author}</span>
        <span className="day">{days[day]}웹툰</span>
        <Button size="small" fullWidth buttonTheme={isActive ? 'secondary' : 'primary'} onClick={onClickViewLink}>
          VIEW →
        </Button>
      </ContentsBox>
    </ToonsLi>
  );
};

const ImageFigure = styled.figure`
  width: 90px;
  height: 90px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const ContentsBox = styled.div`
  position: relative;
  display: flex;
  gap: 0.36rem;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 90px);

  h5 {
    font-size: 1.43rem;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.25rem;
    white-space: nowrap;
    color: ${(props) => props.theme.colors.gray50};
  }

  button.alertBtn {
    position: absolute;
    top: 0;
    right: 0;
  }

  span.author {
    display: block;
    font-size: 1.25rem;
    line-height: 1.25rem;
    color: ${(props) => props.theme.colors.gray40};
  }

  span.day {
    display: block;
    margin-bottom: 0.2rem;
    font-size: 0.875rem;
    line-height: 0.875rem;
  }
`;

const ToonsLi = styled.li<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  width: 20rem;
  min-height: 7.86rem;
  padding: 0.7rem;
  gap: 0.7rem;
  border: 1px solid ${(props) => props.theme.colors.main};
  border-radius: 0.36rem;
  background-image: url(${ToonsItemBG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.main : props.theme.name === 'dark' ? 'transparent' : '#fff'};
  @media screen and (min-width: 1340px) {
  }
  transition: 0.3s ease-in-out;

  ${(props) =>
    props.isActive &&
    `
  
  `};
`;

export default ListItem;
