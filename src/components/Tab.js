import React, { useState } from 'react';

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

export default Tab;
