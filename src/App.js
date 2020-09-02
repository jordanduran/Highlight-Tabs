import React, { useState } from 'react';
import './App.css';

const Tab = ({ children }) => {
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 });

  const handleMoveHighlight = (e) => {
    // Update highlight style
    setHighlightStyle({
      left: e.nativeEvent.layerX - 150,
    });
  };

  const handleHideHighlight = (e) => {
    setHighlightStyle({
      opacity: 0,
      left: e.nativeEvent.layerX - 150,
    });
  };

  return (
    <div
      className="tab"
      onMouseOut={handleHideHighlight}
      onMouseMove={handleMoveHighlight}
    >
      <div className="hightlight" style={highlightStyle} />
      {children}
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <div className="browser">
        <div className="tabs">
          <Tab>
            <a>Home</a>
          </Tab>
          <Tab>
            <a>About</a>
          </Tab>
          <Tab>
            <a>Features</a>
          </Tab>
        </div>

        <div className="viewport">Pages Go Here</div>
      </div>
    </div>
  );
};

export default App;
