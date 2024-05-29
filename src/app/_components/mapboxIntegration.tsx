'use client'

import React, {useCallback, useState, useRef, useMemo, useEffect} from 'react';
import {MapboxOverlay} from '@deck.gl/mapbox';
import {ArcLayer} from '@deck.gl/layers';
import {H3HexagonLayer} from '@deck.gl/geo-layers';
import {scaleLog} from 'd3-scale';
import {cellToLatLng} from 'h3-js';
import Papa from 'papaparse'
import {Map, NavigationControl, useControl, Layer} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const TOKEN = 'pk.eyJ1IjoienVrYXppbmUiLCJhIjoiY2x3ZzZhZnBlMDFqczJqbzc4cWRoa3huMCJ9.NMAXOL6N04GuU6zcwz77Hw'
const MAP_STYLE = 'mapbox://styles/mapbox/light-v9'
const DATA_URL = 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/safegraph/sf-pois.csv'

const colorScale = scaleLog()
  .domain([10, 100, 1000, 10000])
  // @ts-ignore
  .range([
    [255, 255, 178],
    [254, 204, 92],
    [253, 141, 60],
    [227, 26, 28]
  ]);

const buildings3DLayer = {
  id: '3d-buildings',
  source: 'composite',
  'source-layer': 'building',
  filter: ['==', 'extrude', 'true'],
  type: 'fill-extrusion',
  minzoom: 14,
  paint: {
    'fill-extrusion-color': '#ccc',
    'fill-extrusion-height': ['get', 'height']
  }
};

// @ts-ignore
function DeckGLOverlay(props) {
  const overlay = useControl(() => new MapboxOverlay(props));
  overlay.setProps(props);
  return null;
}

// @ts-ignore
const MapboxIntegration = () => {
  const [selectedPOI, setSelectedPOI] = useState('8a283082aa17fff');
  const [firstLabelLayerId, setFirstLabelLayerId] = useState();
  const [data, setData] = useState()
  const mapRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(DATA_URL);
        const csvText = await response.text();
        
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            const parsedData = results.data.map((d) => ({
              // @ts-ignore 
              hex : d.hex, 
              // @ts-ignore
              home_lat: parseFloat(d.home_lat),
              // @ts-ignore
              home_lng: parseFloat(d.home_lng), 
              // @ts-ignore
              count: parseInt(d.count)
            }));
            // @ts-ignore 
            setData(parsedData);
          },
          // @ts-ignore
          error: (error) => {
            console.error('Error parsing CSV:', error);
          }
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  // console.log(data)

  const onMapLoad = useCallback(() => {
		// @ts-ignore
    setFirstLabelLayerId(getFirstLabelLayerId(mapRef.current.getStyle()));
  }, []);

  const selectedPOICentroid = useMemo(() => {
    const [lat, lng] = cellToLatLng(selectedPOI);
    return [lng, lat];
  }, [selectedPOI]);

	// @ts-ignore
  const arcs = useMemo(() => filterArcs(data, selectedPOI), [data, selectedPOI]);

	// @ts-ignore
  const hexes = useMemo(() => aggregateHexes(data), [data]);

  const arcLayer = new ArcLayer({
    id: 'deckgl-connections',
    data: arcs,
		// @ts-ignore
    getSourcePosition: d => selectedPOICentroid,
    getTargetPosition: d => [d.home_lng, d.home_lat],
    getSourceColor: [255, 0, 128],
    getTargetColor: [0, 200, 255],
    getWidth: d => Math.max(2, d.count / 15)
  });

  const poiLayer = new H3HexagonLayer({
    id: 'deckgl-pois',
    data: hexes,
    opacity: 0.4,
    pickable: true,
    autoHighlight: true,
    onClick: ({object}) => object && setSelectedPOI(object.hex),
    getHexagon: d => d.hex,
		// @ts-ignore
    getFillColor: d => colorScale(d.count),
    extruded: false,
    stroked: false,
    beforeId: firstLabelLayerId
  });

  return (
    <div id='map' className='h-screen w-full relative'>
      <Map
        // @ts-ignore
        ref={mapRef}
        mapboxAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/light-v9"
        antialias={true}
        initialViewState={{
          longitude: -122.4034,
          latitude: 37.7845,
          zoom: 15.5,
          bearing: 20,
          pitch: 60
        }}
        onLoad={onMapLoad}
      >
        <DeckGLOverlay interleaved={true} layers={[poiLayer, arcLayer]} />
        <NavigationControl />
        {/* @ts-ignore */}
        <Layer {...buildings3DLayer} />
      </Map>
    </div>
  );
}

export default MapboxIntegration; 

// @ts-ignore
function filterArcs(data, selectedPOI) {
  if (!data) {
    return null;
  }
	// @ts-ignore
  return data.filter(d => d.hex === selectedPOI);
}

// @ts-ignore
function aggregateHexes(data) {
  if (!data) {
    return null;
  }
  const result = {};
  for (const object of data) {
    // @ts-ignore
    if (!result[object.hex]) {
			// @ts-ignore
      result[object.hex] = {hex: object.hex, count: 0};
    }
		// @ts-ignore
    result[object.hex].count += object.count;
  }
  return Object.values(result);
}

// @ts-ignore
function getFirstLabelLayerId(style) {
  const layers = style.layers;
  // Find the index of the first symbol (i.e. label) layer in the map style
  for (let i = 0; i < layers.length; i++) {
    if (layers[i].type === 'symbol') {
      return layers[i].id;
    }
  }
  return undefined;
}