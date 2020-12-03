import React from 'react';

import {TopBarBackground, TopBarView, TopBarButton} from './Styled';

class TopBar extends React.Component {
    render() {
        return <TopBarBackground style={{color: "white"}}>
            <TopBarView>
                <TopBarButton> Godaften</TopBarButton>
                <TopBarButton> Godmorgen</TopBarButton>
            </TopBarView>
        </TopBarBackground>
    }
}

export default TopBar;