import styled from 'styled-components'
export const Table = styled.table`
  width: 100%;
  padding: 0.5rem 0;
  background: #fff;
`
export const Link = styled.a`
  & {
    text-decoration: none;
    color: #333;
    font-size: 13pt;
  }
  &:hover {
    background: #fafafa;
  }
`
export const RemoveContainer = styled.td`
  width: 80px;
`
export const Author = styled.span`
  & {
    color: #999;
    font-size: 13pt;
  }
  &:after {
    content: '-';
  }
  &:before {
    content: '-';
  }
`
