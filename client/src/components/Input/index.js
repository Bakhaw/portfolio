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
  const lol = '\u{1F61B}';
  const smallScreen = window.screen.width < 767;
  return (
    <div className='Input'>
      {smallScreen && error && (
        <img className='Input__error__image' src='assets/images/error.svg' />
      )}

      <Tooltip
        className='Input__Tooltip'
        open={smallScreen ? false : error}
        placement='right'
        title={`${t('SendEmail__email__error')} ${lol}`}
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
