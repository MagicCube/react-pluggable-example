import { registerCardClass } from '../../im/plugin';
import LuckyMoneyCard from './LuckyMoneyCard';
import WebLinkCard from './WebLinkCard';

registerCardClass('com.example.plugins.cards.LuckyMoneyCard', LuckyMoneyCard);
registerCardClass('com.example.plugins.cards.WebLinkCard', WebLinkCard);

