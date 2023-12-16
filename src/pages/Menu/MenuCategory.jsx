import { Link } from 'react-router-dom';
import Cover from '../Shared/Cover';
import MenuItem from '../Shared/MenuItem';

const MenuCategory = ({items,title,coverimg}) => {
    return (
      <div>
        {title && <Cover img={coverimg} heading={title}></Cover>}
        <section className="my-5 grid md:grid-cols-2 gap-9 mx-3">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </section>
        <Link to={`/shop/${title}`}>
          {" "}
          <button className="btn btn-outline hover:bg-black hover:text-amber-500 border-black text-xl italic border-0 border-b-4 my-5">
            Order Now
          </button>
        </Link>
      </div>
    );
};

export default MenuCategory;