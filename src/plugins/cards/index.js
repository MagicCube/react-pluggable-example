import { registerCardClass } from '../../im/plugin';
import LuckyMoneyCard from './LuckyMoneyCard';
import WebLinkCard from './WebLinkCard';

registerCardClass('com.example.LuckyMoneyCard', LuckyMoneyCard);
registerCardClass('com.example.WebLinkCard', WebLinkCard);

