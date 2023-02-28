import React from 'react';
import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="loader">
      <Oval
        height={80}
        width={80}
        color="#747474"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#fff"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};
