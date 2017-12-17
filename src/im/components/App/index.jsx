import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import MessageList from '../MessageList';

import styles from './index.less';

@connect(state => ({ messages: state.session.messages }))
export default class App extends PureComponent {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number
    }))
  }

  static defaultProps = {
    messages: []
  }

  render() {
    const { messages } = this.props;
    return (
      <div className={styles.container}>
        <MessageList messages={messages} />
      </div>
    );
  }
}
