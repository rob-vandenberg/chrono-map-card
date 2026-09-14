import MapCard from "./components/MapCard.js"
import MapCardEntityMarker from "./components/MapCardEntityMarker.js"
import { version } from '../package.json'

if (!customElements.get("chrono-map-card")) {
  customElements.define("chrono-map-card", MapCard);
  customElements.define("chrono-map-card-entity-marker", MapCardEntityMarker);
  console.info(
    `%c CHRONO-%cMAP%c-CARD %c v${version} `,
    'background-color: #101010; color: #FFFFFF; font-weight: bold; padding: 2px 0 2px 4px; border-radius: 3px 0 0 3px;',
    'background-color: #101010; color: #4676d3; font-weight: bold; padding: 2px 0;',
    'background-color: #101010; color: #FFFFFF; font-weight: bold; padding: 2px 4px 2px 0;',
    'background-color: #1E1E1E; color: #FFFFFF; font-weight: bold; padding: 2px 4px; border-radius: 0 3px 3px 0;'
  )
}

// Register card so that it appears in the "Card Picker"
window.customCards.push({
    name: 'Chrono Map Card',
    description: 'A fork of ha-map-card with custom modifications',
    type: 'chrono-map-card',
    preview: true,
    documentationURL: `https://github.com/rob-vandenberg/chrono-map-card`,
});
