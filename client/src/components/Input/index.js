import React from 'react';
import { withNamespaces } from 'react-i18next';
import Tooltip from '@material-ui/core/Tooltip';

function Input({
  autoFocus,
  error,
  name,
  onChange,
  placeholder,
  type,
  t,
  value
}) {
  const smallScreen = window.screen.width < 767;
  // ? Tooltip__title className is in main.scss file
  const tooltipTitle = (
    <div className='Tooltip__title'>
      <span>{t('SendEmail__email__error')}</span>
      <img alt='Crying emoji' src='assets/images/tongue.svg' />
    </div>
  );
  return (
    <div className='Input'>
      {smallScreen && error && (
        <img className='Input__error__image' src='assets/images/error.svg' />
      )}

      <Tooltip
        className='Input__Tooltip'
        open={smallScreen ? false : error}
        placement='right'
        title={tooltipTitle}
      >
        <input
          autoFocus={autoFocus}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      </Tooltip>
    </div>
  );
}

export default withNamespaces()(Input);
