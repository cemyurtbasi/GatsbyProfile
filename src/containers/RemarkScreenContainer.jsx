import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { toggleRemarkScreen } from '../state/actions'; 
import RemarkScreen from '../components/RemarkScreen';

const RemarkScreenContainer = ({ isActive, toggleScreen, locationPathName }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isActive && e.which === 27) {
        toggleScreen();
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [isActive, toggleScreen]);

  return (
    <div>
      <RemarkScreen
        isActive={isActive}
        locationPathName={locationPathName}
        onClick={toggleScreen}
      />
      {isActive && (
        <div
          onClick={toggleScreen}
          className="c-remark-screen-overlay"
        ></div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isActive: state.remarkScreen.isActive,
});

const mapDispatchToProps = (dispatch) => ({
  toggleScreen: () => dispatch(toggleRemarkScreen()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RemarkScreenContainer);
