import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiData } from '../store/Store';

const Greetings = () => {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.api.data);
  const apiStatus = useSelector((state) => state.api.status);
  const apiError = useSelector((state) => state.api.error);

  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);

  if (apiStatus === 'loading') {
    return (
      <div>
        Loading...
      </div>
    );
  }

  if (apiStatus === 'failed') {
    return (
      <div>
        Error:
        {apiError}
      </div>
    );
  }

  return apiData.map((item) => <div key={item.id}>{item.name}</div>);
};

export default Greetings;
