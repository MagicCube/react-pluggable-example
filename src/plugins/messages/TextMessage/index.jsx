import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import styles from './index.less';

export default class TextMessage extends PureComponent {
  static propTypes = {
    text: PropTypes.string
  }

  static defaultProps = {
    text: null
  }

  render() {
    const { text } = this.props;
    return (
      <div className={styles.container}>
        {text}
      </div>
    );
  }
}
