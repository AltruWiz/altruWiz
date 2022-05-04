import { useState } from 'react';

//Tabs Components
import { TabUnstyled, TabsListUnstyled, TabsUnstyled } from '@mui/base';
import { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';

//Tab Pages
import Badges from '../components/cards/Badges';
import Certificates from '../components/cards/Certificates';
import Events from '../components/cards/Events';
import Profile from './../components/cards/Profile';
import Achievements from './../components/cards/Achievements';

//MUI Components
import { styled } from '@mui/system';

//Local Components
import DBNav from './../components/navbar/DBNav';
import Footer from './../components/footer/Footer';

function Dashboard() {
	const [index, setIndex] = useState(0);
	const cards = [
		<Profile />,
		<Events />,
		<Achievements />,
		<Certificates />,
		<Badges />,
	];
	const Tab = styled(TabUnstyled)`
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 600;
		color: black;
		cursor: pointer;
		font-size: 1.2rem;
		background-color: transparent;
		width: fit-content;
		padding: 1rem 1.2rem;
		border: none;
		display: flex;
		justify-content: center;
		align-items: center;

		&:hover {
			border-bottom: 5px solid rgba(115, 57, 171, 0.15);
		}

		&:focus {
			border-bottom: 5px solid #7339ab;
		}

		&.${tabUnstyledClasses.selected} {
			border-bottom: 5px solid #7339ab;
		}

		&.${buttonUnstyledClasses.disabled} {
			opacity: 0.5;
			cursor: not-allowed;
		}
	`;

	const TabsList = styled(TabsListUnstyled)`
		width: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: space-around;
	`;
	return (
		<div className='dashboard'>
			<DBNav />
			<div className='dashboard-container'>
				<TabsUnstyled defaultValue={0} className='dashboard-container-tab'>
					<TabsList className='dashboard-container-tab-list'>
						<Tab onClick={() => setIndex(0)}>Profile</Tab>
						<Tab onClick={() => setIndex(1)}>Events</Tab>
						<Tab onClick={() => setIndex(2)}>Achievements</Tab>
						<Tab onClick={() => setIndex(3)}>Certificates</Tab>
						<Tab onClick={() => setIndex(4)}>Badges</Tab>
					</TabsList>
				</TabsUnstyled>
			</div>
			{cards[index]}
			<div className='dashboard-footer'>
				<Footer />
			</div>
		</div>
	);
}

export default Dashboard;
