import React from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import mamay from "/public/img/mamay.jpg";
import azhar from "/public/img/azhar.jpg";
import fikri from "/public/img/fikri.jpg";
import naufal from "/public/img/naufal.jpg";

export default function Kelompok(props) {
    return (
        <div className="min-h-screen bg-state-50 text-black text-1xl">
            <Head title={props.title} />
            <Navbar />
            <div className="pt-20 mt-10">
                <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
                    <div className="col-8">
                        <div
                            class="card bg-base-100 shadow-xl"
                            style={{ width: "35rem" }}
                        >
                            <div class="card-body">
                                <div className=" card-body items-center text-center">
                                    <h2
                                        class="card-title"
                                        style={{
                                            fontSize: "2rem",
                                            fontWeight: "bold",
                                            fontFamily: "serif",
                                        }}
                                    >
                                        Kelompok 8
                                    </h2>
                                    <small>
                                        Berikut adalah nama-nama anggota dari
                                        kelompok 8
                                    </small>
                                    <hr className="border-1 border-green-500 w-full " />
                                </div>
                                {/* chat buble awal */}
                                <div className="chat chat-start">
                                    <div className="chat-image avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="Tailwind CSS chat bubble component"
                                                src={azhar}
                                            />
                                        </div>
                                    </div>
                                    <div className="chat-header">
                                        Anggota-1
                                        <time className="text-xs opacity-50">
                                            12:45
                                        </time>
                                    </div>
                                    <div className="chat-bubble">
                                        Azhar Lubis
                                    </div>
                                    <div className="chat-footer opacity-50">
                                        Now
                                    </div>
                                </div>
                                <div className="chat chat-end">
                                    <div className="chat-image avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="Tailwind CSS chat bubble component"
                                                src={fikri}
                                            />
                                        </div>
                                    </div>
                                    <div className="chat-header">
                                        Anggota-2
                                        <time className="text-xs opacity-50">
                                            12:46
                                        </time>
                                    </div>
                                    <div className="chat-bubble">
                                        Fikri Chairul Rizki
                                    </div>
                                    <div className="chat-footer opacity-50">
                                        Now
                                    </div>
                                </div>
                                <div className="chat chat-start">
                                    <div className="chat-image avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="Tailwind CSS chat bubble component"
                                                src={mamay}
                                            />
                                        </div>
                                    </div>
                                    <div className="chat-header">
                                        Anggota-3
                                        <time className="text-xs opacity-50">
                                            12:47
                                        </time>
                                    </div>
                                    <div className="chat-bubble">
                                        Maulida Azzahra
                                    </div>
                                    <div className="chat-footer opacity-50">
                                        Now
                                    </div>
                                </div>
                                <div className="chat chat-end">
                                    <div className="chat-image avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="Tailwind CSS chat bubble component"
                                                src={naufal}
                                            />
                                        </div>
                                    </div>
                                    <div className="chat-header">
                                        Anggota-4
                                        <time className="text-xs opacity-50">
                                            12:48
                                        </time>
                                    </div>
                                    <div className="chat-bubble">
                                        Muhammad Naufal Musyaffa' Suchyar
                                    </div>
                                    <div className="chat-footer opacity-50">
                                        Now
                                    </div>
                                </div>
                                {/* chat buble akhir */}
                                <div class="card-actions justify-end mt-3">
                                    <button class="btn btn-success text-white">
                                            <Link
                                                    href={route("/")}
                                                    method="get"
                                                    as="button"
                                                >
                                                    Lihat Website Green Plants
                                            </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
