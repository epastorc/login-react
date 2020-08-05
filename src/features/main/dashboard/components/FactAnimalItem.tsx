import React from 'react';
import areEqual from 'fast-deep-equal';

import { FactAnimal } from 'DashboardModels';

type Props = {
  factanimal: FactAnimal;
  header: string
};

const FactAnimalItem = React.memo<Props> (({ factanimal, header }) => {
  return (
    <div>
      <h3>{header}</h3>

      <p>{factanimal.text}</p>
    </div>
  );
}, areEqual);

export default FactAnimalItem;
