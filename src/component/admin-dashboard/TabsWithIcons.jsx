
import React, { useState } from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/solid';

const  TabsWithIcon = ({setTabValue}) => {
  const data = [
    {
      label: 'Dashboard',
      value: 'dashboard',
      icon: Square3Stack3DIcon,
      desc: `Manage Your Artwork`
    },
    {
      label: 'Profile',
      value: 'profile',
      icon: UserCircleIcon,
      desc: `Manage Your Profile`
    },
  ];
  const handleClick = (value) =>{
    setTabValue(value);
  }
  return (
    <Tabs value="dashboard" className="w-2/3 m-auto p-10 text-center">
      <TabsHeader >
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value} onClick={()=>handleClick(value)} >
            <div className="flex items-center gap-2" >
              {React.createElement(icon, { className: 'w-5 h-5' })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody  >
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} >
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
export default TabsWithIcon;
