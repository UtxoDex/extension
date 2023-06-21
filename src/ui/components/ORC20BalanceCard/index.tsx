import { Tooltip } from 'antd';

import { Orc20TokenBalance } from '@/shared/types';
import { colors } from '@/ui/theme/colors';
import { fontSizes } from '@/ui/theme/font';
import { InfoCircleOutlined } from '@ant-design/icons';

import { Column } from '../Column';
import { Row } from '../Row';
import { Text } from '../Text';

export interface BRC20BalanceCardProps {
  tokenBalance: Orc20TokenBalance;
  onClick?: () => void;
}

export default function BRC20BalanceCard(props: BRC20BalanceCardProps) {
  const {
    tokenBalance: { ticker, overallBalance, transferableBalance, availableBalance },
    onClick
  } = props;

  return (
    <Row
      full
      onClick={onClick}
      gap="lg"
      style={{
        justifyContent: 'space-around',
        border: '1px solid rgba(246, 246, 246, 0.08)',
        background: 'rgba(255, 255, 255, 0.04)',
        padding: '15px 5px',
        borderRadius: '25px',
        fontSize: '15px',
        margin: '5px 0'
      }}>
      <Column
        itemsCenter
        style={{ flexFlow: 'row', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Text text={ticker} color="gold" textCenter />
        <Tooltip
          title="The transferable amount is the balance that has been inscribed into transfer inscriptions but has not yet been sent."
          overlayStyle={{
            fontSize: fontSizes.xs
          }}>
          <InfoCircleOutlined
            style={{
              fontSize: fontSizes.lg,
              color: colors.textDim
            }}
          />
        </Tooltip>
      </Column>

      <Column justifyBetween style={{ flex: '1' }}>
        <Text text={transferableBalance} size="lg" textCenter />
      </Column>

      <Column justifyBetween style={{ flex: '1' }}>
        <Text text={availableBalance} size="lg" textCenter />
      </Column>

      <Column justifyBetween itemsCenter style={{ flex: '1' }}>
        <Text text={overallBalance} size="lg" textCenter />
      </Column>
    </Row>
  );
}
