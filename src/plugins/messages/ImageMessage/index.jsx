import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import styles from './index.less';

export default class PictureMessage extends PureComponent {
  static propTypes = {
    thumbnailUrl: PropTypes.string
  }

  static defaultProps = {
    thumbnailUrl: null
  }

  render() {
    const { thumbnailUrl } = this.props;
    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          src={thumbnailUrl}
        />
      </div>
    );
  }
}
