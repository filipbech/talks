import { TalksAppElement } from './talks-app.js';

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}