import React, { useMemo } from 'react';
import styles from './_MapSection.module.scss';
import { GoogleMap, useJsApiLoader, Marker, Polygon } from '@react-google-maps/api';

const MapSection = () => {

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
	});

	const containerStyle = {
		width: '100%',
		height: '100%',
	};

	const latlngs = [
		{ lat: 34.1371082, lng: - 118.7111988 },
		{ lat: 34.2544265, lng: -118.6392399 },
		{ lat: 34.3071179, lng: -118.4836012 },
		{ lat: 34.184593, lng: -118.2018491 },
		{ lat: 34.1374172, lng: -118.3572317 },
		{ lat: 34.1528852, lng: -118.4823063 },
		{ lat: 34.1569372, lng: -118.5419302 }
	];

	const center = useMemo(() => ({ lat: 34.2096443, lng: -118.4918335 }), []);

	return (
		<section id="about" className={`container ${styles.main__container}`}>
			<div className={styles.mapsection__holder}>
				<div className={styles.servicearea}>
					<h1 className={styles.header}>We Service the San Fernando Valley in Los Angeles, CA </h1>
				</div>
				<div className={styles.map}>
					{isLoaded ? <GoogleMap paths={latlngs} mapContainerStyle={containerStyle} rel="preconnect" crossOrigin="true" center={center} zoom={10}  >
						<Marker position={center} />
						<Polygon
							path={latlngs}
							key={1}
							options={{
								fillColor: "#ffd81b",
								fillOpacity: 0.4,
								strokeColor: "#247ba0",
								strokeOpacity: 1,
								strokeWeight: 1
							}}
						/>
					</GoogleMap> : <div>Loading...</div>}
				</div>
			</div>
		</section >
	);
};

export default MapSection;
