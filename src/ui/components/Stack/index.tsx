// import { Card } from '@/ui/components';
// import { AddressBar } from '@/ui/components/AddressBar';

export function Stack(props) {
  const { children } = props;
  return (
    <div
      style={{
        width: '100%',
        padding: '10px',
        position: 'relative',
        height: '300px'
      }}>
      <div
        style={{
          width: '100%',
          background: 'linear-gradient(to right, rgba(16, 185, 129, 1), rgba(157, 254, 0, 1))',
          padding: '10px',
          borderRadius: '30px',
          height: '250px',
          position: 'absolute',
          zIndex: '100',
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}>
        {children}
        {/* <AddressBar /> */}
      </div>
      <div
        style={{
          width: '100%',
          background: 'linear-gradient(to right,rgba(16, 185, 129, 0.5), rgba(157, 254, 0, 0.5))',
          padding: '10px',
          borderRadius: '30px',
          height: '250px',
          position: 'absolute',
          top: '25px',
          left: '10px',
          zIndex: '60'
        }}></div>
      <div
        style={{
          width: '100%',
          background: 'linear-gradient(to right,rgba(16, 185, 129, 0.2), rgba(157, 254, 0, 0.2))',
          padding: '10px',
          borderRadius: '30px',
          height: '250px',
          position: 'absolute',
          top: '40px',
          left: '10px',
          zIndex: '40'
        }}></div>
    </div>
  );
}
