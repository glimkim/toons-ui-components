import React, { useState, useCallback, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import ToonsThemeProvider from 'src/styles/ToonsThemeProvider';
import styled from 'styled-components';

interface DialogProps {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

function Dialog({ open, children, onClose }: DialogProps) {
  const [dialogOpen, setDialogOpen] = useState<boolean>(open);
  const handleClose = useCallback(() => {
    setDialogOpen(false);
    onClose();
  }, []);

  useEffect(() => {
    setDialogOpen(open);

    return () => {
      setDialogOpen(false);
    };
  }, [open]);

  return (
    <ToonsThemeProvider>
      <CSSTransition in={dialogOpen} timeout={800} unmountOnExit>
        <DialogContainer>
          <div className="dialogContents">{children}</div>
          <div className="dialogBg" onClick={handleClose} />
        </DialogContainer>
      </CSSTransition>
    </ToonsThemeProvider>
  );
}

const DialogContainer = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  div.dialogContents {
    position: absolute;
    z-index: 600;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
    opacity: 0;
    animation-name: appearFromBottom;
    animation-duration: 0.4s;
    animation-delay: 0.3s;
    animation-fill-mode: forwards;
  }
  div.dialogBg {
    position: absolute;
    z-index: 500;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    animation-name: fadeIn;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
  &.exit {
    div.dialogContents {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
    div.dialogBg {
      opacity: 1;
    }
  }
  &.exit-active {
    div.dialogContents {
      animation-name: disappearToBottom;
      animation-duration: 0.2s;
      animation-fill-mode: forwards;
    }
    div.dialogBg {
      animation-name: fadeOut;
      animation-duration: 0.3s;
      animation-fill-mode: forwards;
      animation-delay: 0.6s;
    }
  }

  @keyframes appearFromBottom {
    0% {
      opacity: 0;
      transform: translate(-50%, -30%);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
  @keyframes disappearToBottom {
    0% {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -30%);
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default Dialog;
