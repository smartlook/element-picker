// Code written here gets executed on every page load.
// This is going to be the entrypoint of your assignment.
// To learn more about content scripts please refer to:
// 	https://developer.chrome.com/docs/extensions/mv3/content_scripts/
// Please note that this code gets executed on EVERY page. If you want to whitelist only some pages you can adjust
// manifest.json file, or you can overwrite it in extension settings:
// 	1. Go to chrome://extensions/
// 	2. Click on `details` button of this extension
//  3. Go to `Site access` sections and adjust it to your needs.

import { isElement } from './utils'
import styles from './index.module.css'

// This simple demo application just renders fixed div element to a page and display the current element,
// i.e. element that mouse cursor points to

const fontLink = document.createElement('link')
fontLink.type = 'text/css'
fontLink.rel = 'stylesheet'
fontLink.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;subset=latin-ext&display=swap'

document.head.appendChild(fontLink)

// Create elements
const elementPickerModal = document.createElement('div')
elementPickerModal.id = styles.smartlookElementPicker

const textNote = document.createElement('h3')
textNote.innerText = 'Current element:'
elementPickerModal.append(textNote)

document.body.append(elementPickerModal)
