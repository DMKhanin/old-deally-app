import React, { useState, useRef } from 'react';

/*** Components ***/
import { Col, Row } from 'react-bootstrap';
import Button from '@controls/Button';
import Input from '@controls/Input';
import H1 from '@typography/H1';
import P from '@typography/P';

/*** Styles ***/
import styles from './NewShopForm.module.scss';
import { useEffect } from 'react';

const NewShopForm = ({ title, subtitle, beforeFieldName, defaultFieldValue, fieldName, fieldPlaceholder, onSubmit, onReset, prevBtnText, nextBtnText }) => {
    const [value, setValue] = useState(defaultFieldValue || '');
    const formRef = useRef(null);

    useEffect(() => {
        if (fieldName) {
            formRef.current.querySelector('input').focus();
        }
    }, [])

    const _onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        onSubmit(data);
    }

    const _onReset = () => {
        let data = {};
        data[beforeFieldName] = null;
        onReset(data);
    }

    return (
        <div className={`${styles["NewShopForm"]}`}>
            <H1>{title}</H1>
            <div className="pt-1">
                <P>{subtitle}</P>
            </div>
            <form  ref={formRef} onSubmit={(e) => _onSubmit(e)} onReset={() => _onReset()} className="pt-5">
                { fieldName && <div className="pb-4">
                    <Input onChange={({ target }) => { setValue(target.value) }} value={value} name={fieldName} defaultValue={defaultFieldValue} placeholder={fieldPlaceholder} />
                </div>
                }
                <Row>
                    { beforeFieldName && 
                        <Col>
                            <Button size="small" color="white" type="reset">{ prevBtnText }</Button>
                        </Col>
                    }
                    <Col>
                        <Button disabled={fieldName && value.length <= 3}  size="small" type="submit">{ nextBtnText }</Button>
                    </Col>
                </Row>
            </form>
        </div>    
    )
}

export default NewShopForm;