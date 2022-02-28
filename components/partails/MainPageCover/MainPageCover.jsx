import React from 'react'

/*** Components ***/
import { Container, Row, Col} from 'react-bootstrap';

/*** Styles ***/
import styles from './MainPageCover.module.scss';

const MainPageCover = ({ title, description }) => {
    return (
        <section className={`${styles['MainPageCover']}`}>
            <Container>
                <Row>
                    <Col>
                        <h1 className={`${styles['MainPageCover-Title']}`} dangerouslySetInnerHTML={{__html: title}}></h1>
                        <p className={`${styles['MainPageCover-Description']}`}>{ description }</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default MainPageCover;