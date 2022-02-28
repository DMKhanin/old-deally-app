import React from 'react';
import Loader from "./../Loader";
import { Col, Row, Container } from 'react-bootstrap';
import ButtonSmall from './../ButtonSmall';
import EmptyCardHorizontal from '../EmptyCardHorizontal';

const EditingSection = ({ modalComponent, titleText, buttonText, items, itemComponent, onButtonClick, isLoaded = false , emptyCardPicture, emptyCardContent}) => {
  const ModalComponent = modalComponent;
  const ItemComponent = itemComponent;

  return (
    <Container>
      <Row className="pt-5">
        <Col>
          <h2 className="pb-5">{ titleText }</h2>
        </Col>
        <Col className="d-flex align-items-start justify-content-end">
          { items?.length > 0 && isLoaded && <ButtonSmall onClick={() => onButtonClick()}>{ buttonText }</ButtonSmall> }
          <ModalComponent />
        </Col>
      </Row>
      { items &&
        <Row>
          { items.map(item =>
            <Col xs={3} className="pb-5">
              <ItemComponent {...item} />
            </Col>
          )}
        </Row>
      }

      { items?.length <= 0 && isLoaded &&
        <EmptyCardHorizontal
        imgSrc={emptyCardPicture}
        buttonText={buttonText}
        onClickButton={() => onButtonClick()}
        >
          {emptyCardContent}
        </EmptyCardHorizontal>
      }
      { !isLoaded && <Loader /> }
    </Container>
  )
};

export default EditingSection;