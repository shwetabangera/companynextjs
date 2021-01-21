import Head from "next/head";
import axios from "axios";
import Url from "../../api";
import styles from "./index.module.css";

function Contentstack(props) {
	let contentstack = props.contentstack[0];
	return (
		<div>
			<Head>
				<title>Contentstack</title>
			</Head>
			<div className={styles["banner"]}>
				<nav className={styles["nav"]}>
					<img
						className={styles["logo"]}
						src={contentstack.contentstackLogo}
						alt="Logo"
					/>
					<div className={styles["options"]}>
						{contentstack.navigationLinks.map((link, i) => {
							return (
								<p className={styles["lists"]} key={i}>
									{link}
								</p>
							);
						})}
					</div>
				</nav>
				<div>
					<h1 className={styles["heading"]}>{contentstack.heading}</h1>
					<h3 className={styles["sub-head"]}>{contentstack.subHeading}</h3>
					<button className={styles["button"]}>TRY FOR FREE</button>
				</div>
			</div>
			<hr />
			<footer className={styles["footer-section"]}>
				{contentstack.footer.map((footerLinks, i) => {
					return (
						<p className={styles["lists"]} key={i}>
							{footerLinks}
						</p>
					);
				})}
			</footer>
		</div>
	);
}

export const getStaticProps = async () => {
	let { data } = await axios.get(Url + "contentstack.json");
	return {
		props: {
			contentstack: [...data],
		},
	};
};

export default Contentstack;
