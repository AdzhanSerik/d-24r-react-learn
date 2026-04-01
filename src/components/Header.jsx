function Header() {
    return (
        <>
            <header className="py-6 px-12 flex justify-between">
                <div className="flex items-center gap-5">
                    <img className="w-16" src="./img/logo.png" alt="" />
                    <div>
                        <h1 className="text-2xl font-bold">React Sneakers</h1>
                        <p className="text-[#9D9D9D]">Магазин лучших кроссовок</p>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <img src="./cart.svg" alt="" />
                        <span>1205тг.</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="./heart.svg" alt="" />
                        <span className="text-[#9D9D9D]">Закладки</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="./profile.svg" alt="" />
                        <span className="text-[#9D9D9D]">Профиль</span>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header