import styled from "@emotion/styled";

export const Section = styled.div`
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
  padding: 8rem 0;
  position: relative;
  width: 100%;
  z-index: 2;
`;

export const BigText = styled.span`
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font: 12rem/1 Monument Extended;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 25rem;
  padding-top: 1rem;
  text-align: center;
  white-space: nowrap;
  z-index: 2;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContentContainer = styled.div`
  max-width: 166rem;
  width: 100%;
`;
