import React from 'react';
import { withNamespaces } from 'react-i18next';
import classNames from 'classnames';
import Tooltip from '@material-ui/core/Tooltip';

function TextArea({ error, name, onChange, placeholder, t, value }) {
  const smallScreen = window.screen.width < 767;
  // ? Tooltip__title className is in main.scss file
  const tooltipTitle = (
    <div className='Tooltip__title'>
      <span>{t('SendEmail__message__error')}</span>
      <img alt='Crying emoji' src='assets/images/sad.svg' />
    </div>
  );

  return (
    <div className='TextArea'>
      {smallScreen && error && (
        <img className='TextArea__error__image' src='assets/images/error.svg' />
      )}
      <Tooltip
        className='Tooltip'
        open={smallScreen ? false : error}
        placement='right'
        title={tooltipTitle}
      >
        <textarea
          className={classNames(error && 'TextArea__error')}
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
