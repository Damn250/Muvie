import { useState, useEffect } from "react";

function useAsyncTask(startAsync, onFinish) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const loadAsync = async () => {
      try {
        await startAsync();
        setLoading(false);
        onFinish && onFinish();
      } catch (error) {
        console.warn(error);
      }
    };
  }, []);
}

export default useAsyncTask;
