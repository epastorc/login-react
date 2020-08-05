import React from 'react';
import { FactAnimal } from 'DashboardModels';
import Typography from '@material-ui/core/Typography';

import FactAnimalItem  from '../../components/FactAnimalItem';


type Props = {
  factcat: FactAnimal[];
};

const FactCatList: React.FC<Props> = ({ factcat }) => {
  const header = 'List of fact about cats';

  return (
    <div className="container-list">
      <Typography component="h1" variant="h6" color="inherit" noWrap>
        {header}
      </Typography>
      <div style={{ width: '50vw'}}>
          {factcat.map((fact, index) => (
              <FactAnimalItem key={`factcatitem-${index}`} factanimal={fact} header={`Fact ${index + 1}:`}/>
          ))}
      </div>
    </div>
  );
};

export default FactCatList;
