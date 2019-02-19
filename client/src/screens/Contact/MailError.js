import React from 'react';

function MailError() {
  function reloadPage() {
    window.location.reload();
  }

  return (
    <div className='MailError'>
      <img src='assets/images/send-mail-error.svg' />
      <div>
        <h3>Une erreur est survenue</h3>
        <span onClick={reloadPage}>Cliquez-ici pour réessayer</span>
      </div>
    </div>
  );
}

export default MailError;
