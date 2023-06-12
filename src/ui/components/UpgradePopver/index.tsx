import { useVersionInfo } from '@/ui/state/settings/hooks';

export const UpgradePopver = ({ onClose }: { onClose: () => void }) => {
  const versionInfo = useVersionInfo();
  return '';
  // (
  // <Popover onClose={onClose}>
  //   <Column justifyCenter itemsCenter>
  //     <Column mt="lg">
  //       <Text text={`A new version (v${versionInfo.newVersion}) is available`} textCenter />
  //     </Column>

  //     <Row full mt="lg">
  //       <Button
  //         text="Skip"
  //         full
  //         onClick={(e) => {
  //           if (onClose) {
  //             onClose();
  //           }
  //         }}
  //       />

  //       <Button
  //         text="Go to download"
  //         full
  //         preset="primary"
  //         onClick={(e) => {
  //           window.open(versionInfo.downloadUrl);
  //         }}
  //       />
  //     </Row>
  //   </Column>
  // </Popover>
  // );
};
