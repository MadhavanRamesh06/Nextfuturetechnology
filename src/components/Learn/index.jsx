import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import {LContainer, LH1, LWrapper, LCard, LIcon, LH2,LH3} from './LearncenterElements'

const Learn = () => {
  const history=useHistory(true);
  return (
    <LContainer id='learn'>
      <LH1>Learning Center
      </LH1>
      <LWrapper>
        <LCard onClick={()=> history.push('/software_solution/learning_center/c')}>
          <LIcon src={'/images/c.png'}/>
          <LH3>C/C++</LH3>
        </LCard>
        <LCard  onClick={()=> history.push('/software_solution/learning_center/java')}>
        <LIcon src={'/images/java.png'}/>
        <LH3>Java</LH3>
        </LCard>
        <LCard  onClick={()=> history.push('/software_solution/learning_center/python')}>
          <LIcon src={'/images/python.png'}/>
          <LH3>Python</LH3>
        </LCard>
        <LCard  onClick={()=> history.push('/software_solution/learning_center/machine_learning')}>
          <LIcon src={'/images/machine-learning.png'}/>
          <LH2>Machine Learning</LH2>

        </LCard>
        <LCard  onClick={()=> history.push('/software_solution/learning_center/ai')}>
          <LIcon src={'/images/technology.png'}/>
          <LH2>Artificial Inteligence</LH2>
        </LCard>
      </LWrapper>
    </LContainer>
  )
}

export default Learn;
