import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import { getPluginClass } from '../../plugin';
import styles from './index.less';

export default class MessageList extends PureComponent {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      header: PropTypes.shape({
        sender: PropTypes.shape({
          name: PropTypes.string,
          avatarUrl: PropTypes.string
        })
      })
    }))
  }

  static defaultProps = {
    messages: []
  }

  renderMessages() {
    const { messages } = this.props;
    return messages.map((message) => {
      const {
        id,
        header: {
          sender
        }
      } = message;
      const messageType = message.type;
      const Message = getPluginClass('message', messageType);
      return (
        <li key={id}>
          <div className={styles.avatar} style={{ backgroundImage: `url(${sender.avatarUrl})` }} />
          <div className={styles.messageBox}>
            <div className={styles.senderName}>{sender.name}</div>
            <Message messageId={message.id} {...message.body} />
          </div>
        </li>
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
