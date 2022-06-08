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
      <CSSTransition in={dialogOpen} timeout={300} unmountOnExit>
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
  opacity: 1;
  overflow: hidden;
  div.dialogContents {
    position: absolute;
    z-index: 600;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  div.dialogBg {
    position: absolute;
    z-index: 500;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
  }

  &.exit-done {
    opacity: 0;
  }
`;

export default Dialog;
