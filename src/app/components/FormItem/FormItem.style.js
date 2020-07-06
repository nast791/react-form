import styled from "styled-components";
import InputMask from 'react-input-mask';
import mediaQueries from "../../utils/mediaQueries";

export const FormItemBody = styled.label`
  position: relative;
  width: ${(props) => props.width ? props.width : '100%'};
  margin-top: 30px;
  
  @media ${mediaQueries.mobileL} {
    display: block;
    width: 100%;
  }
`;

export const FormInput = styled(InputMask)`
  width: 100%;
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px solid #E2E2E2;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  
  &:focus {
    border-bottom: 1px solid #4285F4;
  }
`;

export const FormPlaceholder = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 18px;
  line-height: 22px;
  color: #8F8F8F;
  transition: all 0.2s ease-out;
  transform-origin: ${props => props.plh ? "0% 100%" : "0 0"};
  transform: ${props => props.plh ? "none" : "translateY(-15px) scale(0.7)"};
  cursor: text;
`;

export const FormError = styled.span`
  position: absolute;
  top: 100%;
  font-size: 10px;
  line-height: 18px;
  color: #FF4242;
  
  & ~ ${FormInput} {
    border-bottom: 1px solid #FF4242;
  }
`;