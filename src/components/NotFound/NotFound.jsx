const NotFound = () => {
    return (
        <div className="max-w-screen-2xl  m-auto p-[5%] pb-32 pt-64 md:pt-32 text-2xl md:text-4xl font-light">
            <div className="flex flex-col gap-10 justify-center items-center text-center">
                <p className="font-hl_reg bg-black text-6xl rounded-xl text-white px-4 text-center pt-1 pb-2">
                    404
                </p>
                <p className="text-6xl md:text-7xl font-normal font-hl_reg">
                    Page not found!
                </p>
                <p className="text-2xl md:text-3xl max-w-3xl ">
                    <span className="font-icooper font-semibold">Sorry! </span>{" "}
                    we've misplaced that URL or it's pointing to something that
                    doesn't exist. Head back home to try finding it again.
                </p>
            </div>
        </div>
    );
};

export default NotFound;
