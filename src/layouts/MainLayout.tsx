import React, { FC } from 'react';

import './Main.css';
import NavBar from '../features/main/dashboard/components/NavBar';

type Props = {
  name: string
};

const MainLayout: FC<Props> = ({ children, name }) => (
  <div className="App">
    <header>
      <NavBar name={name} />
    </header>
    <main className="App-main">{children}</main>
  </div>
);

export default MainLayout;
