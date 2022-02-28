import React from 'react';
import Dropzone from 'react-dropzone';

import styles from './ProductFileInput.module.scss';

const ProductFileInput = () => {
  return (
    
    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <section className={`${styles["ProductFileInput"]}`}>
          <div className={`${styles["ProductFileInput-Container"]}`} {...getRootProps()}>
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p>Drop the files here ...</p> :
                <p className={`${styles["ProductFileInput-Label"]}`}>Product key file</p>
            }
          </div>
        </section>
      )}
    </Dropzone>
  )
};

export default ProductFileInput;