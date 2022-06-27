import React, { HTMLAttributes, useCallback, useEffect, useMemo, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import ToonsThemeProvider from 'src/styles/ToonsThemeProvider';
import styled, { css } from 'styled-components';
import { ReactComponent as SuccessIcon } from '../../assets/success_icon.svg';
import { ReactComponent as InfoIcon } from '../../assets/info_icon.svg';
import { ReactComponent as WarningIcon } from '../../assets/warning_icon.svg';
import { ReactComponent as ErrorIcon } from '../../assets/error_icon.svg';

type AlertType = 'INFO' | 'ERROR' | 'WARNING' | 'SUCCESS';
interface AlertTheme {
  icon: React.ReactElement;
  bgColor: string;
  titleColor: string;
  fontColor: string;
}
export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  alertType: AlertType;
  alertTitle: string;
  alertContents?: React.ReactNode;
}

function Alert({ open, alertType, alertContents, alertTitle }: AlertProps) {
  const alertTheme: AlertTheme = useMemo(() => {
    const getAlertTheme = (): AlertTheme => {
      switch (alertType) {
        case 'SUCCESS':
          return {
            icon: <SuccessIcon />,
            bgColor: '#DDEDDE',
            titleColor: '#0B200B',
            fontColor: '#35823B',
          };
        case 'ERROR':
          return {
            icon: <ErrorIcon />,
            bgColor: '#FDDCD9',
            titleColor: '#340704',
            fontColor: '#99312B',
          };
        case 'INFO':
          return {
            icon: <InfoIcon />,
            bgColor: '#D9E7FF',
            titleColor: '#000E33',
            fontColor: '#2159B3',
          };
        case 'WARNING':
          return {
            icon: <WarningIcon />,
            bgColor: '#FEE5B2',
            titleColor: '#321A00',
            fontColor: '#B2821D',
          };
        default:
          throw new Error('unknown alertType');
      }
    };
    return getAlertTheme();
  }, [alertType]);
  const [alertOpen, setAlertOpen] = useState(open);

  const handleAlertClose = useCallback(() => {
    setAlertOpen(false);
  }, []);

  useEffect(() => {
    setAlertOpen(open);
    const closeAlertIn5s = setInterval(() => {
      handleAlertClose();
    }, 5000);
    if (!open) {
      clearInterval(closeAlertIn5s);
    }

    return () => {
      clearInterval(closeAlertIn5s);
      handleAlertClose();
    };
  }, [open]);

  return (
    <ToonsThemeProvider>
      <CSSTransition in={alertOpen} timeout={500}>
        <AlertContainer alertTheme={alertTheme} hasContents={!!alertContents} onClick={handleAlertClose}>
          <figure className="alertIcon">{alertTheme.icon}</figure>
          {alertTitle && <h6>{alertTitle}</h6>}
          <span className="alertContents">{alertContents}</span>
        </AlertContainer>
      </CSSTransition>
    </ToonsThemeProvider>
  );
}

const AlertContainer = styled.div<{ alertTheme: AlertTheme; hasContents: boolean }>`
  position: fixed;
  z-index: 2000;
  top: 5%;
  left: 48%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.7rem 0.7rem 0.7rem 2.7rem;
  border-radius: 0.5rem;
  box-shadow: 0px 3px 6px #00000015;
  opacity: 0;
  transition: 0.3s;

  figure.alertIcon {
    position: absolute;
    top: 0.7rem;
    left: 0.7rem;
    * {
      height: 1.43rem;
    }
  }

  h6 {
    font-size: 1.125rem;
    height: 1.43rem;
    line-height: 1.43rem;
  }
  span.alertContents {
    font-size: 0.95rem;
  }

  &.enter-done {
    opacity: 1;
    left: 50%;
  }
  &.exit-done {
    opacity: 0;
    left: 48%;
  }

  ${({ alertTheme, hasContents }) => {
    return css`
      background-color: ${alertTheme.bgColor};
      gap: ${hasContents ? '0.5rem' : 0};
      h6 {
        color: ${alertTheme.titleColor};
      }
      span.alertContents {
        color: ${alertTheme.fontColor};
      }
    `;
  }}
`;

export default Alert;
