import { FC } from 'react';

import { ComicTitlePanel } from '@/components/model/watchList/ComicTitlePanel';
import { NotRegisteredWatchListImage } from '@/components/ui';
import { WatchLists } from '@/entity';

type Props = {
  deleteOnOpen: (index: number, title: string) => void;
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
      {watchLists ? (
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
      ) : (
        <NotRegisteredWatchListImage />
      )}
    </>
  );
};
