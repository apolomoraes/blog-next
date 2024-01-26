/* eslint-disable prettier/prettier */
import styled, { css } from "styled-components";

export const Container = styled.footer`
  ${({theme}) => css`
    color: ${theme.colors.gray};
    margin: ${theme.spacings.medium};
    font-size: ${theme.spacings.small};
    text-align: center;
  `}
`;