import { FC } from 'react';

import { ComicTitlePanel } from '@/components/model/watchList/ComicTitlePanel';
import { WatchLists } from '@/entity';

type Props = {
  deleteOnOpen: () => void;
  onUpdate: (index: number, targetComic: number) => void;
  updateOnOpen: (volume: number) => void;
  watchLists?: WatchLists[];
};

export const ComicTitleList: FC<Props> = ({
  deleteOnOpen,
  onUpdate,
  updateOnOpen,
  watchLists,
}) => {
  return (
    <>
      {watchLists?.map((watchList, index) => (
        <ComicTitlePanel
          deleteOnOpen={deleteOnOpen}
          index={index}
          key={watchList.title}
          updateOnOpen={updateOnOpen}
          watchList={watchList}
          onUpdate={onUpdate}
        />
      ))}
    </>
  );
};
