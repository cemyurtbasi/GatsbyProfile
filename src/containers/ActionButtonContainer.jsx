import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { toggleRemarkScreen } from '../state/actions';  
import ActionButton from '../components/ActionButton';

const ActionButtonContainer = ({ remarkScreenIsActive, buttonClickHandler, locationPathName }) => {
  const [buttonAnchor, setButtonAnchor] = useState(null);
  const [buttonTopPx, setButtonTopPx] = useState('-100px');
  const [buttonRightPx, setButtonRightPx] = useState('-100px');
  const [buttonIsActive, setButtonIsActive] = useState(false);
  const [buttonIsFixed, setButtonIsFixed] = useState(false);
  const actionButtonRef = useRef(null);

  useEffect(() => {
    const getButtonAnchor = () => {
      const anchor = document.querySelector('.js-action-button-anchor');
      setButtonAnchor(anchor);
      updateButtonPosition(true);
    };

    const updateButtonPosition = (initialization) => {
      if (initialization) {
        setButtonIsActive(true);
      }

      if (!buttonAnchor) return;

      const body = document.querySelector('body');
      updateButtonTop(buttonAnchor, actionButtonRef.current, body, initialization);

      if (!initialization) {
        updateButtonRight(buttonAnchor, actionButtonRef.current, body);
      }
    };

    const updateButtonTop = (anchor, button, body, initialization) => {
      const buttonTop = anchor.offsetTop + anchor.offsetHeight / 2 - button.offsetHeight / 2;
      setButtonTopPx(`${buttonTop}px`);

      if (initialization) {
        setTimeout(() => updateButtonRight(anchor, button, body), 300);
      }
    };

    const updateButtonRight = (anchor, button, body) => {
      const buttonRight = body.offsetWidth - anchor.offsetLeft - anchor.offsetWidth - button.offsetWidth * 1.5;
      setButtonRightPx(`${buttonRight}px`);
    };

    const handleResize = () => {
      if (remarkScreenIsActive) return;
      if (!buttonAnchor) return getButtonAnchor();
      updateButtonPosition();
    };

    getButtonAnchor();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [buttonAnchor, remarkScreenIsActive]);

  useEffect(() => {
    if (remarkScreenIsActive) {
      setButtonIsActive(false);
      setButtonIsFixed(true);
      setButtonTopPx('20px');
      setButtonRightPx('20px');
    } else {
      setButtonIsActive(true);
      setButtonIsFixed(false);
    }
  }, [remarkScreenIsActive]);

  useEffect(() => {
    setButtonAnchor(null);
    setButtonIsActive(false);
    setButtonIsFixed(false);
  }, [locationPathName]);

  useEffect(() => {
    if (buttonIsFixed && actionButtonRef.current) {
      actionButtonRef.current.blur();
    }
  }, [buttonIsFixed]);

  return (
    <ActionButton
      onClick={buttonClickHandler}
      buttonRef={(btn) => (actionButtonRef.current = btn)}
      topPx={buttonTopPx}
      rightPx={buttonRightPx}
      isActive={buttonIsActive}
      isFixed={buttonIsFixed}
      locationPathName={locationPathName}
      classes={{
        block: 'c-action-button',
        isActive: 'c-action-button--is-active',
        isFixed: 'c-action-button--is-fixed',
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  remarkScreenIsActive: state.remarkScreen.isActive,
});

const mapDispatchToProps = (dispatch) => ({
  buttonClickHandler: () => dispatch(toggleRemarkScreen()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionButtonContainer);