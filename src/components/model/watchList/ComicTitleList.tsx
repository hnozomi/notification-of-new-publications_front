import { FC } from 'react';

import { ComicTitlePanel } from '@/components/model/watchList/ComicTitlePanel';
import { WatchLists } from '@/entity';

type Props = {
  deleteOnOpen: () => void;
  onUpdate: (index: number, targetComic: number) => void;
  setIsEditable: any;
  updateOnOpen: (volume: number) => void;
  watchLists?: WatchLists[];
};

export const ComicTitleList: FC<Props> = ({
  deleteOnOpen,
  onUpdate,
  setIsEditable,
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
          setIsEditable={setIsEditable}
          updateOnOpen={updateOnOpen}
          watchList={watchList}
          onUpdate={onUpdate}
        />
      ))}
    </>
  );
};
