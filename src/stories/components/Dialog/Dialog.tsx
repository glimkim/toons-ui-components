import React, { useState, useCallback, useEffect, ForwardedRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import ToonsThemeProvider from 'src/styles/ToonsThemeProvider';
import styled from 'styled-components';

export interface DialogProps {
  open: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}

const Dialog = React.forwardRef(({ open, children, onClose }: DialogProps, ref: ForwardedRef<HTMLDivElement>) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const handleClose = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setDialogOpen(false);
      onClose && onClose();
    },
    [onClose, setDialogOpen],
  );

  useEffect(() => {
    setDialogOpen(open);

    return () => {
      setDialogOpen(false);
    };
  }, [open]);

  useEffect(() => {
    open ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
  }, [open]);

  return (
    <ToonsThemeProvider>
      <CSSTransition in={dialogOpen} timeout={800} unmountOnExit>
        <DialogContainer ref={ref}>
          <div className="dialogContents">{children}</div>
          <div className="dialogBg" onClick={handleClose} />
        </DialogContainer>
      </CSSTransition>
    </ToonsThemeProvider>
  );
});

const DialogContainer = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  div.dialogContents {
    position: relative;
    z-index: 600;
    transform: translateY(20%);
    opacity: 0;
    transition: 0.4s;
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
    transition: 0.4s;
  }
  &.enter-active {
    div.dialogBg {
      opacity: 1;
    }
  }
  &.enter-done {
    div.dialogContents {
      opacity: 1;
      transform: translateY(0);
    }
    div.dialogBg {
      opacity: 1;
    }
  }
  &.exit {
    div.dialogContents {
      transform: translateY(0);
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

  @keyframes disappearToBottom {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(20%);
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
