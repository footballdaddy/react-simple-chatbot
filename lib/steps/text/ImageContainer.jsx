import styled from 'styled-components';

const ImageContainer = styled.div`
  display: inline-block;
  order: ${props => props.user || props.userchat ? '1' : '0'};
  padding: 6px;
`;

export default ImageContainer;
