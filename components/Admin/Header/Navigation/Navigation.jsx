import React, { useState } from 'react';
import { FaChartPie, FaRegEdit, FaCog, FaUserCircle } from "react-icons/fa";
import Input from '../../../Input';
import NavigationCategory from '../NavigationCategory';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const _onClose = () => {
    setSelectedItem(null);
  }
  
  return (
    <>
      <div className={`${styles['Navigation']}`}>
        <button className={`${styles['Navigation__button']}`} onClick={() => setSelectedItem('analytics')}><FaChartPie/>Analytics</button>
        <button className={`${styles['Navigation__button']}`} onClick={() => setSelectedItem('shopsettings')}><FaCog />Shop settings</button>
        <button className={`${styles['Navigation__button']} ${styles['Navigation__button--margin-right--none']}`}><FaUserCircle /></button>
      </div>
      <NavigationCategory visible={selectedItem === 'analytics'? 'visible' : false} onClose={() => { _onClose() }}>
        <h2>Analytics</h2>
      </NavigationCategory>
      <NavigationCategory visible={selectedItem === 'shopsettings' ? 'visible' : false}  onClose={() => { _onClose() }}>
        <h2>Shop settings</h2>
        <Input type="text" name="slug" label="Shop slug" status="default" onChange={() => {}}/>
        <Input type="text" name="slug" label="Shop slug" status="default" onChange={() => {}}/>
        <Input type="text" name="slug" label="Shop slug" status="default" onChange={() => {}}/>
        <Input type="text" name="slug" label="Shop slug" status="default" onChange={() => {}}/>
        <Input type="text" name="slug" label="Shop slug" status="default" onChange={() => {}}/>
        <Input type="text" name="slug" label="Shop slug" status="default" onChange={() => {}}/>
        <Input type="text" name="slug" label="Shop slug" status="default" onChange={() => {}}/>
        <Input type="text" name="slug" label="Shop slug" status="default" onChange={() => {}}/>
        <Input type="text" name="slug" label="Shop slug" status="default" onChange={() => {}}/>
        <Input type="text" name="slug" label="Shop slug" status="default" onChange={() => {}}/>
        <Input type="text" name="slug" label="Shop slug" status="default" onChange={() => {}}/>
        <Input type="text" name="slug" label="Shop slug" status="default" onChange={() => {}}/>
        <Input type="text" name="slug" label="Shop slug" status="default" onChange={() => {}}/>
        <Input type="text" name="slug" label="Shop slug" status="default" onChange={() => {}}/>
        <Input type="text" name="slug" label="Shop slug" status="default" onChange={() => {}}/>
        <Input type="text" name="slug" label="Shop slug" status="default" onChange={() => {}}/>
        <Input type="text" name="slug" label="Shop slug" status="default" onChange={() => {}}/>
        <Input type="text" name="slug" label="Shop slug" status="default" onChange={() => {}}/>
        <Input type="text" name="slug" label="Shop slug" status="default" onChange={() => {}}/>
        <Input type="text" name="slug" label="Shop slug" status="default" onChange={() => {}}/>
        <Input type="text" name="slug" label="Shop slug" status="default" onChange={() => {}}/>
        <Input type="text" name="slug" label="Shop slug" status="default" onChange={() => {}}/>
        <Input type="text" name="slug" label="Shop slug" status="default" onChange={() => {}}/>
        <Input type="text" name="slug" label="Shop slug" status="default" onChange={() => {}}/>
        <Input type="text" name="slug" label="Shop slug" status="default" onChange={() => {}}/>
        <Input type="text" name="slug" label="Shop slug" status="default" onChange={() => {}}/>
      </NavigationCategory>
    </>
  )
};

export default Navigation;