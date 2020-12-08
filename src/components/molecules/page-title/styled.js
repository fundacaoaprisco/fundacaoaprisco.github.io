import styled from 'styled-components'

export const PageTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6rem 0;
  text-align: center;

  & svg {
    margin-top: 1.5rem;
  }

  @media (max-width: 1024px) {
    padding: 3rem 0;
  }
`
