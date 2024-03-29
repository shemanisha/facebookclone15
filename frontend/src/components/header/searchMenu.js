import { Return, Search } from "../../svg";
import { useRef, useState } from "react";
import useClickOutside from "../../helpers/clickOutside";
export default function SearchMenu({ color, setShowSearchMenu }) {
  const [iconVisible, setIconVisible] = useState(true);
  const menu = useRef(null);
  const input = useRef(null);
  useClickOutside(menu, () => {
    setShowSearchMenu(false);
  });

  return (
    <div className="header_left search_area scroll_bar" ref={menu}>
      <div className="search_wrap">
        <div className="header_logo">
          <div className="circle_hover_2">
            <Return color={color} />
          </div>
        </div>
        <div
          className="search"
          onClick={() => {
            input.current.focus();
          }}
        >
          {iconVisible && <Search color={color} />}
          <input
            type="text"
            placeholder="Search facebook"
            className="search_input"
            onFocus={() => setIconVisible(false)}
            onBlur={() => setIconVisible(true)}
          />
        </div>
      </div>
      <div className="search_history_header">
        <span>Recent searches</span>
        <a> Edit </a>
      </div>
      <div className="searchHistory"></div>
      <div className="search_results scrollbar"></div>
    </div>
  );
}
