import React from 'react';
import areEqual from 'fast-deep-equal';

import { FactCat } from 'DashboardModels';

type Props = {
  factcat: FactCat;
};

const FatCatItem = React.memo<Props> (({ factcat }) => {
  return (
    <div>
      <h3>Text</h3>

      <p>{factcat.text}</p>
    </div>
  );
}, areEqual);

export default FatCatItem;
