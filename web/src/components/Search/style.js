import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 4.8rem;
  display: flex;
  align-items: center;
  gap: 1.4rem;
  padding: 1.2rem 1.4rem;
  border-radius: 0.5rem;
  border: 0.1rem solid transparent;
  background: ${({ theme }) => theme.COLORS.Dark900};

  > div {
    width: 2.4rem;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    > svg:first-child {
      font-size: 2.2rem;
      color: ${({ theme }) => theme.COLORS.Light400};
    }
  }

  > input {
    width: 100%;
    border: none;
    background: transparent;
    outline: none;
    caret-color: ${({ theme }) => theme.COLORS.Light100};
    font-size: 1.6rem;
    font-family: var(--roboto);
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.Light100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.Light500};
    }
  }

  @media (max-width: 1122px) {
    display: none;
  }
`;
