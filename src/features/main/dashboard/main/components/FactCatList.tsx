import React from 'react';

import { FactCat } from 'DashboardModels';
import FatCatItem  from './FactCatItem';

type Props = {
  factcat: FactCat[];
};

const FactCatList: React.FC<Props> = ({ factcat }) => {
  return (
    <div>
      <h3>List of fact cats</h3>

      <div style={{ width: '50vw'}}>
          {factcat.map(fact => (
              <FatCatItem factcat={fact}/>
          ))}
      </div>
    </div>
  );
};

export default FactCatList;