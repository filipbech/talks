import { LitElement, html } from './node_modules/lit-html-element/lit-element.js';
import { RouterLink } from './node_modules/element-router/router-link.js';

import { calendarIcon } from './calendar-icon.js';
import { locationIcon } from './location-icon.js';
import { getTalks } from './data.js';

export class TalksListElement extends LitElement {
    render() {
        return html`
            <style>
                svg {
                    display:inline;
                    height:12px;
                }
            </style>
            <h1>List of talks</h1>
            <ul>
                ${this.talks.map(talk => html`
                    <li>
                        <strong>${talk.title}</strong><br/>
                        ${talk.what}<br/>
                        ${talk.where && html`${locationIcon} ${talk.where}<br/>` }
                        ${calendarIcon} ${talk.date.toLocaleDateString()}
                    </li>
                `)}
            </ul>
            <router-link href="/">go home</router-link>
        `;
    }

    constructor() {
        super();
        this.talks = [];
    }

    async connectedCallback() {
        super.connectedCallback();

        this.talks = await getTalks();
        this.invalidate();
    }
}
customElements.define('talks-list', TalksListElement);
