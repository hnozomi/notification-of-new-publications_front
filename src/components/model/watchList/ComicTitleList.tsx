import { FC } from 'react';

import { ComicTitlePanel } from '@/components/model/watchList/ComicTitlePanel';

type Props = {
  onOpen: () => void;
};

export const ComicTitleList: FC<Props> = ({ onOpen }) => {
  const comitTitles = [
    {
      title: 'ワンピース',
      volume: '104',
    },
    {
      title: 'ナルト',
      volume: '99',
    },
  ];
  return (
    <>
      {comitTitles.map((book) => (
        <ComicTitlePanel book={book} key={book.title} onOpen={onOpen} />
      ))}
    </>
  );
};
