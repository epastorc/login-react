import React from 'react';
import { FactAnimal } from 'DashboardModels';
import Typography from '@material-ui/core/Typography';

import FactAnimalItem  from '../../components/FactAnimalItem';

type Props = {
  factcat: FactAnimal[];
};

const FactDogList: React.FC<Props> = ({ factcat }) => {
  const header = 'List of fact about dogs';
  return (
    <div className="container-list">
      <Typography component="h1" variant="h6" color="inherit" noWrap>
        {header}
      </Typography>
      <div style={{ width: '50vw'}}>
          {factcat.map((fact, index) => (
              <FactAnimalItem key={`factdogitem-${index}`} factanimal={fact} header={`Fact Dog ${index + 1}:`}/>
          ))}
      </div>
    </div>
  );
};

export default FactDogList;
