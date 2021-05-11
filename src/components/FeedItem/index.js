import React, { useState } from 'react'
import { DateInformation } from '../DateInformation'

import {
  Table,
  Link,
  Author,
  RemoveContainer,
  TdAlignLeft,
  TdAlignRight,
  Icon,
} from './styles'
export const FeedItem = ({ data = {}, onRemove = () => {} }) => {
  const [isShown, setIsShown] = useState(false)
  const url = data ? data.story_url : ''

  return (
    <>
      <Table
        style={{
          background: isShown ? '#fafafa' : '#fff',
        }}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <tbody>
          <tr>
            <TdAlignLeft colSpan={3}>
              <Link href={url} target='_blank'>
                {(data && data.story_title) || (data && data.title)}{' '}
                <Author>{(data && data.author) || '-'}</Author>
              </Link>
            </TdAlignLeft>
            <TdAlignRight>
              <Link href={url} target='_blank'>
                <DateInformation date={(data && data.created_at) || null} />
              </Link>
            </TdAlignRight>
            <RemoveContainer>
              {isShown && (
                <Icon
                  src='/trash.png'
                  alt='delete'
                  onClick={() => onRemove(data)}
                />
              )}
            </RemoveContainer>
          </tr>
        </tbody>
      </Table>
    </>
  )
}
