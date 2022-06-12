//React Router Components
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Local Components
import Landing from './pages/Landing';
import FileUpload from './pages/FileUpload';
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Navigator from './components/navigations/Navigator';
import Details from './pages/Details';
import OrgDashboard from './pages/OrgDashboard';
import BeOrganizer from './pages/BeOrganizer';
// import EventCreation from './pages/EventCreation';
import Create from './pages/Create';
import ResetPass from './pages/ResetPass';
import Cert from './components/cert/Cert';

function App() {
	return (
		<BrowserRouter>
			<Navigator />
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/login' element={<Signin />} />
				<Route path='/register' element={<Signup />} />
				<Route path='/upload' element={<FileUpload />} />
				<Route path='/event/:id' element={<Details />} />
				<Route path='/organizer' element={<OrgDashboard />} />
				<Route path='/organizer/:id' element={<BeOrganizer />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/dashboard/:id' element={<Dashboard />} />
				<Route path='/test' element={<Cert />} />
				{/* <Route path='/event-creation' element={<EventCreation />} /> */}
				<Route path='/create' element={<Create />} />
				<Route path='/resetpassword' element={<ResetPass />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
