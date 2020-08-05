import React from 'react';
import { FactAnimal } from 'DashboardModels';

import FactAnimalItem  from '../../components/FactAnimalItem';


type Props = {
  factcat: FactAnimal[];
};

const FactCatList: React.FC<Props> = ({ factcat }) => {
  return (
    <div>
      <h3>List of fact cats</h3>

      <div style={{ width: '50vw'}}>
          {factcat.map((fact, index) => (
              <FactAnimalItem key={`factcatitem-${index}`} factanimal={fact} header={`Fact ${index + 1}:`}/>
          ))}
      </div>
    </div>
  );
};

export default FactCatList;
