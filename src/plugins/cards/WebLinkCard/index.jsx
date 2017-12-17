import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import styles from './index.less';

export default class WebLinkCard extends PureComponent {
  static propTypes = {
    description: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
  }

  render() {
    const {
      description, href, title, thumbnailUrl
    } = this.props;
    return (
      <a className={styles.container} href={href} target="_blank">
        <div className={styles.title}>{title}</div>
        <div className={styles.details}>
          <div className={styles.description}>{description}</div>
          <div
            className={styles.thumbnail}
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
          />
        </div>
      </a>
    );
  }
}
