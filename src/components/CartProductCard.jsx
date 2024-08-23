

export default function CartProductCard({path, brand, info, price, count}) {  
  
  function formatPrice(amount) {
    // 천 단위로 구분하는 정규 표현식
    const formattedPrice = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `${formattedPrice}원`;
  }
  
  return(
    <div className="flex flex-row w-full h-32 lg:h-48">
      <div className="w-1/3 h-full rounded-3xl overflow-hidden mr-12">
        <img src={path} className="w-full h-full object-cover"/>
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <p className="text-xs">{brand}</p>
        <p className="text-lg font-bold">{formatPrice(price)}</p>
        <div className="flex flex-row gap-4">
          <button className="rounded-full w-6 h-6 bg-gray-200 text-">-</button>
          <p>{count}</p>
          <button
            className="rounded-full w-6 h-6 bg-gray-200">+
          </button>
        </div>
      </div>
    </div>
  )
}