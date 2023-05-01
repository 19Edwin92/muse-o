import styled from 'styled-components';

export const Flex = ({ children, fd, ai, ac, fw, jc, gap, ...rest }) => {
  return (
    <Div fd={fd} ai={ai} ac={ac} fw={fw} jc={jc} gap={gap} {...rest}>
      {children}
    </Div>
  );
};

// Flex 를 감싸고 있는 부모컴포넌트의 너비/높이를 따라간다. 
const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${({ jc }) => jc};
  flex-direction: ${({ fd }) => fd};
  align-items: ${({ ai }) => ai};
  align-content: ${({ ac }) => ac};
  flex-wrap: ${({ fw }) => fw};
  gap: ${({ gap }) => gap}px;
`;
