import { registerMessageClass } from '../../im/plugin';
import CardMessage from './CardMessage';
import ImageMessage from './ImageMessage';
import TextMessage from './TextMessage';

registerMessageClass('card', CardMessage);
registerMessageClass('image', ImageMessage);
registerMessageClass('text', TextMessage);
