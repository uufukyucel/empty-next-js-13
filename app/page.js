
import {getDictionary} from "@/app/[lang]/dictionaries";
export default async function Home({params: {lang}}) {
    const dict = await getDictionary(lang); // en
    return (
        <div>
            <button>{dict.title}</button>
        </div>
    ); // Add to Cart
}
