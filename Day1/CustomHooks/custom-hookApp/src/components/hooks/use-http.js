import {useState,useCallback} from 'react';
const useHttp = (requestConfig, applyData)=>{
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback (async () => {
    console.log("4");
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        requestConfig.url,{
            method:requestConfig.method ?requestConfig.method :'GET',
            headers:requestConfig.headers ? requestConfig.headers :{},
            body:requestConfig.body ? JSON.stringify(requestConfig.body) : null
        }
      );
        // const response = await fetch(requestConfig.url, {
        //     method: requestConfig.method,
        //     headers: requestConfig.headers,
        //     body: JSON.stringify(requestConfig.body),
        //   });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      console.log("3");
      applyData(data)

    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
    });
    return {isLoading,
            error,
            sendRequest,
        };
};
export default useHttp; 