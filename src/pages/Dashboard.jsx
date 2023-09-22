import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

const Dashboard = () => {
  const { password } = useParams();

  return <>{password !== '123' ? <NotFound /> : <h1>Dashboard</h1>}</>;
};

export default Dashboard;
