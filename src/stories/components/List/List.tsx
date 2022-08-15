import React, { HTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

type ScreenSize = '1440' | '1370' | '1280' | '1080' | '960' | '840' | '767';

type ColumnGuide = {
  [key in ScreenSize]?: number;
};

interface ListProps extends HTMLAttributes<HTMLUListElement> {
  id: string;
  children: React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
  columnsOnScreenSize?: ColumnGuide;
}

function List({ id, children, columnsOnScreenSize }: ListProps) {
  const listRef = useRef<HTMLUListElement | null>(null);
  const [liCount, setLiCount] = useState(0);

  useEffect(() => {
    const liElements = listRef.current?.querySelectorAll('li');
    setLiCount(liElements?.length || 0);
  }, [listRef]);

  return (
    <ToonsList id={id} ref={listRef} columnsOnScreenSize={columnsOnScreenSize}>
      {children}
      {/* {liCount % 2 !== 1 && liCount % 3 === 0 ? (
        <>
          <li />
          <li />
        </>
      ) : (
        <>
          <li />
        </>
      )} */}
    </ToonsList>
  );
}

const ToonsList = styled.ul<{ columnsOnScreenSize: ColumnGuide | undefined }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem 0;
  justify-content: space-between;
  li {
    width: calc(100% - 5 / 4rem);
  }

  ${({ columnsOnScreenSize }) => {
    if (columnsOnScreenSize) {
      const keys = Object.keys(columnsOnScreenSize);
      let styles = ``;
      keys.map((_key) => {
        const columnCount = columnsOnScreenSize[_key as ScreenSize];
        const itemWidth = `calc((100% / ${columnCount}) - ${columnCount! - 2 || 0}rem)`;
        styles += `
          @media screen and (max-width: ${_key + 'px'}) {
            li {
              width: ${itemWidth} !important;
            }
          }
        `;
      });
      console.log(styles);
      return css`
        ${styles}
      `;
    } else {
      return css``;
    }
  }};
`;

export default List;
