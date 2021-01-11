export const BASE_URL = '/api';

const Client = async (path: string, {body, ...customConfig}: any = {}) => {
    const config = {
        ...customConfig,
        headers: {
          ...customConfig.headers,
        },
    }

    if (body) {
        config.body = JSON.stringify(body)
    }

    return fetch(`${BASE_URL}/${path}`, config).then(async response => {
        const data = await response.json()
        if (response.ok) {
          return data
        } else {
          return Promise.reject(data)
        }
      })
}

export default Client;