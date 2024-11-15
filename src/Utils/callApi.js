export const callApi = async (url, method, data = null) => {
    try {
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };
  
      if (data) {
        options.body = JSON.stringify(data);
      }
  
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      if (response.headers.get('Content-Type').includes('application/json')) {
        return await response.json();
      }
  
      return response;
    } catch (error) {
      console.error(`API call error: ${error}`);
      throw error;
    }
  };
  

  export const deleteApi = async (url) => {
    return await callApi(url, 'DELETE');
  };
  
  export const postApi = async (url, data) => {
    return await callApi(url, 'POST', data);
  };
  

  export const putApi = async (url, data) => {
    return await callApi(url, 'PUT', data);
  };
  
  export const getApi = async (url) => {
    return await callApi(url, 'GET');
  };
  