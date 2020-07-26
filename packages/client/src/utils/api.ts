export async function getApi<T>(apiName: string) {
  const apiUrl = `${process.env.API_ENDPOINT}/${apiName}`
  console.log(apiUrl)
  try {
    const headers = {
      'cache-control': 'no-cache',
      'Content-Type': 'application/json',
    }
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers,
    })

    const data: T = await response.json()

    console.log(data)

    return data
  } catch (error) {
    console.log(error)
    return error
  }
}
