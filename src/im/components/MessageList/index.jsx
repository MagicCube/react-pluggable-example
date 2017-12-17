import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import { getPluginClass } from '../../plugin';
import styles from './index.less';

export default class MessageList extends PureComponent {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number
    }))
  }

  static defaultProps = {
    messages: []
  }

  renderMessages() {
    const { messages } = this.props;
    return messages.map((message) => {
      const messageType = message.type;
      const Message = getPluginClass('message', messageType);
      return (
        <Message key={message.id} {...message.body} />
      );
    });
  }

  render() {
    return (
      <ul className={styles.container}>
        {this.renderMessages()}
      </ul>
    );
  }
}
