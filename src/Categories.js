function Categories({ categories, filterItems }) {
    return (
        <div className="btn-group">
            {categories.map((category, index) => {
                return (
                    <button className="btn-sm" key={index} onClick={() => filterItems(category)}>{category}</button>

                )
            })}
            

        </div>
    )
}

export default Categories