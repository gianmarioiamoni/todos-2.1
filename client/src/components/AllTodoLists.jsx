// user authentication imports
import { useSelector } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import * as Icons from '@mui/icons-material';
import ClearIcon from '@mui/icons-material/Clear';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  IconButton
} from '@mui/material';

import { useState, useEffect } from 'react';

import { AllTodosListItem } from './AllTodosListItem.jsx';

import { useAppState } from '../providers/AppState.jsx';
import { useAllTodosListIdAppState } from '../providers/AllTodosListIdAppState.jsx';
import { getAllLists, getAllTodosListId, deleteList } from '../services/listServices.js';

import { themeSelection } from "../common/themes.jsx";


export default function AllTodoLists({ handleListDelete, isListUpdated, setIsListUpdated, newListId = null }) {
  const [data, setData] = useState([]); // add loading

  const { currentList, setCurrentList } = useAppState();
  const { allTodosListId, setAllTodosListId } = useAllTodosListIdAppState();

  // user authentication logic
  const { currentUser } = useSelector(state => state.user);

  const user = currentUser;

  // USE EFFECTS

  // first render
  useEffect(() => {
    if (!currentList) {
      setCurrentList(data[0]?.id);
    }

    getAllTodosListId(user)
      .then((listId) => {
        // setAllTodosListId(listId);
        handleAllTodosList();
        setAllTodosListId(listId);
        return listId;
      })
      .catch(err => console.log(err))
  }, []);

  // currentList, setCurrentList, isListUpdated
  useEffect(() => {
    if (!currentList) {
      setCurrentList(data[0]?.id);
    }

    if (isListUpdated) {
      handleAllTodosList();
      setIsListUpdated(false);
    }

  }, [currentList, setCurrentList, isListUpdated]);


  function handleAllTodosList() {
    getAllLists(user)
      .then(listsData => {
        // check if "ALL TODOs" list is the first in the list
        if (listsData.length > 1 && !listsData[0]?.isAllTodos) {
          // move "ALL TODOs" list at the top of the array
          const oldListsArray = [...listsData];
          const idx = oldListsArray.findIndex((l) => l.id === allTodosListId);
          const list = { ...oldListsArray[idx] };

          // remove list from previous position in the array
          const filteredArray = oldListsArray.filter((l) => l.id !== allTodosListId);
          // add list at the top of the array
          const newListArray = [list, ...filteredArray];

          setAllTodosListId(list.id);
          setData(newListArray);

          if (!currentList) {
            setCurrentList(newListArray[0]?.id);
          }
        } else {
          // "ALL TODOs" list is already at the top
          setData((prev) => [...listsData]);

          if (!currentList) {
            setCurrentList(listsData[0]?.id);
          }

          setAllTodosListId(listsData[0]?.id);
        }

        return listsData;
      })
      .catch((err) => console.log(err));
  }

  function isAllTodosList(listId) {
    return (listId === allTodosListId);
  }

  return (
    <Drawer
      sx={{
        width: 0.25,
        minWidth: 200,
        mt: 7,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 0.25,
          minWidth: 200,
          mt: 13,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/*Empty Toolbar for spacing*/}
      {/* <Toolbar /> */}
      <List>
        {data != null && data.map(({ name, id, icon }) => {
          const Icon = Icons[icon];
          if (id == null && newListId) {
            id = newListId;
          }
          if (!isAllTodosList(id)) {
            return (
              <ListItem
                // key={id}
                key={uuidv4()}
                sx={id === currentList ? (
                  {
                    color: themeSelection.palette.secondary.main,
                    backgroundColor: themeSelection.palette.primary.main,
                    fontWeight: 'bold'
                  }
                ) : ({})
                }
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    sx={id === currentList ? (
                      {
                        color: themeSelection.palette.secondary.main,
                        backgroundColor: themeSelection.palette.primary.main,
                        fontWeight: 'bold'
                      }
                    ) : ({})
                    }
                    onClick={() => {
                      // call function in App to manage update of CurrentTodoList
                      handleListDelete();
                      const newLists = data.filter(l => l.id !== id);
                      setData(newLists);
                      setCurrentList(data[0]?.id);
                      return deleteList(id);
                    }}
                  >
                    <ClearIcon />
                  </IconButton>
                }
                disablePadding>
                <ListItemButton
                  onClick={() => {
                    setCurrentList(id);
                  }}
                  selected={currentList === id}
                >
                  {Icon ? <Icon /> : <Icons.List />}
                  <ListItemText sx={{ ml: 0.5 }} primary={name} />
                </ListItemButton>
              </ListItem>
            );
          } else {
            return <AllTodosListItem
              key={id}
              id={id}
              name={name}
            />
          }
        })}
      </List>
    </Drawer>
  );
}
