interface SummaryProductProps {
  name: string;
  quantity: number;
  price: number;
}

function SummaryProduct({ name, quantity, price }: SummaryProductProps) {
  const modifiedName = name.replaceAll('-', ' ');
  return (
    <div className="flex items-center">
      <img
        src={`/src/assets/image-${name}-cart.jpg`}
        alt="mark 2 headphones"
        className="max-w-[64px] rounded-lg"
      />
      <div className="flex flex-col ml-4 mr-5">
        <span className="text-[15px] font-bold uppercase">{modifiedName}</span>
        <span className="text-sm font-bold opacity-50">
          ${price.toLocaleString()}
        </span>
      </div>
      <span className="text-[15px] font-bold opacity-50 ml-auto">
        x{quantity}
      </span>
    </div>
  );
}

export default SummaryProduct;
