import React, {useState} from 'react';

/*** Components ****/
import { Col, Container, Row } from 'react-bootstrap';
import NewShopForm from '@partails/NewShopForm';
import { CSSTransition } from 'react-transition-group';
import { createShop } from '@api/DashboardAPI';
import DashboardHeader from '@partails/DashboardHeader';

/*** Styles ***/
import styles from '../../styles/pages/CreateNewShop.module.scss';

/*** Helpers ***/
import transliterate from '@helpers/transliterate';


/*** Helpers ***/
import { useRouter } from 'next/router';

const NewShop = () => {
    const [newShopData, setNewShopData] = useState({})
    const [currentStep, setCurrentStep] = useState('name');
    const [direction, setDirection ] = useState('right');
    const router = useRouter();

    /**
     * Change shop data handler
     * @param {Object} data Data of shop object
     * @param {String} nextStep Code of next step
     */
    const _onChangeNewShopData = (data, nextStep) => {
        setDirection('right');
        setCurrentStep(nextStep);
        setNewShopData({...newShopData, ...data});
    }

    /**
     * Handle click to prev button
     * @param {String} nextStep Code of next step
     */
    const _onGoToBackState = (nextStep) => {
        setDirection('left');
        setCurrentStep(nextStep);
    }

    /**
     * Send request to create shop, and riderect to edit page
     */
    const saveShop = async () => {
        const { data } = await createShop({...newShopData});
        router.push('/dashboard/shop/' + data.shop._id);
    }

    return (
        <>
        <DashboardHeader />
        <Container>
            <Row>
                <Col lg={7} md={12} className={`${styles['CreateNewShop-Picture']} d-lg-block d-none`}>
                    <img style={{width: '100%', height: 'auto'}} src="/images/dashboard/create-shop-picture.png" loading="lazy" />
                </Col>
                <Col xl={{span: 4, offset: 0}} lg={{span: 5, offset: 0}} md={{span: 6, offset: 3}} sm={{ span: 8, offset: 2}} xs={{span: 12, offset: 0}}  className={`${styles['CreateNewShop-Content']}`}>
                    <div style={{position: 'relative'}}>
                        {/* Create name slide */}
                        <CSSTransition
                            in={currentStep === 'name'}
                            timeout={500}
                            classNames={`slide-${direction}`}
                            unmountOnExit
                        >
                            <NewShopForm 
                                title="Create shop name"
                                subtitle="You can change name soon."
                                fieldName="name"
                                nextBtnText="Next"
                                prevBtnText="Go back"
                                defaultFieldValue={newShopData?.name}
                                fieldPlaceholder="Eneter shop name"
                                onSubmit={(data) => _onChangeNewShopData(data, 'slug')}
                            />
                        </CSSTransition>
                        {/* Create slug slide */}
                        <CSSTransition
                            in={currentStep === 'slug'}
                            timeout={500}
                            classNames={`slide-${direction}`}
                            unmountOnExit
                        >
                            <NewShopForm 
                                title="Create shop slug"
                                subtitle="You can change slug soon 1 per month."
                                fieldName="slug"
                                beforeFieldName="name"
                                nextBtnText="Next"
                                prevBtnText="Go back"
                                defaultFieldValue={newShopData?.slug ? newShopData.slug : transliterate(newShopData.name)}
                                fieldPlaceholder="Eneter shop slug"
                                onSubmit={(data) => _onChangeNewShopData(data, 'end')}
                                onReset={(data) => _onGoToBackState('name')}
                            />
                        </CSSTransition>
                        {/* Submit slide */}
                        <CSSTransition
                            in={currentStep === 'end'}
                            timeout={500}
                            classNames={`slide-${direction}`}
                            unmountOnExit
                        >
                            <NewShopForm 
                                title="Ready to selling?"
                                subtitle="Congritulations! You can selling yout digital products now."
                                beforeFieldName="slug"
                                nextBtnText="Start selling"
                                prevBtnText="Go back"
                                onSubmit={() => saveShop()}
                                onReset={() => _onGoToBackState('slug')}
                            />
                        </CSSTransition>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default NewShop;