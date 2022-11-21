import { ContainerProps } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';

import { BaseContainer } from '@/components/ui';

type BaseLayoutProps = {
  header?: ReactElement;
} & ContainerProps;

export const BaseLayout: FC<BaseLayoutProps> = ({
  children,
  header,
  ...containerProps
}) => {
  return (
    <>
      {header && header}
      <BaseContainer {...containerProps}>{children}</BaseContainer>
    </>
  );
};
