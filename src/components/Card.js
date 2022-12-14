import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  handleTrunfo = (cardTrunfo) => {
    const trunfo = <span data-testid="trunfo-card">Super Trunfo</span>;
    return cardTrunfo === true ? trunfo : '';
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo } = this.props;
    return (
      <div className="card-preview">
        <p data-testid="name-card">{ cardName }</p>
        <img
          data-testid="image-card"
          className="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <p data-testid="description-card">{ cardDescription }</p>
       <div className="atributos">
          <p data-testid="attr1-card">{ cardAttr1 }</p>
          <p data-testid="attr2-card">{ cardAttr2 }</p>
          <p data-testid="attr3-card">{ cardAttr3 }</p>
        </div>
        <p data-testid="rare-card">{ cardRare }</p>
        <p>{ this.handleTrunfo(cardTrunfo) }</p>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
