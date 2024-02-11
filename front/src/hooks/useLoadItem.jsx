import { useEffect, useState } from 'react';
import { getItem } from '../api/apis';

function useLoadItem({ itemId }) {
  const [goodsImageURL, setGoodsImageURL] = useState('');
  const [goodsName, setGoodsName] = useState('');
  const [goodsPrice, setGoodsPrice] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await getItem(itemId); // itemId로 바꿔야 됨
      console.log(data);
      // setGoodsImageURL(); data.data.imageResponses
      setGoodsName(data.data.title);
      setGoodsPrice(data.data.price);
    })();
  }, []);

  return [goodsImageURL, goodsName, goodsPrice];
}

export default useLoadItem;