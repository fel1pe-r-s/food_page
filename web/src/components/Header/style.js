import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: 11.4rem;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.Dark600};
`;

export const Content = styled.div`
  width: 117rem;
  height: 11.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
  padding: 2.4rem 4rem;

  @media (max-width: 1122px) {
    width: 100%;
    justify-content: space-between;
    padding: 2.4rem 2rem;
  }
`;

export const SideBar = styled.div`
  display: none;

  @media (max-width: 1122px) {
    display: block;
  }
`;

export const Logo = styled(Link)`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: end;

  @media (max-width: 1122px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 0.8rem;
  }

  > div:first-child {
    display: flex;
    gap: 1rem;

    > img {
      width: 27.8rem;
      height: 2.6rem;
    }
  }
`;
