import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiData } from '../store/Store';
import './Greetings.css';

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
        A comerla toda:
        {apiError}
      </div>
    );
  }

  return (
    <div className="container-button">
      <button className="button" type="button" onClick={() => dispatch(fetchApiData())}>
        {apiData.greeting}
      </button>
    </div>
  );
};

export default Greetings;
