// import { useEffect, useState, useContext } from 'react';
// import { firestore } from '../../firebase-config';
// import DataService from '../../firebase/services';
// import { collection, onSnapshot, query, where } from 'firebase/firestore';
// import { UserContext } from '../../App';
// import ScrollTop from './../navigations/scrollTop';
// import NewBadge from './../modals/NewBadge';

// function Badges() {
// 	const [badgeDetails, setBadgeDetails]: any = useState([]);
// 	const [data, setData]: any = useState(null);
// 	const [badgesData, setBadgesData]: any = useState([]);
// 	const [isUpdated, setIsUpdated] = useState(false);
// 	const [showBadge, setShowBadge] = useState(false);
// 	const [userBadges, setUserBadges]: any = useState([]);
// 	const user = useContext(UserContext);
// 	const date = Date.now();
// 	// let badge: any = null;
// 	let tempBadges = [];
// 	// let checkJunior = false;
// 	// let checkBaby = false;
// 	// let checkPhoto = false;
// 	// let checkFirstT = false;
// 	// let checkStreak = false;

// 	useEffect(() => {
// 		console.log('reading data Badges');
// 		user &&
// 			onSnapshot(
// 				query(collection(firestore, 'user'), where('email', '==', user.email)),
// 				(snapshot) => {
// 					setUserBadges(snapshot.docs.at(0).data().badgesCollected);
// 					setData(snapshot.docs.at(0).data());
// 					getBadgeDetails(snapshot.docs.at(0).data().badgesCollected);
// 				}
// 			);
// 	}, [isUpdated]);

// 	const getBadgeDetails = async (badgeList: any) => {
// 		console.log('badgeDetails: ', badgeList);
// 		let finalBadges: any = [];
// 		console.log('getting badge Details');
// 		await DataService.getBadges().then((result) => {
// 			console.log('result:', result);
// 			badgeList.forEach((data: any) => {
// 				finalBadges.push(result.find((item: any) => item.id === data.badge));
// 			});
// 			console.log('final:', finalBadges);
// 			setBadgeDetails(finalBadges);

// 			setIsUpdated(true);
// 			console.log('badge Details:', badgeDetails);
// 		});
// 	};

// 	const awardBadges = async (
// 		badgesCollected: any,
// 		eventsCompleted: any,
// 		eventsJoined: any,
// 		profilePic: any
// 	) => {
// 		let newBadges = badgesCollected; //[{}]
// 		let allBadges = [
// 			'Baby Steps',
// 			'Junior Steps',
// 			'Photogenic',
// 			'First Timer',
// 			'Streak Freak',
// 		];

// 		let currentBadges = [];
// 		badgesCollected.forEach((data: any) => currentBadges.push(data.badge));

// 		allBadges.forEach((data: any) => {
// 			if (!currentBadges.includes(data)) {
// 				// console.log('allBadges', allBadges);
// 				if (data === 'Baby Steps' && eventsCompleted.length === 1) {
// 					tempBadges.push({
// 						badge: 'Baby Steps',
// 						date: date,
// 					});
// 				} else if (data === 'Photogenic' && profilePic) {
// 					tempBadges.push({
// 						badge: 'Photogenic',
// 						date: date,
// 					});
// 				}
// 			}
// 		});
// 		tempBadges &&
// 			(await DataService.updateUser(
// 				{
// 					badgesCollected: newBadges.concat(tempBadges),
// 				},
// 				user.uid
// 			).then(() => {
// 				console.log('writing data badges');
// 				console.log('new BagdesCollected: ', newBadges.concat(tempBadges));
// 				// checkJunior = false;
// 				// checkBaby = false;
// 				// checkPhoto = false;
// 				// checkFirstT = false;
// 				// checkStreak = false;
// 				setShowBadge(true);
// 			}));
// 	};

// 	data &&
// 		awardBadges(
// 			data.badgesCollected,
// 			data.completedEvents,
// 			data.eventsJoined,
// 			data.profilePic
// 		);
// 	const getDateAcquired = (badgeName: any) => {
// 		const date = new Date(
// 			userBadges.at(
// 				userBadges.findIndex((data) => {
// 					return badgeName === data.badge;
// 				})
// 			).date
// 		);

// 		return date.toDateString();
// 	};

// 	return (
// 		<ScrollTop>
// 			<div className='badges'>
// 				{/* <NewBadge
// 					showModal={showBadge}
// 					setShowModal={setShowBadge}
// 					badge={badge}
// 				/> */}
// 				<div id='locator' />
// 				{badgesData.length === 0 && (
// 					<div className='badges-alt'>
// 						<img src='/assets/noBadges.svg'></img>
// 						<h1>No Badges?!</h1>
// 						<h1>Ayyt mate you're missing out! Go get some events!</h1>
// 					</div>
// 				)}
// 				<div className='badges-list'>
// 					{badgesData.map((data: any, index: number) => {
// 						return (
// 							<div key={index} className='badges-list-card'>
// 								<div className='badges-list-card-overlay'>
// 									<img src={data.badgePic} />
// 									<div className='badges-list-card-overlay-details'>
// 										<h1 className='badges-list-card-overlay-details-name'>
// 											{data.badgeName}
// 										</h1>
// 										<h1 className='badges-list-card-overlay-details-desc'>
// 											{data.badgeDesc}
// 										</h1>
// 										<div className='badges-list-card-overlay-details-date'>
// 											<h1 className='badges-list-card-overlay-details-date-text1'>
// 												{getDateAcquired(data.badgeName)}
// 											</h1>
// 											<h1 className='badges-list-card-overlay-details-date-text2'>
// 												DATE ACQUIRED
// 											</h1>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						);
// 					})}
// 				</div>
// 			</div>
// 		</ScrollTop>
// 	);
// }

// export default Badges;
