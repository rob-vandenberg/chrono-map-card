import MapCard from "./components/MapCard.js"
import MapCardEntityMarker from "./components/MapCardEntityMarker.js"

if (!customElements.get("chrono-map-card")) {
  customElements.define("chrono-map-card", MapCard);
  customElements.define("chrono-map-card-entity-marker", MapCardEntityMarker);
  console.info(
    `%cchrono-map-card: CHRONO_MAP_CARD_VERSION`,
    'color: orange; font-weight: bold; background: black'
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
