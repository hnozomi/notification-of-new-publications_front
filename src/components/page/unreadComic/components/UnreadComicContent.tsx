import { FC } from 'react';

import { UnreadComicDeleteModal } from '@/components/model/unread/UnreadComicDeleteModal';
import { UnreadComicList } from '@/components/model/unread/UnreadComicList';
import { useUnreadComicPageHook } from '@/components/page/unreadComic/hooks/UnreadComicPageHook';
import { ScrollLayout } from '@/components/ui';

export const UnreadComicContent: FC = () => {
  const { deleteModal, onDelete, targetComicTitle, unreadComics } =
    useUnreadComicPageHook();
  return (
    <ScrollLayout>
      <UnreadComicList
        unreadComics={unreadComics}
        onDeleteModalOpen={deleteModal.onDeleteModalOpen}
      />
      <UnreadComicDeleteModal
        isOpen={deleteModal.deleteIsOpen}
        targetComicTitle={targetComicTitle}
        onClose={deleteModal.deleteOnClose}
        onDelete={onDelete}
      />
    </ScrollLayout>
  );
};
