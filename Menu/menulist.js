import Link from "next/link";

const MenuList = ({ type, data, className, top, bottom , ...props  }) => {
    const baseClasses = "flex";
    return (
        <ul {...props} className={`${className} ${baseClasses}`} type={type}>
            {top && top}
            {data.map((menu) => (
                <MenuItem data={menu} key={menu.href} type={type} />
            ))}
            {bottom && bottom}
        </ul>
    );
};

const MenuItem = ({ data, type, ...props }) => {
    const deviceClasses = type === "desktop" ? "mx-4" : "my-2";
    const baseClasses = "block";
    return (
        <Link href={data.href} {...props}>
            <li className={`${deviceClasses} ${baseClasses}`}>
                <a>{data.title}</a>
            </li>
        </Link>
    );
};

export default MenuList;
