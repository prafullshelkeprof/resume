import { createContext, useState } from 'react';
import type { PropsWithChildren } from "react";

const context = createContext(null);
const DataContext = (props: PropsWithChildren) => {
  const { children } = props;
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  return (
    <context.Provider value={{ isSidebarOpen, setIsSidebarOpen, drawerWidth: 360 }}>
      {children}
    </context.Provider>
  )
}

export default DataContext;
export { context }