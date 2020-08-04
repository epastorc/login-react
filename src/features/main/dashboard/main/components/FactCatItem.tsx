import React from 'react';
import areEqual from 'fast-deep-equal';

import { FactCat } from 'DashboardModels';

type Props = {
  factcat: FactCat;
  header: string
};

const FatCatItem = React.memo<Props> (({ factcat, header }) => {
  return (
    <div>
      <h3>{header}</h3>

      <p>{factcat.text}</p>
    </div>
  );
}, areEqual);

export default FatCatItem;
