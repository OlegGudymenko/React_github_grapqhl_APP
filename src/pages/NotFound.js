import React from 'react'
import { CenteredRow } from '../components/DefaultComponents';
import Link from '../components//Link';

const NotFound = () => (
  <React.Fragment>
    <CenteredRow>
      <h2>Page is not found</h2>
    </CenteredRow>
    <CenteredRow>
      <Link to='/' >Go to main page</Link>
    </CenteredRow>
  </React.Fragment>
)

export default NotFound;