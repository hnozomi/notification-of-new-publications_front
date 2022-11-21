import { Text, TextProps } from '@chakra-ui/react';
import { FC } from 'react';

type BaseTextProps = TextProps;

export const BaseText: FC<BaseTextProps> = ({ ...props }) => {
  return <Text m="0" {...props}></Text>;
};
