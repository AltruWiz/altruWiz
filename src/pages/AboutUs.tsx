import React from 'react';
import AuthNav from '../components/navbar/AuthNav';

function AboutUs() {
	return (
		<div className='aboutus'>
			<div className='aboutus-nav'>
				<AuthNav />
			</div>
			<div className='aboutus-body'>
				<div className='aboutus-body-container1'>
					<div className='aboutus-body-container1-row1'>
						<h1 className='aboutus-body-container1-row1-text1'>
							Meet the minds behind
						</h1>
						<h1 className='aboutus-body-container1-row1-text2'>ALTRUWIZ</h1>
					</div>
					<div className='aboutus-body-container1-row2'>
						<img
							src='../../../../assets/aboutus.png'
							className='aboutus-body-container1-row2-img'
						/>
					</div>
				</div>
				<div className='aboutus-body-container2'>
					<div className='aboutus-body-container2-row1'>
						<div className='aboutus-body-container2-row1-box1'>
							<div className='aboutus-body-container2-row1-box1-col'>
								<img
									src=''
									className='aboutus-body-container2-row1-box1-col-img'
								/>
								<h1 className='aboutus-body-container2-row1-box1-col-text1'>
									NASH URIEL A. TAPAYAN
								</h1>
								<h2 className='aboutus-body-container2-row1-box1-col-text2'>
									Front-End Developer
								</h2>
								<h3 className='aboutus-body-container2-row1-box1-col-text3'>
									“Why fall in love when you can fall asleep.”
								</h3>
							</div>
						</div>
						<div className='aboutus-body-container2-row1-box2'>
							<div className='aboutus-body-container2-row1-box2-col'>
								<img
									src=''
									className='aboutus-body-container2-row1-box2-col-img'
								/>
								<h1 className='aboutus-body-container2-row1-box2-col-text1'>
									Renz Brian T. Velez
								</h1>
								<h2 className='aboutus-body-container2-row1-box2-col-text2'>
									Front-End Developer
								</h2>
								<h3 className='aboutus-body-container2-row1-box2-col-text3'>
									“They asked me to write something. So here it is something.”
								</h3>
							</div>
						</div>
					</div>
					<div className='aboutus-body-container2-row2'>
						<div className='aboutus-body-container2-row2-box1'>
							<div className='aboutus-body-container2-row2-box1-col'>
								<img
									src=''
									className='aboutus-body-container2-row2-box1-col-img'
								/>
								<h1 className='aboutus-body-container2-row2-box1-col-text1'>
									Mervin John Tampus
								</h1>
								<h2 className='aboutus-body-container2-row2-box1-col-text2'>
									Back-End Developer
								</h2>
								<h3 className='aboutus-body-container2-row2-box1-col-text3'>
									“My computer screen is brighter than my future.”
								</h3>
							</div>
						</div>
						<div className='aboutus-body-container2-row2-box2'>
							<div className='aboutus-body-container2-row2-box2-col'>
								<img
									src=''
									className='aboutus-body-container2-row2-box2-col-img'
								/>
								<h1 className='aboutus-body-container2-row2-box2-col-text1'>
									Jezreel Jedidiah O. Floreta
								</h1>
								<h2 className='aboutus-body-container2-row2-box2-col-text2'>
									Quality Assurance Manager
								</h2>
								<h3 className='aboutus-body-container2-row2-box2-col-text3'>
									“This was so easy a caveman could do it.”
								</h3>
							</div>
						</div>
					</div>
					<div className='aboutus-body-container2-row3'>
						<div className='aboutus-body-container2-row3-box1'>
							<div className='aboutus-body-container2-row3-box1-col'>
								<img
									src=''
									className='aboutus-body-container2-row3-box1-col-img'
								/>
								<h1 className='aboutus-body-container2-row3-box1-col-text1'>
									JESSA MARIE I. MACAPAGONG
								</h1>
								<h2 className='aboutus-body-container2-row3-box1-col-text2'>
									UI/UX Designer
								</h2>
								<h3 className='aboutus-body-container2-row3-box1-col-text3'>
									“What if one day you woke up and you were a chicken nugget?”
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
