import { useState } from 'react';

import { useNavigate } from '@/ui/pages/MainRoute';
import { useSetTabCallback } from '@/ui/state/global/hooks';
import { TabOption } from '@/ui/state/global/reducer';

import { Column } from '../Column';
import { Grid } from '../Grid';
import { Icon, IconTypes } from '../Icon';

export function NavTabBar({ tab }: { tab: TabOption }) {
  return (
    <Grid
      columns={3}
      style={{
        width: '100%',
        height: '60px',
        background: 'rgba(255, 255, 255, 0.07)',
        border: '1px solid rgba(255, 255, 255, 0.07)'
      }}>
      <TabButton tabName="home" icon="wallet" isActive={tab === 'home'} text="Wallet" />
      <TabButton tabName="mint" icon="nft" isActive={tab === 'mint'} text="Mint" />
      <TabButton tabName="app" icon="more" isActive={tab === 'app'} text="Grid" />
      {/* <TabButton tabName="settings" icon="settings" isActive={tab === 'settings'} /> */}
    </Grid>
  );
}

function TabButton({
  tabName,
  icon,
  isActive,
  text
}: {
  tabName: TabOption;
  icon: IconTypes;
  isActive: boolean;
  text: string;
}) {
  const setTab = useSetTabCallback();
  const [hover, setHover] = useState('');
  const navigate = useNavigate();
  return (
    <Column
      justifyCenter
      itemsCenter
      onClick={(e) => {
        if (tabName === 'home') {
          navigate('MainScreen');
        } else if (tabName === 'mint') {
          navigate('DiscoverTabScreen');
        } else if (tabName === 'app') {
          navigate('AppTabScrren');
        } else if (tabName === 'settings') {
          navigate('SettingsTabScreen');
        }
      }}
      style={
        isActive
          ? {
            display: 'flex',
            flexFlow: 'row',
            alignItems: 'center',
            background: 'rgba(246, 246, 246, 1)',
            borderRadius: '25px',
            color: 'rgba(40, 44, 46, 1)'
          }
          : {}
      }>
      {/* color={isActive ? 'white' : 'white_muted'} */}
      <Icon
        icon={icon}
        size="22px"
        style={
          isActive
            ? {
              background: 'rgba(40, 44, 46, 1)'
            }
            : {}
        }
      />
      {text && isActive && <span>{text}</span>}
    </Column>
  );
}
