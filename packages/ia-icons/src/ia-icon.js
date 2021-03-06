import { LitElement, html, css } from 'lit-element';
import advance from '@internetarchive/icon-advance';
import applePay from '@internetarchive/icon-applepay';
import audio from '@internetarchive/icon-audio';
import calendar from '@internetarchive/icon-calendar';
import calendarBlank from '@internetarchive/icon-calendar-blank';
import collapseSidebar from '@internetarchive/icon-collapse-sidebar';
import close from '@internetarchive/icon-close';
import creditCard from '@internetarchive/icon-credit-card';
import donate from '@internetarchive/icon-donate';
import download from '@internetarchive/icon-dl';
import ellipses from '@internetarchive/icon-ellipses';
import email from '@internetarchive/icon-email';
import facebook from '@internetarchive/icon-facebook';
import googlePay from '@internetarchive/icon-googlepay';
import iaLogo from '@internetarchive/icon-ia-logo';
import images from '@internetarchive/icon-images';
import link from '@internetarchive/icon-link';
import localePin from '@internetarchive/icon-locale-pin';
import lock from '@internetarchive/icon-lock';
import paypal from '@internetarchive/icon-paypal';
import pinterest from '@internetarchive/icon-pinterest';
import search from '@internetarchive/icon-search';
import share from '@internetarchive/icon-share';
import software from '@internetarchive/icon-software';
import texts from '@internetarchive/icon-texts';
import toc from '@internetarchive/icon-toc';
import tumblr from '@internetarchive/icon-tumblr';
import twitter from '@internetarchive/icon-twitter';
import upload from '@internetarchive/icon-upload';
import user from '@internetarchive/icon-user';
import venmo from '@internetarchive/icon-venmo';
import video from '@internetarchive/icon-video';
import visualAdjustment from '@internetarchive/icon-visual-adjustment';
import volumes from '@internetarchive/icon-volumes';
import web from '@internetarchive/icon-web';

const iconTemplates = {
  applePay,
  advance,
  audio,
  calendar,
  calendarBlank,
  collapseSidebar,
  close,
  creditCard,
  donate,
  download,
  ellipses,
  email,
  facebook,
  googlePay,
  iaLogo,
  images,
  link,
  localePin,
  lock,
  paypal,
  pinterest,
  search,
  share,
  software,
  texts,
  toc,
  tumblr,
  twitter,
  upload,
  user,
  venmo,
  video,
  visualAdjustment,
  volumes,
  web,
};

class IAIcon extends LitElement {
  static get properties() {
    return {
      icon: { type: String },
    };
  }

  static get styles() {
    return css`
      svg {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `;
  }

  constructor() {
    super();
    this.icon = '';
  }

  render() {
    return iconTemplates[this.icon] || html``;
  }
}

export default IAIcon;
