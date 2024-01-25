/* eslint-disable prettier/prettier */
import styled, { css } from "styled-components";

export const Container = styled.div`
  
`;

export const PostCardCover = styled.div`
  margin-bottom: ${({theme}) => theme.spacings.small};

  img {
    width: 100%;
    display: block;
  }
`;

export const PostCardHeading = styled.h2`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.medium};

    a {
      color: ${theme.colors.darkGray};
    }
  `}
`;