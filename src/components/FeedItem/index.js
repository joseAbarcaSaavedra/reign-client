import React from 'react'
import { DateInformation } from '../DateInformation'

import { Table } from './styles'
export const FeedItem = ({ data = {}, onRemove = () => {} }) => {
  return (
    <>
      <Table>
        <tbody>
          <tr>
            <td>{(data && data.title) || '-'}</td>
            <td>{(data && data.author) || '-'}</td>
            <td>{(data && data.objectID) || '-'}</td>
            <td>
              <DateInformation date={(data && data.created_at_i) || null} />
            </td>
            <td>
              <button type='button' onClick={() => onRemove(data)}>
                REMOVE
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}
