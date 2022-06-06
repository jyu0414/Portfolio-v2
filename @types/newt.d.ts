import { Content, Content, Content } from 'newt-client-js'

const { Content } = require('newt-client-js');

type NewtConfig = {
  spaceUid: string
  appUid: string
  token: string
}

interface Profile extends Content {
  title: string
  titleEnglish: string
  content: string
  contentEnglish: string
  isTitleNeeded: boolean
  priority: number
}

interface Statement extends Content {
  title: string
  titleEnglish: string
  message: string
  messageEnglish: string
}

interface TopImage extends Content {
  title: string
  profileimage: { _id: string, src: string }
}

interface Resume extends Content {
  title: string
  titleEnglish: string
  date: string
  link: string
}

interface Career extends Content {
  organization: string
  organizationEnglish: string
  jobTitle: string
  jobTitleEnglish: string
  beginDate: string
  endDate: string
  isCurrent: boolean
}

interface Author {
  data: string
}

interface Paper extends Content {
  title: string
  titleEnglish: string
  link: string
  abstract: string
  category: string
  authors: [Author]
  book: string
  bibtex: string
  cite: string
  year: string
  month: string
  conference: string,
  japaneseOnly: boolean
}

interface Work extends Content {
  title: string
  titleEnglish: string
  subTitle: string
  subTitleEnglish: string
  description: string
  descriptionEnglish: string
  paper: [Paper]
  isCurrent: boolean
  beginYear: string
  endYear: string
  image: [{ _id: string, src: string }]
  award: [Resume]
  link: [{ title: string, titleEnglish: string, url: string }]
}

interface Patent extends Content {
  title: string
  number: string
  category: string
  author: [Author]
  link: string
}

interface Lecture extends Content {
  title: string
  date: string
  place: string
}

interface Publish extends Content {
  title: string
  date: string
  link: string
  media: string
  author: [Author]
}

interface Media extends Content {
  title: string
  date: string
  link: string
  media: string
}