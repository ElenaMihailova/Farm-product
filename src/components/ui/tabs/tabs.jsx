import {useState} from 'react';

import * as Styled from './styles';

function Tabs({tabsList = [], maxContentHeiht}) {
  const [selectIndex, setSelectIndex] = useState(0); 

  return (
    <div style={{marginTop: '10px'}}>
      <Styled.Header>
        {tabsList.map((tab, index) => (
          <Styled.TabListItem key={index}>
            <Styled.TabButton
              isSelect={selectIndex === index}
              {...(selectIndex === index
                ? {as: 'span'}
                : {onClick: () => setSelectIndex(index)})}
            >
              {tab.title}
            </Styled.TabButton>
          </Styled.TabListItem>
        ))}
      </Styled.Header>
      <Styled.Content $maxContentHeiht={maxContentHeiht}>{tabsList[selectIndex].content}</Styled.Content>
    </div>
  );
}

export default Tabs;
