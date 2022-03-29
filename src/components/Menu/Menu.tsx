import {
  Collapse, Divider, List, ListItem, ListItemIcon, ListItemText, Typography
} from '@material-ui/core';
import {
  AddComment,
  Bookmark,
  Calculate,
  Description,
  ExpandLess,
  ExpandMore,
  FolderSpecial,
  Functions,
  ListAlt
} from '@mui/icons-material';
import { useState } from 'react';
import { Container, useStyles } from './Menu.styles';

const Menu = () => {
  const [openCapa, setOpenCapa] = useState(false);

  const handleItemClick = (item: string) => {
    if (item === 'capa') setOpenCapa(!openCapa);
  };

  const styles = useStyles();

  return (
    <Container>

      <List>
        <ListItem button className={styles.item} onClick={() => handleItemClick('capa')}>
          <ListItemIcon>
            <FolderSpecial className={styles.itemIcon} />
          </ListItemIcon>
          <ListItemText>
            <Typography className={styles.itemText}>Capa</Typography>
          </ListItemText>
          {openCapa
            ? <ExpandLess className={styles.item} />
            : <ExpandMore className={styles.item} />}
        </ListItem>
        <Collapse in={openCapa}>
          <ListItem button className={styles.subItem}>
            <ListItemIcon>
              <Bookmark className={styles.subItemIcon} />
            </ListItemIcon>
            <ListItemText>
              <Typography className={styles.subItemText}>Básicas</Typography>
            </ListItemText>
          </ListItem>
          <ListItem button className={styles.subItem}>
            <ListItemIcon>
              <Description />
            </ListItemIcon>
            <ListItemText>
              <Typography className={styles.subItemText}>Faturas</Typography>
            </ListItemText>
          </ListItem>
          <ListItem button className={styles.subItem}>
            <ListItemIcon>
              <Functions />
            </ListItemIcon>
            <ListItemText>
              <Typography className={styles.subItemText}>Totais</Typography>
            </ListItemText>
          </ListItem>
          <ListItem button className={styles.subItem}>
            <ListItemIcon>
              <AddComment />
            </ListItemIcon>
            <ListItemText>
              <Typography className={styles.subItemText}>Complementares</Typography>
            </ListItemText>
          </ListItem>
        </Collapse>
        <Divider className={styles.divider} />

        <ListItem button className={styles.item}>
          <ListItemIcon>
            <ListAlt className={styles.itemIcon} />
          </ListItemIcon>
          <ListItemText>
            <Typography className={styles.itemText}>Itens</Typography>
          </ListItemText>
        </ListItem>
        <Divider className={styles.divider} />
        <ListItem button className={styles.item}>
          <ListItemIcon>
            <Calculate className={styles.itemIcon} />
          </ListItemIcon>
          <ListItemText>
            <Typography className={styles.itemText}>Resumo Cálculo</Typography>
          </ListItemText>
        </ListItem>

      </List>
    </Container>
  );
};

export default Menu;
