import React from 'react';
import areEqual from 'fast-deep-equal';
import { FactAnimal } from 'DashboardModels';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PetIcon from '@material-ui/icons/Pets';

type Props = {
  factanimal: FactAnimal;
  header: string
};

const FactAnimalItem = React.memo<Props> (({ factanimal, header }) => {
  return (
    <React.Fragment>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PetIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={header} secondary={factanimal.text} />
      </ListItem>
    </React.Fragment>
  );
}, areEqual);

export default FactAnimalItem;
