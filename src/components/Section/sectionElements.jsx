import styled from 'styled-components';


export const SectionContainer = styled.div`
  color: black;
  display: flex;
  justify-content:space-around;
  align-items: center;

  @media screen and  (max-width: 768px) {
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
  }
`

export const SectionTextDiv = styled.div`
    padding: 20px 40px;

  @media screen and  (max-width: 768px) {
    padding: 100px 0;
  }
`

export const SectionHeading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600px;

@media screen and (max-width: 480px) {
  font-size: 32px;
}
`

export const SectionPara  = styled.p`
    max-width: 800px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    width: 100%;
`


export const SectionImageDiv = styled.div`
    padding: 20px 40px;
    display: flex;
    justify-content: center;
    align-items: center;

  @media screen and  (max-width: 768px) {
    padding: 100px 0;
  }
`

export const SectionImage  = styled.img`
    width: 100%;
    height: 300px;
    `