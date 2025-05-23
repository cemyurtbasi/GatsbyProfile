import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight, FaClose, FaInfo } from 'react-icons/lib/fa/';

const ActionButton = memo(({ 
  topPx, 
  rightPx, 
  classes, 
  isActive, 
  isFixed, 
  onClick, 
  buttonRef,
  locationPathName 
}) => (
  <button 
    onClick={onClick}
    className={`
      ${classes.block} 
      ${isActive ? classes.isActive : ''} 
      ${isFixed ? classes.isFixed : ''}
    `}
    style={{ top: topPx, right: rightPx }}
    ref={buttonRef}
    aria-label="Remark"
  > 
    {isActive 
      ? (locationPathName === '/' ? <FaArrowRight /> : <FaInfo />) 
      : <FaClose />}
  </button>
));

ActionButton.propTypes = {
  topPx: PropTypes.string.isRequired,
  rightPx: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  isFixed: PropTypes.bool.isRequired
};

export default ActionButton;