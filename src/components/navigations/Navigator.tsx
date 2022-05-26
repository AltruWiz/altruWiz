import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../../firebase-config';
import { HashLoader } from 'react-spinners';

function Navigator() {
	const navigate = useNavigate();
	const location = useLocation();
	const [user, loading] = useAuthState(auth);
	const [time, setTime] = useState(true);

	useEffect(() => {
		if (loading) {
			setTimeout(() => setTime(false), 3000);
			return;
		}
		if (
			!user &&
			location.pathname !== '/' &&
			location.pathname !== '/login' &&
			location.pathname !== '/register' &&
			location.pathname !== '/event/details'
		) {
			navigate('/login');
		}

		window.scrollTo(0, 0);
	}, [user, loading, location]);

	return (
		<div
			className={loading || time ? 'modal display-flex' : 'modal display-none'}
		>
			<section className='modal-main'>
				<HashLoader size={100} color={'#9013FE'} />
			</section>
		</div>
	);
}

export default Navigator;
