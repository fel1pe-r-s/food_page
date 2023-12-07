import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;
  position: relative;
  overflow-x: hidden;

  @media (max-width: 770px) {
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 425px) {
    padding: 3.5rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.901rem;
  padding-right: 2rem;
  margin-bottom: 7rem;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

export const Content = styled.div`
  width: 47.6rem;
  padding: 4.6rem;
  border-radius: 1.6rem;
  background: ${({ theme }) => theme.COLORS.Dark700};

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  > h2 {
    text-align: center;
    font-size: 3.2rem;
    font-family: var(--poppins);
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.Light100};
  }

  > form > p {
    margin-bottom: 2.2rem;
    font-size: 1.2rem;
    font-family: var(--poppins-font-family);
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.TintsTomato400};
  }

  @media (max-width: 750px) {
    max-width: 100%;
    background: transparent;
    padding: 0 4.6rem;

    > h2 {
      display: none;
    }
  }

  @media (max-width: 425px) {
    padding: 0;
  }
`;
