import styled from "styled-components";
import mediaQueries from "../../utils/mediaQueries";

export const FormBody = styled.form`
  max-width: 630px;
  width: 100%;
  min-width: 320px;
  margin: 0 auto;
  padding: 34px 39px 50px;
  background-color: #FFFFFF;
  border-radius: 4px;
  
  @media ${mediaQueries.mobileL} {
    padding: 34px 25px 20px;
  }
`;

export const FormTitle = styled.div`
  @media ${mediaQueries.mobileL} {
    text-align: center;
  }
`;

export const FormTitleMain = styled.p`
  font-size: 26px;
  line-height: 30px;
  color: #333333;
`;

export const FormTitleNote = styled.span`
  display: inline-block;
  margin-top: 5px;
  font-size: 13px;
  line-height: 15px;
  color: #8F8F8F;
`;

export const FormFields = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  
  @media ${mediaQueries.mobileL} {
    display: block;
  }
`;

export const FormBtns = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 450px;
  margin: 48px auto 0;
  
  @media ${mediaQueries.mobileL} {
    display: block;
    max-width: 100%;
    margin-top: 30px;
  }
`;

export const FormBtnText = styled.span``;

export const FormBtn = styled.button`
  width: 48%;
  height: 50px;
  font-size: 16px;
  line-height: 19px;
  border-radius: 4px;
  
  &[type="submit"] {
    color: #FAFAFA;
    background-color: #4285F4;
    
    &:hover {
      background-color: #3874D7;
    }
  }
  
  &[type="reset"] {
    color: #262626;
    background-color: #E0E0E0;
    
    &:hover {
      filter: brightness(0.95);
    }
  }
  
  &:disabled ${FormBtnText} {
    opacity: 0.5;
  }
  
  @media ${mediaQueries.mobileL} {
    width: 100%;
    
    &[type="reset"] {
      background-color: transparent;
    }
  }
`;


