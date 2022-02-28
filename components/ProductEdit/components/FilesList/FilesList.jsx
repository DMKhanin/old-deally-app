import React, { useState } from 'react';
import { getFiles } from '../../../../api/DashboardAPI';
import styles from './FilesList.module.scss';

const FilesList = ({ items }) => {
  return (
    <div>
      { items.map(file => 
        <div className={styles['FilesList-Item']}>
          <div>{ file.name } - <span>{ file.createdAt }</span></div>
          <div>
            <button>Delete</button>
            <button>Reserve</button>
          </div>
        </div>
      )}
    </div>
  )
}

module.exports = FilesList;