import React from 'react';
import PropTypes from 'prop-types';

const ButtonCustom = ({ width, message, height, backgroundColor, color, fontSize, onClick, borderRadius, imgURL, fontWeight }) => {
  return (
    <button
      style={{
        width,
        height,
        backgroundColor,
        borderRadius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        cursor: 'pointer',
        padding: '10px',
      }}
      onClick={onClick}
    >
      {imgURL && <img src={imgURL} alt="" style={{ width: 24, height: 24, marginRight: 8 }} />}
      <span style={{ color, fontSize, fontWeight, textAlign: 'center' }}>{message}</span>
    </button>
  );
};

ButtonCustom.propTypes = {
  width: PropTypes.string,
  message: PropTypes.string.isRequired,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  onClick: PropTypes.func,
  borderRadius: PropTypes.string,
  imgURL: PropTypes.string,
  fontWeight: PropTypes.string,
};

export default ButtonCustom;
