import Head from "next/head";
import axios from "axios";
import companyUrl from "../../api";
import styles from "./index.module.css";

function RawEngineering(props) {
	let rawEngineering = props.rawEngineering[0];
	return (
		<div>
			<Head>
				<title>Raw Engineering</title>
			</Head>
			<div>
				<div className={styles["header"]}>
					<nav className={styles["navigation"]}>
						<img
							className={styles["logo"]}
							src={rawEngineering.rawEngineeringLogo}
							alt="Logo"
						/>
						<div className={styles["nav-links"]}>
							{rawEngineering.navigationLinks.map((link, i) => {
								return (
									<p className={styles["nav-item"]} key={i}>
										{link}
									</p>
								);
							})}
						</div>
					</nav>
					<div className={styles["banner"]}>
						<div className={styles["banner-text"]}>
							<p className={styles["banner-title"]}>{rawEngineering.title}</p>
							<p className={styles["banner-subtitle"]}>
								{rawEngineering.subtitle}
							</p>
						</div>
						<div className={styles["banner-image"]}>
							<img src={rawEngineering.bannerImage} alt="Banner" />
						</div>
					</div>
				</div>
			</div>
			<div>
				<p className={styles["intro"]}>{rawEngineering.shortIntro}</p>
				<p className={styles["section-heading"]}>-----WHAT WE DO-----</p>
				{rawEngineering.whatWeDo.map((task, i) => {
					return (
						<div className={styles["what-we-do"]} key={i}>
							<img
								className={styles["what-we-do-image"]}
								src={task.imageUrl}
								alt="What we do"
							/>
							<div className={styles["what-we-do-text"]}>
								<p className={styles["what-we-do-heading"]}>{task.heading}</p>
								<p className={styles["what-we-do-subheading"]}>
									{task.subHeading}
								</p>
							</div>
						</div>
					);
				})}
			</div>
			<div></div>
			<footer className={styles["footer-container"]}>
				<p className={styles["footer-heading"]}>
					Ready to get started on your next project?
				</p>
				<div className={styles["copyright-container"]}>
					<div className={styles["copyright-links"]}>
						<p>Privacy</p>
						<p>Backend Terms of use</p>
					</div>
					<p>Copyright © 2021 Raw Engineering LLC. All Rights Reserved.</p>
					<div className={styles["copyright-image"]}>
						<img
							src="https://www.raweng.com/v3/assets/bltaacb6b0c9b693c2d/blt67d1684f23bec105/5e31575101e4f445b22f4bde/soc_logo.png?width=100"
							alt="AICPA"
						/>
					</div>
				</div>
			</footer>
		</div>
	);
}

export const getStaticProps = async () => {
	let { data } = await axios.get(companyUrl + "raw-engineering.json");
	return {
		props: {
			rawEngineering: [...data],
		},
	};
};

export default RawEngineering;
