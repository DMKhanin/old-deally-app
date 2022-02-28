import React from 'react';

const Error = ({ statusCode }) => {
  return (
    <div> Status code: { statusCode}</div>
  )
};


Error.getInitialProps = ({ res, err }) => {
  const currentStatusCode = res?.statusCode || 500;
  const throwedStatusCode = err?.statusCode;

  const statusCode = throwedStatusCode || currentStatusCode;

  if (res) {
    res.statusCode = statusCode;
  }

  return { statusCode };
};


export default Error;