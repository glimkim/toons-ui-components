import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import ListItem, { ListItemProps } from '../ListItem/ListItem';

type ScreenSize = '1281' | '1081' | '961' | '841' | '768' | '541' | '415';

type ColumnGuide = {
  [key in ScreenSize]?: number;
};

interface ListProps extends HTMLAttributes<HTMLUListElement> {
  id: string;
  children: React.ReactElement<ListItemProps>[];
  columnsOnScreenSize?: ColumnGuide;
}

function List({
  id,
  children,
  columnsOnScreenSize = {
    '1281': 4,
    '1081': 3,
    '768': 4,
    '541': 3,
    '415': 2,
  },
}: ListProps) {
  return (
    <ToonsList id={id} columnsOnScreenSize={columnsOnScreenSize}>
      {children}
    </ToonsList>
  );
}

const ToonsList = styled.ul<{ columnsOnScreenSize: ColumnGuide | undefined }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0 auto;

  @media screen and (min-width: 1281px) {
    li {
      width: calc((100% - 4rem) / 5);
    }
  }

  ${({ columnsOnScreenSize }) => {
    if (columnsOnScreenSize) {
      const keys = Object.keys(columnsOnScreenSize);
      let styles = ``;
      keys.map((_key, index) => {
        const columnCount = columnsOnScreenSize[_key as ScreenSize];
        const itemWidth = `calc((100% - ${(columnCount! - 1 || 0) + 'rem'}) / ${columnCount!})`;
        styles += `
          @media screen and (max-width: ${_key + 'px'}) and (min-width: ${(keys[index - 1] || 0) + 'px'}) {
            li {
              width: ${itemWidth};
            }
          }
        `;
      });
      return css`
        ${styles}
      `;
    } else {
      return css``;
    }
  }};
`;

export default List;
