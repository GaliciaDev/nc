import React from 'react';
import NavPanel from '../components/NavPanel.jsx';
import ToogleBar from '../components/ToogleBar.jsx';
import PagesViewEdit from '../components/PagesViewEdit.jsx'; 
import FooterPanel from '../components/FooterPanel.jsx';

import '../assets/css/views/panelview.css';

function PanelView() {
  return (
    <div className='bg-white min-h-screen flex flex-col'>
      <NavPanel />
      <ToogleBar />
      <PagesViewEdit />
      <div className='mt-auto w-full'>
        <FooterPanel />
      </div>
    </div>
  );
}

export default PanelView;