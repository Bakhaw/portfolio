import React from 'react';
import { withNamespaces } from 'react-i18next';

function Description({ currentProject, t }) {
  return (
    <div>
      <p>{t(currentProject.description)}</p>
    </div>
  );
}

export default withNamespaces()(Description);
