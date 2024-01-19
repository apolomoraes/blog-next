/* eslint-disable prettier/prettier */
import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({theme}) => css`
    background-color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.medium};
    text-align: center;
  `}

  a {
    color: ${({theme}) => theme.colors.white};
  }
`;