import { useEffect, useState, useContext } from 'react';
import { firestore } from '../../firebase-config';
import DataService from '../../firebase/services';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { UserContext } from '../../App';
import ScrollTop from './../navigations/scrollTop';
import NewBadge from './../modals/NewBadge';

function Badges() {
	const [badgeDetails, setBadgeDetails]: any = useState([]);
	const [data, setData]: any = useState(null);
	const [isUpdated, setIsUpdated] = useState(false);
	const [showBadge, setShowBadge] = useState(false);
	const [userBadges, setUserBadges]: any = useState([]);
	const user = useContext(UserContext);
	const date = Date.now();
	let badge: any = null;
	useEffect(() => {
		user &&
			onSnapshot(
				query(collection(firestore, 'user'), where('email', '==', user.email)),
				(snapshot) => {
					getBadgeDetails(snapshot.docs.at(0).data().badgesCollected);
					setUserBadges(snapshot.docs.at(0).data().badgesCollected);
					setData(snapshot.docs.at(0).data());
				}
			);
	}, [isUpdated, data]);

	const getBadgeDetails = async (badgeList: any) => {
		let finalBadges: any = [];
		await DataService.getBadges().then((result) => {
			badgeList.forEach((data: any) => {
				finalBadges.push(result.find((item: any) => item.id === data.badge));
			});
			setBadgeDetails(finalBadges);
			setIsUpdated(true);
		});
	};

	const awardBadges = async (
		badgesCollected: any,
		eventsCompleted: any,
		eventsJoined: any,
		profilePic: any
	) => {
		let newBadges = badgesCollected;
		let tempBadges = [];
		let checkJunior = true;
		let checkBaby = true;
		let checkPhoto = true;
		let checkFirstT = true;
		let checkStreak = true;

		if (eventsCompleted.length === 1) {
			badgesCollected.forEach((data: any) => {
				checkBaby = checkBaby && data.badge !== 'Baby Steps';
				// console.log('badge === Baby steps', data.badge, checkBaby);
			});
			checkBaby &&
				tempBadges.push({
					badge: 'Baby Steps',
					date: date,
				});
			badge = checkBaby && 'Baby Steps';
		}
		if (eventsCompleted.length === 5) {
			badgesCollected.forEach((data: any) => {
				checkJunior = checkJunior && data.badge !== 'Junior Steps';
				// console.log('== Junior steps', badge, checkJunior);
			});
			checkJunior &&
				tempBadges.push({
					badge: 'Junior Steps',
					date: date,
				});
			badge = checkJunior && 'Junior Steps';
		}
		if (profilePic != '') {
			badgesCollected.forEach((data: any) => {
				checkPhoto = checkPhoto && data.badge !== 'Photogenic';
				// console.log('== Love Thumb', badge, checkPhoto);
			});
			checkPhoto &&
				tempBadges.push({
					badge: 'Photogenic',
					date: date,
				});
			badge = checkPhoto && 'Photogenic';
		}
		if (eventsJoined.length === 1) {
			badgesCollected.forEach((data: any) => {
				checkFirstT = checkFirstT && data.badge !== 'First Timer';
				// console.log('== FirstT steps', badge, checkFirstT);
			});
			checkFirstT &&
				tempBadges.push({
					badge: 'First Timer',
					date: date,
				});
			badge = checkFirstT && 'First Timer';
		}
		if (eventsJoined.length === 5) {
			badgesCollected.forEach((data: any) => {
				checkStreak = checkStreak && data.badge !== 'Streak Freak';
				// console.log('== Streak Freak', badge, checkStreak);
			});
			checkStreak &&
				tempBadges.push({
					badge: 'Streak Freak',
					date: date,
				});
			badge = checkStreak && 'Streak Freak';
		}

		(checkPhoto || checkJunior || checkBaby || checkFirstT || checkStreak) &&
			(await DataService.updateUser(
				{
					badgesCollected: newBadges.concat(tempBadges),
				},
				user.uid
			).then(() => {
				checkJunior = false;
				checkBaby = false;
				checkPhoto = false;
				checkFirstT = false;
				checkStreak = false;
				setShowBadge(true);
			}));
	};
	data &&
		awardBadges(
			data.badgesCollected,
			data.completedEvents,
			data.eventsJoined,
			data.profilePic
		);
	const getDateAcquired = (badgeName: any) => {
		const date = new Date(
			userBadges.at(
				userBadges.findIndex((data) => {
					return badgeName === data.badge;
				})
			).date
		);

		return date.toDateString();
	};

	return (
		<ScrollTop>
			<div className='badges'>
				{/* <NewBadge
					showModal={showBadge}
					setShowModal={setShowBadge}
					badge={badge}
				/> */}
				<div id='locator' />
				{badgeDetails.length === 0 && (
					<div className='badges-alt'>
						<img src='/assets/noBadges.svg'></img>
						<h1>No Badges?!</h1>
						<h1>Ayyt mate you're missing out! Go get some events!</h1>
					</div>
				)}
				<div className='badges-list'>
					{badgeDetails.map((data: any, index: number) => {
						return (
							<div key={index} className='badges-list-card'>
								<div className='badges-list-card-overlay'>
									<img src={data.badgePic} />
									<div className='badges-list-card-overlay-details'>
										<h1 className='badges-list-card-overlay-details-name'>
											{data.badgeName}
										</h1>
										<h1 className='badges-list-card-overlay-details-desc'>
											{data.badgeDesc}
										</h1>
										<div className='badges-list-card-overlay-details-date'>
											<h1 className='badges-list-card-overlay-details-date-text1'>
												{getDateAcquired(data.badgeName)}
											</h1>
											<h1 className='badges-list-card-overlay-details-date-text2'>
												DATE ACQUIRED
											</h1>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</ScrollTop>
	);
}

export default Badges;
