import { ElementRouter } from './node_modules/element-router/element-router.js';
import { RouterLink } from './node_modules/element-router/router-link.js';

import { LitElement, html } from './node_modules/lit-html-element/lit-element.js';

import { TalksListElement } from './talks-list.js';

export class TalksAppElement extends LitElement {
    render() {
        return html`
            <element-router>
                <element-route path="/">
                    <template>
                        <h1>Talks...</h1>
                        <router-link href="/talks">go to talks</router-link>
                    </template>
                </element-route>
                <element-route path="/talks" element="talks-list"></element-route>
            </element-router>
        `;
    }
}
customElements.define('talks-app', TalksAppElement);