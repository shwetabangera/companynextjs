import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import Url from "../api";
import styles from "../styles/index.module.css";

function Home(props) {
	let home = props.home[0];
	return (
		<div>
			<Head>
				<title>Company</title>
			</Head>
			<div className={styles["home-container"]}>
				<nav>
					<h1 className={styles["head"]}>COMPANIES</h1>
					<div className={styles["logo-container"]}>
						{home.companies.map((company, i) => {
							return (
								<div className={styles["company"]} key={i}>
									<Link href={company.url}>
										<img
											className={styles["logo-image"]}
											src={company.logo}
											alt="Logo"
										/>
									</Link>
									<p>{company.companyName}</p>
								</div>
							);
						})}
					</div>
				</nav>
			</div>
		</div>
	);
}

export const getStaticProps = async () => {
	let { data } = await axios.get(Url + "home.json");
	return {
		props: {
			home: [...data],
		},
	};
};

export default Home;
