import GlobalStyle from '../src/styles/global.tsx';

const ComponentStyledProvider = (storyFn) => {
  return (
    <div className="toons-component">
      <GlobalStyle />
      {storyFn()}
    </div>
  );
};

export default ComponentStyledProvider;
