import React from 'react'
import {
  Spinner as ReactstrapSpinner 
} from 'reactstrap';
import { CenteredRow } from  './DefaultComponents';

const Spinner = () => (
  <CenteredRow>
    <ReactstrapSpinner size='md' color="secondary"/>
  </CenteredRow>
)

export default Spinner;