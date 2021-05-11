import React, { useState, useEffect } from 'react'
import { FeedItem } from '../FeedItem'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { Table, TdBordered } from './styles'

const getItemKey = (item) => (item && item.objectID) || JSON.stringify(item)
const deletedFilter = (deletedItems) => (item) => {
  const iKey = item.objectID
  const visible = deletedItems && !deletedItems[iKey]
  return visible
}

export const FeedList = ({ items = [], columns = [] }) => {
  const [deletedItems, setDeletedItems] = useLocalStorage('deleted-items', {})
  const [deletedItem, setDeletedItem] = useState(null)
  const [feed, setFeed] = useState(items.filter(deletedFilter(deletedItems)))

  // on load
  useEffect(() => {
    const f = items.filter(deletedFilter(deletedItems))
    setFeed(f)
  }, [deletedItem, deletedItems, items])

  const onRemoveItem = (item) => {
    const removedObj = deletedItems || {}
    const iKey = getItemKey(item)
    setDeletedItem(iKey)
    removedObj[iKey] = true
    setDeletedItems(removedObj)
  }

  return (
    <div>
      <section>
        <Table>
          <tbody>
            {feed.map((item, key) => (
              <tr key={key}>
                <TdBordered colSpan={columns.length || 4}>
                  <FeedItem
                    key={key}
                    data={{ ...item, key }}
                    onRemove={onRemoveItem}
                  />
                </TdBordered>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
    </div>
  )
}
