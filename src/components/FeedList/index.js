import React, { useState, useEffect } from 'react'
import { FeedItem } from '../FeedItem'
import { Table } from './styles'

const getItemKey = (item) => (item && item.objectID) || JSON.stringify(item)

export const FeedList = ({ items = [], columns = [] }) => {
  const [deletedItems, setDeletedItems] = useState({})
  const [deletedItem, setDeletedItem] = useState(null)
  const [feed, setFeed] = useState(items)
  // on load
  useEffect(() => {
    const deleted = deletedItem
    const f = items.filter((item) => {
      const visible = deletedItems && !deletedItems[deleted]
      return visible
    })
    setFeed(f)
  }, [deletedItem, deletedItems, items])

  const onRemoveItem = (item) => {
    const removedObj = deletedItems || {}
    const iKey = getItemKey(item)
    setDeletedItem(iKey)

    // set in localStorage

    // update remove items
    removedObj[iKey] = true
    setDeletedItems(removedObj)
  }
  return (
    <div>
      <section>
        <Table>
          <thead>
            <tr>
              {columns.map((col, key) => (
                <th key={key}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {feed.map((item, key) => (
              <tr key={key}>
                <td colSpan={columns.length || 5}>
                  <FeedItem
                    key={key}
                    data={{ ...item, key }}
                    onRemove={onRemoveItem}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
    </div>
  )
}
