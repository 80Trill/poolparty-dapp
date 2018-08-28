/* global Web3 */

import 'focus-visible';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import './stylesheets/app.scss';


function getWeb3() {
    return new Promise((resolve, reject) => {

        const web3 = window.web3;

        // If web3 is not injected (modern browsers)...
        if (typeof web3 === 'undefined') {
            // Listen for provider injection
            window.addEventListener('message', ({ data }) => {
                if (data && data.type && data.type === 'ETHEREUM_PROVIDER_SUCCESS') {
                    // Use injected provider, start dapp...
                    resolve(new Web3(window.ethereum));
                } else {
                    resolve(new Web3(new Web3.providers.HttpProvider('http://localhost:8545')));
                }
            });
            // Request provider
            window.postMessage({ type: 'ETHEREUM_PROVIDER_REQUEST', web3: true }, '*');
        }
        // If web3 is injected (legacy browsers)...
        else {
            // Use injected provider, start dapp
            resolve(new Web3(web3.currentProvider));
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    getWeb3()
        .then(web3 => {
            ReactDOM.render(
                <App web3={web3} />
                , document.getElementById('appRoot')
            );
        })
        .catch(err => console.error(err));
});
