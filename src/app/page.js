const works = [
	{ title: "nces", url: "https://nces.ed.gov", desc: "part of the federal department of education" },
	{ title: "porpo", url: "https://github.com/dawescc/porpo", desc: "a data visualisation tool for formula 1" },
];

const links = [
	{ title: "twitter", url: "https://nces.ed.gov/" },
	{ title: "github", url: "https://github.com/dawescc/" },
];

const subTitle = "";

const bioText = "i work primarily with Javascript and .NET applications.";

export default function Home() {
	return (
		<div className='flex flex-col pt-20 px-8'>
			<div
				className='section'
				id='title'>
				<h1 className='siteTitle'>Ryan Dawes</h1>
				<h2 className='siteSubtitle'>{subTitle}</h2>
			</div>

			<div className='section'>
				<h3 className='sectionHeader'>about</h3>
				<p>{bioText}</p>
			</div>

			<div className='section'>
				<h3 className='sectionHeader'>works</h3>
				<div className='subSection'>
					{works.map((work, index) => (
						<div
							key={index}
							id={work.title}
							className='flex flex-col gap-1.5'>
							<a
								className='w-min'
								href={work.url}>
								{work.title}
							</a>
							<span className='infoText'>{work.desc}</span>
						</div>
					))}
				</div>
			</div>

			<div className='section'>
				<h3 className='sectionHeader'>links</h3>
				<div className='subSection'>
					{links.map((link, index) => (
						<a
							className='w-min'
							key={index}
							href={link.url}>
							{link.title}
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
