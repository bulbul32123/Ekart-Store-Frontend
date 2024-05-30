import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import Image from "next/image";

const Success = () => {
    return (
        <div className="min-h-[600px] flex items-center">
            <Wrapper>
                <div className="max-w-[600px] rounded-lg p-5 mt-10 mx-auto mb-10 flex flex-col">
                    <div className="">
                        <img src='/failed.jpeg' height={100} width={100} className="w-full h-full imgSelectNone" />
                    </div>
                    <div className="text-2xl font-bold">Payment failed!</div>
                    <div className="text-base mt-5">
                        For any product related query, drop an email to
                    </div>
                    <div className="underline">shoeshopcontact@shop.com</div>

                    <Link href="/" className="font-bold mt-5">
                        Continue Shopping
                    </Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default Success;
