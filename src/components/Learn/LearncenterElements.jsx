import styled from 'styled-components'

export const LContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
 `
export const LWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    justify-content:center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
  }

    @media screen and (max-width: 786px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
  }
`
export const LCard = styled.div`
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding:  30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: width 0.2s ease-in-out;

  &:hover {
    transform: scale(1.5);
    position:relative;
    left:0;
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
`
export const LIcon = styled.img`
  height: 80px;
  width: 80px;
  object-fit:cover;
  margin-bottom: 10px;
`
export const LH1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }  
`
export const LH2 = styled.h2`
  font-size: 1rem;
  color:#fff;
  margin-bottom: 10px;
  
`
export const LH3 = styled.h3`
  font-size: 1.2rem;
  color:#fff;
  padding:8px;
  margin-bottom: 10px;
` 

export const LP = styled.p`
  font-size: 1rem;
  text-align: center;
`

export const Lspan = styled.div`

`
export const LInfo =styled.div`
      display:none;
      padding: 20px;
      background-color: #000;
`
