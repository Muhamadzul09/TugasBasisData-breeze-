// Import library yang diperlukan
import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

export default function DashboardCreate({ auth, flash }) {
    console.log("auth", flash);
    const [isNotify, setIsNotify] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");

    // Gunakan useEffect untuk mengubah state isNotify setelah komponen dimuat
    useEffect(() => {
        setIsNotify(!!flash.message);
        console.log("pesan", flash.message);
    }, [flash.message]);

    const handleSubmit = (event) => {
        event.preventDefault(); // Mencegah pengiriman form secara tradisional

        const data = {
            title,
            description,
            category,
            image,
        };

        Inertia.post("/news", data);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight pt-10 mt-10">
                    Create berita
                </h2>
            }
        >
            <Head title="Dashboard Create" />
            <div className="py-12">
                {/* input create data awal */}
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {/* Tampilkan pesan flash jika ada */}
                        <div>
                            {isNotify && (
                                <div
                                    role="alert"
                                    className="alert alert-info m-2 text-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="stroke-current shrink-0 w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        ></path>
                                    </svg>
                                    <span>{flash.message}</span>
                                </div>
                            )}
                        </div>
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <input
                                type="text"
                                placeholder="nama tumbuhan"
                                className="m-2 input input-bordered w-full"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Deskripsi tumbuhan"
                                className="m-2 input input-bordered w-full"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Kategori tumbuhan"
                                className="m-2 input input-bordered w-full"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            <input 
                                type="file" 
                                className="file-input input-bordered w-full m-2" 
                                onChange={(e) => setImage(e.target.files[0])} // Menggunakan e.target.files[0] untuk mendapatkan file
                            />
                            <button
                                type="submit"
                                className="m-2 btn bg-blue-400 text-white"
                            >
                                Create Data
                            </button>
                        </form>

                    </div>
                </div>
                {/* input create data akhir */}
            </div>
        </AuthenticatedLayout>
    );
}
