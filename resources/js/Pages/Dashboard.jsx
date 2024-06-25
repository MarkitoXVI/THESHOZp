import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Market from "./Market/Market";
import { useState, useEffect } from "react";

export default function Dashboard({ auth }) {
    const [products, setProducts] = useState();

    useEffect(() => {
        fetch("/api/products")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    },[]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Veikals
                </h2>
            }
        >
            <Head title="Veikals" />

            {products ? <Market products={products} /> : null}
        </AuthenticatedLayout>
    );
}
