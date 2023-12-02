import Cover from '../Shared/Cover';
import MenuItem from '../Shared/MenuItem';

const MenuCategory = ({items,title,coverimg}) => {
    return (
      <div>
        {
            title && <Cover img={coverimg} heading={title}></Cover>
        }
        <section className="my-5 grid md:grid-cols-2 gap-9">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </section>
      </div>
    );
};

export default MenuCategory;