import { useAccountAddress } from '@/ui/state/accounts/hooks';
import { copyToClipboard, shortAddress } from '@/ui/utils';

import { useTools } from '../ActionComponent';
import { Row } from '../Row';
import { Text } from '../Text';

export function AddressBar() {
  const tools = useTools();
  const address = useAccountAddress();
  return (
    <Row
      selfItemsCenter
      itemsCenter
      onClick={(e) => {
        copyToClipboard(address).then(() => {
          tools.toastSuccess('Copied');
        });
      }}
      style={{ background: 'rgba(255, 255, 255, 0.3)', borderRadius: '20px', padding: '5px 30px' }}>
      {/* <Icon icon="copy" color="textDim" /> */}
      <Text text={shortAddress(address)} size="lg" style={{ color: '#ffffff' }} />
    </Row>
  );
}
