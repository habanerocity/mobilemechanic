import React from 'react';
import tekton from '../../Images/tekton.webp';
import styles from './_ServicesSection.module.scss';
import Button from '../UI/Button';
import Card from '../UI/Card';

import lightning from '../../Icons/BS/lightning-fill.svg';
import car from '../../Icons/FA/car-solid.svg';
import smog from '../../Icons/FA/smog-solid.svg';
import wrench from '../../Icons/FA/wrench-solid.svg';
import battery from '../../Icons/FA/car-battery-solid.svg';
import phone from '../../Icons/GI/phone.svg';
import autoRepair from '../../Icons/GI/auto-repair.svg';
import bladeFall from '../../Icons/GI//blade-fall.svg';
import carDoor from '../../Icons/GI/car-door.svg';
import sparkPlug from '../../Icons/GI/spark-plug.svg';
import thermometerCold from '../../Icons/GI/thermometer-cold.svg';
import inspect from '../../Icons/FA/clipboard-check-solid.svg';
import adjustments from '../../Icons/FA/sliders-h-solid.svg';
import air from '../../Icons/FA/wind-solid.svg';
import problem from '../../Icons/FA/exclamation-triangle-solid.svg';

const ServicesSection = () => {
	return (
		<div className={styles.services__section} id="services">
			<section className={`container ${styles.services__container} ${styles.main__container}`}>
				<h1 className={styles.services}>Services Offered</h1>
				<div className={styles.img__container}>
					<img src={tekton} className={styles.classic} alt="classic car" />
				</div>
				<div className={styles.parent_flex__container}>
					<Card className="col-lg-4 col-md-12 col-sm-12 list-group list-group-flush">
						<div className={`${styles.services__container}`}>
							<ul>
								<li className={styles.service}>
									<img src={wrench} alt="wrench" className={styles.icon} />Maintenance
								</li>
								<li className={styles.service}>
									<img src={problem} alt="quick troubleshooting" className={styles.icon} />Quick
									Troubleshooting
								</li>
								<li className={styles.service}>
									<img src={car} alt="car" className={styles.icon} />No Start
								</li>
								<li className={styles.service}>
									<img src={battery} alt="battery" className={styles.icon} />Batteries
								</li>
								<li className={styles.service}>
									<img src={carDoor} alt="window" className={styles.icon} />Window Repair
								</li>
								<li className={styles.service}>
									<img src={lightning} className={styles.icon} alt="electrical lightning" />Electrical
									Lighting
								</li>
								<li className={styles.service}>
									<img src={lightning} className={styles.icon} alt="electrical shorts" />Electrical
									Shorts
								</li>
								<li className={styles.service}>
									<img
										className={`${styles.icon} ${styles.icon__brakes}`}
										rel="preconnect"
										src="https://img.icons8.com/ios-filled/50/000000/brake-discs.png"
										alt="brakes"
										crossOrigin="true"
									/>Brakes
								</li>
							</ul>
						</div>
					</Card>
					<Card className="col-lg-4 col-md-12 col-sm-12">
						<div className={`${styles.services__container} `}>
							<ul>
								<li className={styles.service}>
									<img src={autoRepair} alt="belts" className={styles.icon} />Belts
								</li>
								<li className={styles.service}>
									<img src={sparkPlug} alt="spark plug" className={styles.icon} />Spark Plugs
								</li>
								<li className={styles.service}>
									<img src={air} alt="cabin air filter" className={styles.icon} />Cabin Air Filter
								</li>
								<li className={styles.service}>
									<img src={bladeFall} alt="wiper blades" className={styles.icon} />Wiper Blades
								</li>
								<li className={styles.service}>
									<img src={autoRepair} alt="valve cover gaskets" className={styles.icon} />Valve
									Cover Gaskets
								</li>
								<li className={styles.service}>
									<img
										className={`${styles.icon} ${styles.icon__brakes}`}
										rel="preconnect"
										src="https://img.icons8.com/ios-filled/50/000000/brake-discs.png"
										alt="brake master cylinder"
										crossOrigin="true"
									/>Brake Master Cylinder
								</li>
								<li className={styles.service}>
									<img src={autoRepair} alt="alternator" className={styles.icon} />Replace Alternator
								</li>
								<li className={styles.service}>
									<img src={autoRepair} alt="starters" className={styles.icon} />Starters
								</li>
							</ul>
						</div>
					</Card>

					<Card className="col-lg-4 col-md-12 col-sm-12">
						<div className={`${styles.services__container} `}>
							<ul>
								<li className={styles.service}>
									<img
										className={`${styles.icon} ${styles.icon__checkEngine}`}
										rel="preconnect"
										src="https://img.icons8.com/ios/50/000000/engine.png"
										alt="check engine light"
										crossOrigin="true"
									/>Check Engine Light
								</li>
								<li className={styles.service}>
									<img src={autoRepair} alt="timing belts" className={styles.icon} />Timing Belts
								</li>
								<li className={styles.service}>
									<img src={smog} alt="smog" className={styles.icon} />Emission Repairs
								</li>
								<li className={styles.service}>
									<img src={inspect} alt="inspection" className={styles.icon} />Pre Purchase
									Inspection
								</li>
								<li className={styles.service}>
									<img
										src={adjustments}
										alt="ignition timing adjust"
										className={styles.icon}
									/>Ignition Timing Adjust
								</li>
								<li className={styles.service}>
									<img src={autoRepair} alt="02 sensor" className={styles.icon} />02 Sensor
								</li>
								<li className={styles.service}>
									<img src={thermometerCold} alt="AC" className={styles.icon} />Recharging AC
								</li>
								<li className={styles.service}>
									<img src={thermometerCold} alt="AC" className={styles.icon} />AC Repair
								</li>
							</ul>
						</div>
					</Card>
				</div>
				<div className={styles.btn__container}>
					<a href="tel:6266967486">
						<Button className={styles.btn}>
							<img src={phone} alt="phone" className={styles.phone__icon} />Call Now
						</Button>
					</a>
				</div>
			</section>
		</div>
	);
};

export default ServicesSection;
