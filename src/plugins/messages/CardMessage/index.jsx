import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import styles from './index.less';

export default class CardMessage extends PureComponent {
  static propTypes = {
    cardType: PropTypes.string
  }

  static defaultProps = {
    cardType: null
  }

  render() {
    const { cardType } = this.props;
    return (
      <div className={styles.container}>
        {cardType}
      </div>
    );
  }
}
