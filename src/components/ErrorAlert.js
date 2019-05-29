import React from 'react'
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

import { CenteredRow } from  './DefaultComponents';

const ErrorAlert = ({ error }) => {
  const errorMessage = error ? error.message.replace('GraphQL error: ', '') : 'Unknown error';

  return (
    <CenteredRow>
      <Alert color="danger">
        {errorMessage}
      </Alert>
    </CenteredRow>
  )
}

ErrorAlert.propTypes = {
  error: PropTypes.object,
};

export default ErrorAlert;