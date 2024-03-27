

const NavigationBar = ({onCategoryClick}) => {
    return (
        <ul
        className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base"
    >
    
   
    <li><a href="#" onClick={() => onCategoryClick('general')}>General</a></li>
    <li><a href="#" onClick={() => onCategoryClick('business')}>Business</a></li>
    <li><a href="#" onClick={() => onCategoryClick('entertainment')}>Entertainment</a></li>
    <li><a href="#" onClick={() => onCategoryClick('health')}>Health</a></li>
    <li><a href="#" onClick={() => onCategoryClick('science')}>Science</a></li>
    <li><a href="#" onClick={() => onCategoryClick('sports')}>Sports</a></li>
    <li><a href="#" onClick={() => onCategoryClick('technology')}>Technology</a></li>

    </ul>
    );
};

export default NavigationBar;