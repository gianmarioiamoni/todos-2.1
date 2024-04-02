import { Add } from '@mui/icons-material';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { usePopupState } from 'material-ui-popup-state/hooks';

import { NewListDialog } from './NewListDialog.jsx';

export function AppHeader({ handleListUpdated }) {
  const dialogState = usePopupState({ variant: 'dialog', popupId: 'new-list' });


  return (
    <>
      <NewListDialog dialogState={dialogState} handleListUpdated={handleListUpdated} />
      <AppBar
        position="fixed"
        sx={{ zIndex: theme => theme.zIndex.drawer + 1, mt: 6}}

      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Lists
          </Typography>
          <Button
            startIcon={<Add />}
            color="inherit"
            sx={{ mr: 1 }}
            onClick={dialogState.open}
          >
            Add List
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
