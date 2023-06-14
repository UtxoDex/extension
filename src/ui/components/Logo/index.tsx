import { fontSizes } from '@/ui/theme/font';

import { Image } from '../Image';
import { Row } from '../Row';
import { Text } from '../Text';

export function Logo(props: { preset?: 'large' | 'small' }) {
  const { preset } = props;
  if (preset === 'large') {
    return (
      <Row justifyCenter itemsCenter>
        <Image src="./images/logo/wallet-logo.png" size={fontSizes.xxxl} />
        <Text text="Utxodex" preset="title-bold" size="xxl" />
        <Text
          size="sm"
          text="Bate"
          style={{ background: '#020617', padding: '3px 5px', borderRadius: '5px', color: '#9ca3af' }}
        />
      </Row>
    );
  } else {
    return (
      <Row justifyCenter itemsCenter>
        <Image src="./images/logo/wallet-logo.png" size={fontSizes.xxl} />
        <Text text="Utxodex" preset="title-bold" />
        <Text
          size="xs"
          text="Bate"
          style={{ background: '#020617', padding: '3px 5px', borderRadius: '5px', color: '#9ca3af' }}
        />
      </Row>
    );
  }
}
