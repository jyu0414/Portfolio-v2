import { Content } from 'newt-client-js'

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
  date: Date
  link: string
}

interface Career extends Content {
  organization: string
  organizationEnglish: string
  jobTitle: string
  jobTitleEnglish: string
  beginDate: Date
  endDate: Date
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
  description: string
  descriptionEnglish: string
  paper: [Paper]
}
