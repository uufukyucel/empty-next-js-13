import {getDictionary} from "@/app/[lang]/dictionaries";

export default async function Test({params}) {
    const dict = await getDictionary(params.lang); // en
    return (
        <div>
            <button>{dict.title}</button>
        </div>
    ); // Add to Cart
}