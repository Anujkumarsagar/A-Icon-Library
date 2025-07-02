import { useEffect, useRef } from "react";
    
interface SidebarDrawerProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    iconClosed: React.ReactNode;
    iconOpen: React.ReactNode;
    label: string;
    children: React.ReactNode;
    sidebarExpanded: boolean; 
  }
  
  const SidebarDrawer: React.FC<SidebarDrawerProps> = ({
    isOpen,
    setIsOpen,
    iconClosed,
    iconOpen,
    label,
    children,
    sidebarExpanded,
  }) => {
    const drawerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }
      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen, setIsOpen]);
  
    return (
      <div ref={drawerRef} className="transition-all duration-300">
        <div onClick={() => setIsOpen(!isOpen)}>
          <div className={`flex items-center space-x-2 cursor-pointer ${isOpen ? "bg-white text-black" : "hover:bg-gray-700"} p-2 rounded`}>
            {isOpen ? iconOpen : iconClosed}
            {sidebarExpanded && <span>{label}</span>}
          </div>
        </div>
        <div
          className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
        >
          {children}
        </div>
      </div>
    );
  };
  export default SidebarDrawer;