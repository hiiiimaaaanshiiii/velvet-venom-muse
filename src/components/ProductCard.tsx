import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  mood?: string;
}

const ProductCard = ({ id, name, price, image, mood }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="group block">
      <div className="overflow-hidden border border-accent/10 hover:border-accent/40 transition-all duration-500">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
        <div className="p-4 border-t border-accent/10">
          {mood && (
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent/60 block mb-2">
              {mood}
            </span>
          )}
          <h3 className="font-display text-sm tracking-wide">{name}</h3>
          <p className="font-body text-accent text-sm mt-1">₹{price.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
