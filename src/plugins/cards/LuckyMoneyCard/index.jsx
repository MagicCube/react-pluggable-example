import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import styles from './index.less';

export default class LuckyMoneyCard extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
  }

  render() {
    const {
      title, total
    } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.icon} />
        <div className={styles.details}>
          <div className={styles.title}>{title}</div>
          <div className={styles.total}>{total} 元</div>
        </div>
      </div>
    );
  }
}
