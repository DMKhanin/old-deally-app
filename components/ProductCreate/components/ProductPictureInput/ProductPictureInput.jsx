import React from 'react';
import Dropzone from 'react-dropzone';

import styles from './ProductPictureInput.module.scss';

const ProductPictureInput = ({ onAcceptFiles }) => {
  return (
    <Dropzone onDrop={acceptedFiles => onAcceptFiles(acceptedFiles)}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <section className={`${styles["ProductPictureInput"]}`}>
          <div className={`${styles["ProductPictureInput-Container"]}`} {...getRootProps()}>
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p>Drop the files here ...</p> :
                <p className={`${styles["ProductPictureInput-Label"]}`}>Click here or drop files here for upload product picture</p>
            }
          </div>
        </section>
      )}
    </Dropzone>
  )
};

export default ProductPictureInput;