import { useParams} from 'react-router-dom';
import NotFound from './NotFound';
import ArtWorkManagement from '../component/admin-dashboard/art-work-management/ArtWorkManagement';
import TabsWithIcon from '../component/admin-dashboard/TabsWithIcons';
import PorfileManagement from '../component/admin-dashboard/profile-management/PorfileManagement';
import { useState } from 'react';
const Dashboard = () => {
  const [tabValue, setTabValue] = useState('dashboard');
  const { password } = useParams();
  if (password !== '123') {
    return <NotFound />;
  }
  console.log(tabValue);
  return (
    <>
      <TabsWithIcon setTabValue={setTabValue} />
      {tabValue === 'dashboard' ? <ArtWorkManagement /> : <PorfileManagement />}
    </>
  );
};

export default Dashboard;
