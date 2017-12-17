import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import { getPluginClass } from '../../../im/plugin';

import styles from './index.less';

export default class CardMessage extends PureComponent {
  static propTypes = {
    cardType: PropTypes.string.isRequired,
    content: PropTypes.shape().isRequired
  }

  renderCard() {
    const { cardType, content } = this.props;
    const Card = getPluginClass('card', cardType);
    return (
      <Card {...content} />
    );
  }

  render() {
    return (
      <div className={styles.container}>
        {this.renderCard()}
      </div>
    );
  }
}
