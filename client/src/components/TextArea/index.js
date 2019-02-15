import React from 'react';
import { withNamespaces } from 'react-i18next';
import Tooltip from '@material-ui/core/Tooltip';
import ErrorIcon from '../../assets/images/error.svg';

function TextArea({ error, name, onChange, placeholder, t, value }) {
  const cry = '\u{1F622}';
  const smallScreen = window.screen.width < 767;

  return (
    <div className='TextArea'>
      {smallScreen && error && (
        <img className='TextArea__error__image' src={ErrorIcon} />
      )}
      <Tooltip
        className='Tooltip'
        open={smallScreen ? false : error}
        placement='right'
        title={`${t('SendEmail__message__error')} ${cry}`}
      >
        <textarea
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          rows='4'
          value={value}
        />
      </Tooltip>
    </div>
  );
}
export default withNamespaces()(TextArea);
