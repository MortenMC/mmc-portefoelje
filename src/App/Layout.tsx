import React from 'react';

import TopBar from '../TopBar/index'
import mmcLogoWhite from '../theme/pictures/MMCLogoHvid.png';
type Props = {
    children: React.ReactNode
}

const Layout = (props: Props) => <React.Fragment>
    <img className='cube1' src={mmcLogoWhite} alt={mmcLogoWhite}/>
    <img className='cube2' src={mmcLogoWhite} alt={mmcLogoWhite}/>
    <img className='cube3' src={mmcLogoWhite} alt={mmcLogoWhite}/>
    <img className='cube4' src={mmcLogoWhite} alt={mmcLogoWhite}/>
    <img className='cube5' src={mmcLogoWhite} alt={mmcLogoWhite}/>
    <TopBar/>
    {props.children}
    
</React.Fragment>

export default Layout;