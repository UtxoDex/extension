import { Row, Text } from '@/ui/components';
import { Icon } from '@/ui/components';
import { useNavigate } from '@/ui/pages/MainRoute';

import './index.less';

export function StackBtns(props) {
  const navigate = useNavigate();
  const textStyle = {
    color: '#096326',
    fontSize: '16px'
  };
  return (
    <Row justifyBetween style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
      <div
        onClick={(e) => {
          navigate('ReceiveScreen');
        }}
        className="btn-box">
        <div className="btn-icon">
          <Icon icon="receive"></Icon>
        </div>
        <Text text="Receive" style={textStyle}></Text>
      </div>
      <div
        onClick={(e) => {
          navigate('TxCreateScreen');
        }}
        className="btn-box">
        <div className="btn-icon">
          <Icon icon="send"></Icon>
        </div>
        <Text text="Send" style={textStyle}></Text>
      </div>
      <div
        onClick={(e) => {
          navigate('MoonPayScreen');
        }}
        className="btn-box">
        <div className="btn-icon">
          <Icon icon="bitcoin"></Icon>
        </div>
        <Text text="Buy" style={textStyle}></Text>
      </div>
    </Row>
  );
}
