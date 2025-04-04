import React, { memo } from 'react';
import { FaClose } from 'react-icons/lib/fa/';
import Avatar from '../components/Avatar';

const ToolBoxPopOver = memo(({ 
  top, 
  bottom, 
  left, 
  right, 
  modifierClasses, 
  description,
  comment,
  onClick 
}) => (
  <div 
    className={`c-toolbox-popover ${modifierClasses}`}
    style={{ bottom, top, left, right }}
  >
    <button 
      className="c-toolbox-popover__close"
      onClick={onClick}
    >
      <FaClose />
    </button>
    <div className="c-toolbox-popover__text">
      <p 
        className="c-toolbox-popover__description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {comment && (
        <div className="c-toolbox-popover__footer">
          <div className="c-toolbox-popover__avatar">
            <Avatar modifierClasses="c-avatar--as-author" />
          </div>  
          <span 
            className="c-toolbox-popover__comment" 
            dangerouslySetInnerHTML={{ __html: comment }} 
          />
        </div>
      )}                    
    </div>
  </div>
));

export default ToolBoxPopOver;