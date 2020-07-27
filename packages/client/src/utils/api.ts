export async function getApi<T>(apiName: string) {
  const { API_ENDPOINT } = process.env
  const apiUrl = `${API_ENDPOINT}/${apiName}`

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

    return data
  } catch (error) {
    console.log(error)
    return error
  }
}
