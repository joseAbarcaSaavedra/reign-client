import './App.css'
import { FeedList } from './components/FeedList'
import { PageHeader } from './components/PageHeader'
const ITEM = {
  created_at: '2021-05-10T04:03:14.000Z',
  title: null,
  url: null,
  author: 'vorpalhex',
  points: null,
  story_text: null,
  comment_text:
    'Node JS based instead of running a full LAMP stack. I believe ghost supports sqlite for low traffic.',
  num_comments: null,
  story_id: 27100974,
  story_title: 'Show HN: Run your ghost blog on Raspberry Pi for free',
  story_url:
    'https://viggy28.dev/article/setting-up-ghost-in-raspberry-pi-for-free/',
  parent_id: 27101673,
  created_at_i: 1620619394,
  _tags: ['comment', 'author_vorpalhex', 'story_27100974'],
  objectID: '27102565',
}

function App() {
  return (
    <div className='App'>
      <PageHeader title='HN Feed' subtitle='We <3 hacker news!' />
      <FeedList
        items={[ITEM, ITEM, ITEM, ITEM, ITEM]}
        columns={['Title', 'Author', 'ObjectID', 'Timestamp', 'REMOVE?']}
      />
    </div>
  )
}

export default App
