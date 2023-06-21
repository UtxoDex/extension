import { useNavigate } from '@/ui/pages/MainRoute';
import { useCurrentAccount } from '@/ui/state/accounts/hooks';
import { useNetworkType } from '@/ui/state/settings/hooks';
import { shortAddress } from '@/ui/utils';

import { Icon } from '../Icon';
// import { Row } from '../Row';
import { Text } from '../Text';

// import './index.less';

const AccountSelect = () => {
  const navigate = useNavigate();
  const currentAccount = useCurrentAccount();
  const networkType = useNetworkType();
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '20px'
      }}>
      <div
        style={{ display: 'flex', flexFlow: 'row', alignItems: 'center' }}
        onClick={(e) => {
          navigate('SwitchAccountScreen');
        }}>
        <div
          style={{
            border: '2px solid rgba(255,255,255,0.3)',
            borderRadius: '100%',
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <div
            style={{
              padding: '10px',
              width: '50px',
              height: '50px',
              background: 'linear-gradient(to right, rgba(16, 185, 129, 1), rgba(157, 254, 0, 1))',
              borderRadius: '100%'
            }}></div>
        </div>
        <Text text={shortAddress(currentAccount?.alianName, 8)} style={{ marginLeft: '10px' }}></Text>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            border: '1px solid rgba(255,255,255,0.5)',
            marginRight: '20px',
            padding: '5px 10px',
            borderRadius: '25px',
            fontSize: '14px',
            cursor: 'pointer'
          }}
          onClick={(e) => {
            navigate('NetworkTypeScreen');
          }}>
          {networkType ? 'Testnet' : 'Livenet'}
        </div>
        <Icon
          icon="settings"
          size="22px"
          style={{ cursor: 'pointer' }}
          onClick={(e) => {
            navigate('SettingsTabScreen');
          }}></Icon>
      </div>
    </div>
  );
};

export default AccountSelect;
