import styled from 'styled-components'

const withUserAddStyle = WrappedComponent => styled(WrappedComponent)`
  width : 90%;
  margin : 0;
  padding : 0;
  text-align : center;
  .user-add-form{
    display: block;
    width : 90%;
    margin : 5%;
    color: none;
    font-size: 1em;
    border: 2px solid black;
    border-radius: 2px;
  }
  .user-input-field{
    width : 80%;
    display: block;
    margin: 2%;
    padding: 1em 0.5em 1em 0.5em;
  }
  .user-submit-block{
    display: block;
    text-align : right;
    width : 90%;
    margin: 1em 5% 1em 5%;
    padding: 0.5em 0.5em 0.5em 0.5em;
  }
  .user-submit-button{
    width : 30%;
    padding: 1em 0.5em 1em 0.5em;
  }
  .user-submit-error-block{
    text-align : left;
    color: red;
    margin: 2%;
  }
`

export default withUserAddStyle
