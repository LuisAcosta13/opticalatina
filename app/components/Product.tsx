import Image from "next/image";

type ProductProps = {
    name: string;
    description: string;
    image: string;
    price: string;
};

const Product = ({ name, description, image, price }: ProductProps) => {
    return (
        <li className="bg-white rounded-lg shadow-md flex flex-col justify-stretch items-center w-fit m-3 overflow-hidden">
            <Image src={image} alt={name} width={250} height={200} className="h-auto w-auto rounded-tl-lg rounded-tr-lg object-cover" />
            <div className="flex flex-col justify-between gap-5 px-6 py-4 w-full min-h-full">
                <div className="max-w-[200px]">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p className="text-sm text-gray-600 overflow-hidden truncate">{description}</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <span className="text-gray-600">{price}</span>
                    <button className="bg-blue-500 text-white px-2 py-1 cursor-pointer 
                        rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Solicitar
                    </button>
                </div>
            </div>
        </li>
    );
};

export default Product;