import LRUCache from 'lru-cache'
import { createQueryParams } from "./helperFn"
import { SEARCH_URL, SUBJECT_URL, cachingOptions } from "./constants"

const createFullURL = (URL, queryParams = {}) => {
  let reqUrl = URL;
  if (Object.keys(queryParams).length > 0) {
    reqUrl = reqUrl + '?' + createQueryParams(queryParams)
  }
  return reqUrl
}

/**
 * @param {*} url: String 
 * @returns 
 */
const getHandler = async (url) => {
  return new Promise((resolve, reject) => {
    if(apiCache.has(url)) return resolve(apiCache.get(url))
    fetch(url)
    .then(res => {
      if(res && res.status === 200) return res.json();
      throw res;
    })
    .then(data => {
      apiCache.set(url, data)
      resolve(data)
    })
    .catch(err => {
      console.log("error ", err)
      reject();
    })
  })
}

/**
 * 
 * @param {*} query : object
 * @returns 
 */
export const getBooks = async (query) => {
  const url = createFullURL(SEARCH_URL, query)
  try {
    const res  = await getHandler(url)
    return res;      
  } catch (error) {
    console.log("get Book Error ", error)
    return {} 
  }
}

/**
 * @param {*} subject : String 
 * @param {*} query : Object
 * @returns 
 */
export const getBooksBySubjectName = async (subject, query) => {
    const reqUrl = `${SUBJECT_URL}${subject.toLowerCase()}.json`
    const url = createFullURL(reqUrl, query)
    try {
      const res  = await getHandler(url)
      return res;      
    } catch (error) {
      console.log("get Subject Error ", error)
      return {} 
    }
}

