import { createClient } from '@bridgeuidev/cms-client'
import { Career, Lecture, Media, Paper, Patent, Profile, Publish, Resume, Statement, TopImage, Work } from '@/@types/newt'

// portfolio-cms (Firebase 製ヘッドレスCMS) の Newt 互換読み取りSDK。
// spaceUid/appUid は Newt から流用、token は不要（公開read）で projectId に置き換わる。
// projectId は runtimeConfig 経由（NUXT_PUBLIC_FIREBASE_PROJECT_ID で上書き可）。
let _client: ReturnType<typeof createClient> | null = null
const client = () => {
  if (!_client) {
    _client = createClient({
      projectId: useRuntimeConfig().public.firebaseProjectId as string,
      spaceUid: 'yuji',
      appUid: 'profile'
    })
  }
  return _client
}

export const fetchProfile = async () => {
  const response = await client().getContents<Profile>({
    modelUid: 'profile',
    query: {
      order: ['priority']
    }
  })
  return response
}

export const fetchStatement = async () => {
  const response = await client().getFirstContent<Statement>({
    modelUid: 'statement'
  })
  return response
}

export const fetchTopImage = async () => {
  const response = await client().getFirstContent<TopImage>({
    modelUid: 'topimage'
  })
  return response
}

export const fetchHistory = async () => {
  const response = await client().getContents<Resume>({
    modelUid: 'history',
    query: {
      order: ['date']
    }
  })
  return response
}

export const fetchActivity = async () => {
  const response = await client().getContents<Career>({
    modelUid: 'activity',
    query: {
      order: ['beginDate', 'endDate']
    }
  })
  return response
}

export const fetchCareer = async () => {
  const response = await client().getContents<Career>({
    modelUid: 'career',
    query: {
      order: ['beginDate', 'endDate']
    }
  })
  return response
}

export const fetchPapers = async () => {
  const response = await client().getContents<Paper>({
    modelUid: 'paper',
    query: {
      order: ['year', 'month']
    }
  })
  return response
}

export const fetchPatents = async () => {
  const response = await client().getContents<Patent>({
    modelUid: 'patent',
    query: {
      order: ['number']
    }
  })
  return response
}

export const fetchLectures = async () => {
  const response = await client().getContents<Lecture>({
    modelUid: 'lecture',
    query: {
      order: ['date']
    }
  })
  return response
}

export const fetchPublishes = async () => {
  const response = await client().getContents<Publish>({
    modelUid: 'publish',
    query: {
      order: ['date']
    }
  })
  return response
}

export const fetchMedia = async () => {
  const response = await client().getContents<Media>({
    modelUid: 'media',
    query: {
      order: ['date']
    }
  })
  return response
}

export const fetchWorks = async () => {
  const response = await client().getContents<Work>({
    modelUid: 'work',
    query: {
      order: ['isCurrent', 'beginYear', 'endYear'],
      depth: 2
    },
    
  })
  return response
}