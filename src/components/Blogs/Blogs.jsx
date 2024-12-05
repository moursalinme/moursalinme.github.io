function Blogs() {
    const allQuotes = [
        {
            line: "Much silence and a good disposition, there are no two things better than these.",
            quotee: "Hazrat Muhammad S.A.W. (Al - Bukhari).",
            lang: "en",
            colspan: "col-span-8",
        },
        {
            line: "Not everyone you lose is a loss.",
            quotee: "Unknown",
            lang: "en",
            colspan: "col-span-4",
        },
        {
            line: "A person who never made a mistake never tried anything new.",
            quotee: "Albert Einstein",
            lang: "en",
            colspan: "col-span-5",
        },
        {
            line: "মানুষ মরে গেলে পচে যায়, বেঁচে থাকলে বদলায়, কারণে অকারণে বদলায়, সকালে বিকালে বদলায়।",
            quotee: "Unknown",
            lang: "ban",
            colspan: "col-span-7",
        },
        {
            line: "It's only after we've lost everything that we're free to do anything.",
            quotee: "Chuck Palahniuk, Fight Club",
            lang: "en",
            colspan: "col-span-6",
        },

        {
            line: "No problem can be solved from the same level of consciousness that created it.",
            quotee: "Albert Einstein",
            lang: "en",
            colspan: "col-span-6",
        },

        {
            line: "The world will not be destroyed by these who do evil, but by these who watch them without doing anything.",
            quotee: "Albert Einstein",
            lang: "en",
            colspan: "col-span-12",
        },
    ];

    const quotesdiv = allQuotes.map((quote, index) => {
        return (
            <div
                key={index}
                className={`md:text-start bg-slate-200 px-2 py-4 rounded-lg md:px-10 hover:scale-105 transition-transform duration-500 ${quote.colspan}`}
            >
                <p
                    className={`font-normal ${
                        quote.lang === "ban" ? "hind-siliguri-regular" : ""
                    }`}
                >
                    • {quote.line}
                </p>
                <p className="font-icooper tracking-wider px-8 py-2 ">
                    - {quote.quotee}
                </p>
            </div>
        );
    });
    return (
        <div className="text-4xl md:text-4xl  pt-48 md:pt-20 pb-20 text-center m-auto font-inter font-semibold text-[#646464] leading-10 max-w-screen-2xl px-[5%]">
            <div>
                <span className="font-normal bg-orange-400 text-white py-2  px-5 md:px-10 rounded-md ">
                    Blogs
                </span>
            </div>{" "}
            <br />
            <p className="">
                I will share my interview experiences, tips etc here.{" "}
            </p>
            <p className="pt-10">
                As for now, read some of my favourite quotes
            </p>
            <div className="text-xl  pt-20 flex flex-col md:flex-none md:grid md:grid-cols-12  gap-10 font-semibold items-center md:items-start">
                {quotesdiv}
            </div>
        </div>
    );
}

export default Blogs;
