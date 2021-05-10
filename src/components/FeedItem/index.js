import React, { useState } from 'react'
import { DateInformation } from '../DateInformation'

import { Table, Link, Author, RemoveContainer } from './styles'
export const FeedItem = ({ data = {}, onRemove = () => {} }) => {
  const [isShown, setIsShown] = useState(false)
  const url = data ? data.story_url : ''
  const onClick = () => {
    console.log('redirect', data)
    window.open(url, '_blank')
  }

  console.log('isShown', isShown)
  return (
    <>
      <Link
        href={url}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <Table style={{ background: isShown ? '#fafafa' : '#fff' }}>
          <tbody>
            <tr>
              <td colSpan={2}>
                {(data && data.story_title) || (data && data.title)}{' '}
                <Author>{(data && data.author) || '-'}</Author>
              </td>
              <td></td>
              <td>
                <DateInformation date={(data && data.created_at_i) || null} />
              </td>
              <RemoveContainer>
                {isShown && (
                  <button type='button' onClick={() => onRemove(data)}>
                    REMOVE
                  </button>
                )}
              </RemoveContainer>
            </tr>
          </tbody>
        </Table>
      </Link>
    </>
  )
}
