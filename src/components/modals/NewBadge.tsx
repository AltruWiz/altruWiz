import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

function NewBadge({ showModal, setShowModal, badge }: any) {
	return (
		<motion.div
			className='newbadge'
			initial={{ scale: 0, opacity: 0 }}
			animate={showModal ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
			transition={{
				scale: showModal ? { duration: 0.1 } : { delay: 0.5, duration: 0.1 },
				default: showModal ? { delay: 0.1, duration: 0.5, type: 'tween' } : { duration: 0.5, type: 'tween' },
			}}>
			<motion.div
				className='newbadge-container'
				initial={{
					y: '100%',
					scale: 0,
				}}
				animate={
					showModal
						? { y: 0, x: 0, scale: 1 }
						: {
								y: '100%',
								scale: 0,
						  }
				}
				transition={{ delay: 0.1, duration: 0.5, type: 'tween' }}>
				<div className='newbadge-container-row1' onClick={setShowModal(false)}>
					<CloseIcon className='newbadge-container-row1-icon' />
				</div>
				<div className='newbadge-container-row2'>
					<img src='/assets/award.png' className='newbadge-container-row2-icon' />

					<h1>New Achievement!</h1>
					<h2>
						You have earned the{' '}
						<a href='' className=''>
							{badge}
						</a>{' '}
						badge.
					</h2>
					<button
						className='newbadge-container-row2-button'
						onClick={() => {
							setShowModal(false);
							// navigate('/dashboard');
						}}>
						View Badges
					</button>
				</div>
			</motion.div>
		</motion.div>
	);
}

export default NewBadge;
