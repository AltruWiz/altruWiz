import EventList from './../listing/EventList';
import { events } from '../../../assets/pseudodata/events-data';
import { personal_events } from '../../../assets/pseudodata/personal-events';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { auth, firestore } from '../../firebase-config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

function Events() {
	const [search, setSearch] = useState('');
	const [user, loading] = useAuthState(auth);
	const [eventList, setEventList] = useState([]);
	const [joinedEvents, setJoinedEvents] = useState([]);
	const [completedEvents, setCompletedEvents] = useState([]);
	let searchTemp: string;

	useEffect(() => {
		onSnapshot(collection(firestore, 'events'), (snapshot) => {
			setEventList(snapshot.docs.map((docEach) => docEach.data()));
		});
		onSnapshot(
			query(collection(firestore, 'user'), where('email', '==', user.email)),
			(snapshot) => {
				setJoinedEvents(snapshot.docs.at(0).data().eventsJoined);
				setCompletedEvents(snapshot.docs.at(0).data().completedEvents);
			}
		);
	}, [loading]);

	return (
		<div className='event'>
			<div className='event-body'>
				<div className='event-body-searchbar'>
					<TextField
						variant='outlined'
						color='secondary'
						size='small'
						className='event-body-searchbar-field'
						margin='dense'
						placeholder='Search Anything'
						value={searchTemp}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
							(searchTemp = event.target.value)
						}
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<IconButton
										edge='end'
										color='secondary'
										onClick={() => setSearch(searchTemp || search)}>
										<SearchIcon />
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
				</div>

				{!search && (
					<>
						<EventList
							use='dash'
							head='Joined Events'
							events={eventList.filter((eventData) => {
								let check = false;
								joinedEvents.forEach((data) => {
									check = check || data === eventData.eventCode;
								});
								return check;
							})}
						/>
						<EventList
							use='dash'
							head='Completed Events'
							events={eventList.filter((eventData) => {
								let check = false;
								completedEvents.forEach((data) => {
									check = check || data === eventData.eventCode;
								});
								return check;
							})}
						/>
					</>
				)}
				<EventList
					use='dash'
					head={
						eventList.filter((data) => {
							return data.eventName
								.toLowerCase()
								.includes(search.toLowerCase());
						}).length > 0
							? 'Results found'
							: 'No results found'
					}
					events={
						search
							? eventList.filter((data) => {
									return data.eventName
										.toLowerCase()
										.includes(search.toLowerCase());
							  })
							: eventList
					}
				/>
			</div>
		</div>
	);
}

export default Events;
