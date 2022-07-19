import React, { HTMLAttributes, useCallback, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import { ReactComponent as AlertIcon } from '../../assets/alert-icon.svg';
import { ReactComponent as ActiveAlertIcon } from '../../assets/alert-icon-active.svg';
import ToonsThemeProvider from 'src/styles/ToonsThemeProvider';

type DayOfWeek = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  name: string;
  day: DayOfWeek;
  thumbnail: string;
  link: string;
  onToggleItem: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isActive?: boolean;
}

const days: {
  [key in DayOfWeek]: string;
} = {
  MONDAY: '월요',
  TUESDAY: '화요',
  WEDNESDAY: '수요',
  THURSDAY: '목요',
  FRIDAY: '금요',
  SATURDAY: '토요',
  SUNDAY: '일요',
};

const ListItem = ({
  name,
  day,
  thumbnail,
  link,
  onToggleItem,
  isActive: initialActive = false,
  ...props
}: ListItemProps) => {
  const [isActive, setIsActive] = useState<boolean>(initialActive);

  const onClickItem = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      onToggleItem(e);
      setIsActive((prev) => !prev);
    },
    [onToggleItem],
  );

  const onClickViewLink = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!link) return e.preventDefault();
      window.open(link, '_blank');
    },
    [link],
  );

  return (
    <ToonsThemeProvider>
      <ToonsLi isActive={isActive} {...props}>
        <ImageFigure>
          <img src={thumbnail || 'https://via.placeholder.com/90x90'} alt={name + 'thumbnail'} />
        </ImageFigure>
        <ContentsBox>
          <button className={isActive ? 'active alertBtn' : 'alertBtn'} onClick={onClickItem}>
            {isActive ? <ActiveAlertIcon /> : <AlertIcon />}
          </button>
          <h5>{name}</h5>
          <span className="day">{days[day]}웹툰</span>
          <Button size="small" fullWidth buttonTheme={isActive ? 'secondary' : 'primary'} onClick={onClickViewLink}>
            VIEW →
          </Button>
        </ContentsBox>
      </ToonsLi>
    </ToonsThemeProvider>
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
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 90px);

  h5 {
    font-size: 1.25rem;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.25rem;
    white-space: nowrap;
    word-break: break-all;
    color: ${(props) => props.theme.colors.gray50};
  }

  button.alertBtn {
    position: absolute;
    top: 0;
    right: 0;
    svg {
      width: 100%;
    }

    &.active {
      animation-name: alert;
      animation-duration: 0.8s;
      animation-timing-function: ease-in-out;
    }
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

  @keyframes alert {
    0% {
      transform: scale(1, 1) rotate(45deg);
    }
    50% {
      transform: scale(1.5, 1.5) translateY(-10px) rotate(-45deg);
    }
    100% {
      transform: scale(1, 1) rotate(0);
    }
  }
`;

const ToonsLi = styled.li<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  width: 243px;
  min-height: 7.86rem;
  padding: 0.7rem;
  gap: 1rem;
  border: 1px solid ${(props) => props.theme.colors.main};
  border-radius: 0.36rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='210' height='112.396' viewBox='0 0 210 112.396'%3E%3Cg id='Group_20' data-name='Group 20' transform='translate(-72.231 -122.735)' opacity='0.6'%3E%3Cpath id='Path_22' data-name='Path 22' d='M183.083,138.37l96.173,27.15,1.573-9.512c.454-2.784-.851-5.513-2.914-6.1l-94.762-26.752a11.238,11.238,0,0,0-6.227.026L75.293,152.776c-2.075.6-3.41,3.353-2.983,6.141L73.8,168.4l103.058-30A11.238,11.238,0,0,1,183.083,138.37Z' fill='%23ededed'/%3E%3Cpath id='Path_23' data-name='Path 23' d='M83.311,390.68,95.6,389.675v40.609h6.567a4.187,4.187,0,0,0,3.36-1.644,5.991,5.991,0,0,0,1.352-3.929V388.58l13.365-1.1V373.921l-36.929,4.111Z' transform='translate(-9.146 -199.341)' fill='%23ededed'/%3E%3Cpath id='Path_24' data-name='Path 24' d='M330.212,376.935a18.527,18.527,0,0,0-10.391-3.015q-1,0-3.013.183a22.092,22.092,0,0,0-10.777,4.522,24.822,24.822,0,0,0-7.494,10.185,39.495,39.495,0,0,0-2.742,15.439,36.541,36.541,0,0,0,2.742,14.981,20.505,20.505,0,0,0,7.494,9.181,19.476,19.476,0,0,0,10.777,3.06,21.441,21.441,0,0,0,11.782-3.38,23.08,23.08,0,0,0,8.42-10.231q3.129-6.851,3.129-16.625a38.025,38.025,0,0,0-2.665-15.165A20.154,20.154,0,0,0,330.212,376.935Zm-5.485,38.641q-3.207,4.659-8.228,4.659a8.615,8.615,0,0,1-7.416-4.248q-2.86-4.247-2.859-12.469,0-8.86,3.322-13.52t8.421-4.659q4.4,0,7.185,4.248t2.781,12.469Q327.933,410.919,324.727,415.576Z' transform='translate(-184.538 -199.341)' fill='%23ededed'/%3E%3Cpath id='Path_25' data-name='Path 25' d='M592.061,376.935a18.526,18.526,0,0,0-10.391-3.015q-1,0-3.013.183a22.092,22.092,0,0,0-10.777,4.522,24.821,24.821,0,0,0-7.494,10.185,39.494,39.494,0,0,0-2.743,15.439,36.541,36.541,0,0,0,2.743,14.981,20.5,20.5,0,0,0,7.494,9.181,19.476,19.476,0,0,0,10.777,3.06,21.44,21.44,0,0,0,11.782-3.38,23.078,23.078,0,0,0,8.421-10.231q3.129-6.851,3.13-16.625a38.025,38.025,0,0,0-2.666-15.165A20.155,20.155,0,0,0,592.061,376.935Zm-5.485,38.641q-3.207,4.659-8.228,4.659a8.615,8.615,0,0,1-7.416-4.248q-2.86-4.247-2.859-12.469,0-8.86,3.322-13.52t8.421-4.659q4.4,0,7.185,4.248t2.781,12.469Q589.782,410.919,586.576,415.576Z' transform='translate(-400.679 -196.341)' fill='%23ededed'/%3E%3Cpath id='Path_26' data-name='Path 26' d='M850.308,373.746a6.879,6.879,0,0,0-1.352,4.2v27.314l-16.224-30.968-10.584,1.279v52.344h10.584V396.4L848.8,427.916h12.129V370.822l-7.262.913A4.6,4.6,0,0,0,850.308,373.746Z' transform='translate(-619.012 -196.881)' fill='%23ededed'/%3E%3Cpath id='Path_27' data-name='Path 27' d='M1101.636,406.443a16.516,16.516,0,0,0-1.352-5.891,17.3,17.3,0,0,0-3.708-5.527,14.176,14.176,0,0,0-5.833-3.562,37.43,37.43,0,0,0-6.721-1.553,31.059,31.059,0,0,1-3.515-.823,3.849,3.849,0,0,1-1.893-1.37,3.576,3.576,0,0,1-.7-2.375,6.356,6.356,0,0,1,.734-2.969,4.1,4.1,0,0,1,1.97-1.964,9.551,9.551,0,0,1,4.172-1q4.557,0,8.421,4.477l6.876-8.953a19.632,19.632,0,0,0-5.639-4.8,14.434,14.434,0,0,0-7.34-1.964,10.744,10.744,0,0,0-1.623.091,23.32,23.32,0,0,0-10.159,3.289,19.92,19.92,0,0,0-6.374,6.851,16.317,16.317,0,0,0-2.009,8.313,17.1,17.1,0,0,0,1.12,6.257,11.271,11.271,0,0,0,3.515,4.8,21.031,21.031,0,0,0,7.031,3.746l3.09.914a27.725,27.725,0,0,1,3.592,1.05,6.812,6.812,0,0,1,3.941,3.152,4.426,4.426,0,0,1,.656,2.466,7.45,7.45,0,0,1-.618,2.924,4.2,4.2,0,0,1-2.124,2.284,7.688,7.688,0,0,1-3.593.822,9.917,9.917,0,0,1-4.713-1.187,22.069,22.069,0,0,1-4.095-2.74,4.18,4.18,0,0,0-2.859-1.1,4.439,4.439,0,0,0-2.163.549,4.656,4.656,0,0,0-1.7,1.644l-3.09,4.476a22.415,22.415,0,0,0,3.824,4.43,26.353,26.353,0,0,0,7.03,4.613,18.635,18.635,0,0,0,9.387,1.644q10.352-.639,13.52-7.216A29.2,29.2,0,0,0,1101.636,406.443Z' transform='translate(-819.421 -194.775)' fill='%23ededed'/%3E%3C/g%3E%3C/svg%3E%0A");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.main : props.theme.name === 'dark' ? 'transparent' : '#fff'};
  transition: 0.3s ease-in-out;
`;

export default ListItem;
