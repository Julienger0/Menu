function Menu({ items }) {
    return (
        <div className="menu container row ">
            {items.map((menuItem) => {
                const { id, title, img, desc, price } = menuItem
                return (
                    <div key={id} className="item col-6 row" >
                        <img src={img} alt={title} className="col-6 photo" />
                        <div className="info col-6">
                            <div className="box">
                                <h4 className="title2">{title}</h4>
                                <h4 className="price">{price}€</h4>
                            </div>

                            <p className="desc">{desc}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Menu