import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

import { UnreadComics } from '@/entity';
import { database } from '@/lib';

export const useGetFirebase = () => {
  const [unreadComics, setunreadComics] = useState<UnreadComics[]>([]);

  useEffect(() => {
    const item = [
      {
        author: '日向武史',
        largeImageUrl:
          'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/8381/9784065128381.jpg?_ex=200x200',
        title: 'あひるの空',
      },
      {
        author: '尾田栄一郎',
        largeImageUrl:
          'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/7803/9784088827803_1_2.jpg?_ex=200x200',
        title: 'ワンピース',
      },
      {
        author: '岸本斉史',
        largeImageUrl:
          'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/0547/9784088800547.jpg?_ex=200x200',
        title: 'ナルト',
      },
    ];
    const pathRef = ref(database, 'user/unreadComics');
    // set(pathRef, item);
    onValue(
      pathRef,
      (snapshot) => {
        //send new data to react with setData every time information changed on realtime db
        const newData = snapshot.val();
        setunreadComics(newData);
      },
      (error) => {
        console.log(error);
      },
    );
  }, []);

  console.log(unreadComics);

  return { unreadComics };
};
