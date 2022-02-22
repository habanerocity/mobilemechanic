import React from 'react';
import styles from './_MapSection.module.scss';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';

const MapSection = () => {
	const latlngs = [
		[ 34.1371082, -118.7111988 ],
		[ 34.2544265, -118.6392399 ],
		[ 34.3071179, -118.4836012 ],
		[ 34.184593, -118.2018491 ],
		[ 34.1374172, -118.3572317 ],
		[ 34.1528852, -118.4823063 ],
		[ 34.1569372, -118.5419302 ]
	];

	const center = [ 34.2096443, -118.4918335 ];

	return (
		<section id="about" className={`container ${styles.main__container}`}>
			<div className={styles.mapsection__holder}>
				<div className={styles.servicearea}>
					<h1 className={styles.header}>We Service the San Fernando Valley in Los Angeles, CA </h1>
				</div>
				<div className={styles.map}>
					<MapContainer rel="preconnect" crossOrigin="true" center={center} zoom={10} scrollWheelZoom={false}>
						<TileLayer
							rel="preconnect"
							crossOrigin="true"
							attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						<Polygon rel="preconnect" crossOrigin="true" color={'red'} positions={latlngs} />
					</MapContainer>
				</div>
			</div>
		</section>
	);
};

export default MapSection;
