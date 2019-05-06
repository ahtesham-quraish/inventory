import React from 'react';

function ContentWrapper(props) {
  return (
    <div>
      <div className="app-content content container-fluid">
        <div className="content-wrapper">
          <div className="content-header row" />
          <div className="content-body">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default ContentWrapper;
