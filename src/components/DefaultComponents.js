import styled from 'styled-components';


export const CenteredRow = styled.div `
  display: flex;
  margin: 10px auto;
  justify-content: center;
`

export const Label = styled.span `
  display: inline-block;
  margin-right: 15px;
`
export const ContentContainer = styled.div`
  margin: 20px 0;
  & img {
    max-width: 100%;
  }
`