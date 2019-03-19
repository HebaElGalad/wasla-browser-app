import styled from "styled-components";
import { colors } from "../../variables";
import saveIcon from "../../assets/images/like.svg";
import saveIconYellow from "../../assets/images/like-yellow.svg";
import shareIcon from "../../assets/images/share.svg";
import shareIconYellow from "../../assets/images/share-yellow.svg";

export const StyledActionList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const StyledActionItem = styled.li`
  display: inline-block;
  list-style: none;
  color: inherit;
  padding: 4px 16px;
  font-weight: 400;
  & + li {
    margin-inline-start: 6px;
  }
  &.save {
    padding-left: 20px;
    background-image: url(${saveIcon});
    background-position: left center;
    background-repeat: no-repeat;
    background-size: 20%;
    vertical-align: middle;
    &:hover {
      background-image: url(${saveIconYellow});
    }
  }
  &.share {
    padding-left: 20px;
    background-image: url(${shareIcon});
    background-position: left center;
    background-repeat: no-repeat;
    background-size: 20%;
    vertical-align: middle;
    &:hover {
      background-image: url(${shareIconYellow});
    }
  }
`;

export const StyledNavLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: ${colors.primary};
  }
`;
