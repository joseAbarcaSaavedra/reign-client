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
export const Icon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`

export const DeleteButton = styled.button`
  ${
    '' /*  background-image:: url('./../../assets/trash.png');
  background-repeat: no-repeat;
  height: 50px; */
  }
`

export const TdAlignLeft = styled.td`
  text-align: left;
  padding-left: 1rem;
`
export const TdAlignRight = styled.td`
  text-align: right;
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
