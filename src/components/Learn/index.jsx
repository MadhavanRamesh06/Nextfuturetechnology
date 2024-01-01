import React from 'react'
import {LContainer, LH1, LWrapper, LCard, LIcon, LH2,LH3} from './LearncenterElements'

const Learn = () => {
  return (
    <LContainer id='learn'>
      <LH1>Learning Center
      </LH1>
      <LWrapper>
        <LCard>
          <LIcon src={'/images/c.png'}/>
          <LH3>C/C++</LH3>
        </LCard>
        <LCard>
        <LIcon src={'/images/java.png'}/>
        <LH3>Java</LH3>
        </LCard>
        <LCard >
          <LIcon src={'/images/python.png'}/>
          <LH3>Python</LH3>
        </LCard>
        <LCard >
          <LIcon src={'/images/machine-learning.png'}/>
          <LH2>Machine Learning</LH2>

        </LCard>
        <LCard>
          <LIcon src={'/images/technology.png'}/>
          <LH2>Artificial Inteligence</LH2>
        </LCard>
      </LWrapper>
    </LContainer>
  )
}

export default Learn;
