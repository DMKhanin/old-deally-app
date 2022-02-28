import React from 'react';

/*** Components ***/
import { Container, Row, Col} from 'react-bootstrap';

/*** Styles ***/
import styles from './MainPageSection.module.scss';


const MainPageSection = ({ title, description, children, titleSize }) => {
    return (
        <section className={`${styles['MainPageSection']}`}>
            <Container>
                {/* Title section */}
                <Row>
                    <Col xl={{span: titleSize === 'big' ? 8 : 6, offset: titleSize === 'big' ? 2 : 3}} >
                        <h2 className={`${styles['MainPageSection-Title']} ${styles['MainPageSection-Title_size_'  + titleSize]}`} dangerouslySetInnerHTML={{__html: title }} />
                        <p className={`${styles['MainPageSection-Description']}`}>{ description }</p>
                    </Col>
                </Row>
                {/* Content section */}
                <Row>
                    <Col xl={{span: 8, offset: 2}} >
                        { children }
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default MainPageSection;