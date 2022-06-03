import { createClient } from 'newt-client-js'
import { Career, NewtConfig, Profile, Resume, Statement, TopImage } from '@/@types/newt'

const config: NewtConfig  = {
  spaceUid: 'yuji',
  appUid: 'profile',
  token: 'ATLioJLdyu1pVV8WU2ru24HD33rTyzLBpdcAd5_8jiA'
}

const client = createClient({
  spaceUid: config.spaceUid,
  token: config.token
})

export const fetchProfile = async () => {
  const response = await client.getContents<Profile>({
    appUid: config.appUid,
    modelUid: 'profile',
    query: {
      order: ['priority']
    }
  })
  return response
}

export const fetchStatement = async () => {
  const response = await client.getFirstContent<Statement>({
    appUid: config.appUid,
    modelUid: 'statement'
  })
  return response
}

export const fetchTopImage = async () => {
  const response = await client.getFirstContent<TopImage>({
    appUid: config.appUid,
    modelUid: 'topimage'
  })
  return response
}

export const fetchHistory = async () => {
  const response = await client.getContents<Resume>({
    appUid: config.appUid,
    modelUid: 'history',
    query: {
      order: ['date']
    }
  })
  return response
}

export const fetchActivity = async () => {
  const response = await client.getContents<Career>({
    appUid: config.appUid,
    modelUid: 'activity',
    query: {
      order: ['beginDate', 'endDate']
    }
  })
  return response
}

export const fetchCareer = async () => {
  const response = await client.getContents<Career>({
    appUid: config.appUid,
    modelUid: 'career',
    query: {
      order: ['beginDate', 'endDate']
    }
  })
  return response
}