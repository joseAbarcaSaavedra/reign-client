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

const ITEM2 = {
  created_at: '2021-05-10T20:38:09.000Z',
  title: null,
  url: null,
  author: 'WORMS_EAT_WORMS',
  points: null,
  story_text: null,
  comment_text:
    'Yes, I am wondering why the person with the username containing the word “Penis” runs Tor exit nodes. It is curious and agree could easily be totally unrelated.',
  num_comments: null,
  story_id: 27108109,
  story_title:
    'Tracking One Year of Malicious Tor Exit Relay Activities (Part II)',
  story_url:
    'https://nusenu.medium.com/tracking-one-year-of-malicious-tor-exit-relay-activities-part-ii-85c80875c5df',
  parent_id: 27110551,
  created_at_i: 1620679089,
  _tags: ['comment', 'author_WORMS_EAT_WORMS', 'story_27108109'],
  objectID: '27110620',
  _highlightResult: {
    author: {
      value: 'WORMS_EAT_WORMS',
      matchLevel: 'none',
      matchedWords: [],
    },
    comment_text: {
      value:
        'Yes, I am wondering why the person with the username containing the word “Penis” runs Tor exit <em>nodes</em>. It is curious and agree could easily be totally unrelated.',
      matchLevel: 'full',
      fullyHighlighted: false,
      matchedWords: ['nodejs'],
    },
    story_title: {
      value:
        'Tracking One Year of Malicious Tor Exit Relay Activities (Part II)',
      matchLevel: 'none',
      matchedWords: [],
    },
    story_url: {
      value:
        'https://nusenu.medium.com/tracking-one-year-of-malicious-tor-exit-relay-activities-part-ii-85c80875c5df',
      matchLevel: 'none',
      matchedWords: [],
    },
  },
}

function App() {
  return (
    <div className='App'>
      <PageHeader title='HN Feed' subtitle='We <3 hacker news!' />
      <FeedList
        items={[ITEM, ITEM, ITEM2, ITEM, ITEM, ITEM]}
        columns={['Title', 'Author', 'ObjectID', 'Timestamp', 'REMOVE?']}
      />
    </div>
  )
}

export default App
