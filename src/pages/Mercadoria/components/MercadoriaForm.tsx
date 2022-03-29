import {
  FormControlLabel, Grid, Paper, Switch, TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Ballot } from '@mui/icons-material';
import { useState } from 'react';
import { Container, Content, Header } from './MercadoriaForm.styles';

const useStyles = makeStyles((theme) => ({
  input: {
    padding: '0px',
  },
  inputLabel: {
    fontSize: '12px',
    paddingTop: '3px'
  },
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
    border: '1px solid #9cc8f5'
  }
}));

const MercadoriaForm = () => {
  const [mercadoria] = useState({
    cdMercadoria: '',
    cdGrupo: 0,
    apMercadoria: '',
    txDescricao: '',
    txDescricaoSap: '',
    cdUnidMedComerc: '',
    cdNcmSh: '',
    cdNaladiSh: '',
    cdNaladiNcca: '',
    vlPesoLiqUnitario: 0.0,
    vlPesoLiqUnitarioApresentacao: 0.0,
    inAtivo: false
  });

  const styles = useStyles();

  return (
    <Container>
      <Header>
        <span className="icon"><Ballot /></span>
        <span>Cadastro de Mercadoria</span>
      </Header>
      <Paper className={styles.pageContent}>
        <Content>
          <Grid container spacing={2}>

            <Grid item sm={12}>
              <TextField
                label="Cod Mercadoria"
                name="cdMercadoria"
                size="medium"
                autoFocus
                InputLabelProps={{
                  className: styles.inputLabel
                }}
                InputProps={{
                  className: styles.input
                }}
              />
            </Grid>
            <Grid item sm={4} md={6}>
              <TextField
                size="small"
                label="Ap Mercadoria"
                name="apMercadoria"
                variant="outlined"
                autoFocus
                InputLabelProps={{
                  className: styles.inputLabel
                }}
                InputProps={{
                  className: styles.input
                }}
                fullWidth
              />
            </Grid>
            <Grid item sm={4} md={3}>
              <TextField
                size="small"
                label="Taxa Descrição"
                name="txDescricao"
                variant="outlined"
                autoFocus
                InputLabelProps={{
                  className: styles.inputLabel
                }}
                InputProps={{
                  className: styles.input
                }}
              />
            </Grid>
            <Grid item sm={4} md={4}>
              <TextField
                size="small"
                label="Taxa Descrição Sap"
                name="txDescricaoSap"
                variant="outlined"
                autoFocus
                InputLabelProps={{
                  className: styles.inputLabel
                }}
                InputProps={{
                  className: styles.input
                }}
                fullWidth
              />
            </Grid>
            <Grid item sm={4} md={4}>
              <TextField
                size="small"
                label="Cod Unidade Med Comercial"
                name="cdUnidMedComercial"
                variant="outlined"
                autoFocus
                InputLabelProps={{
                  className: styles.inputLabel
                }}
                InputProps={{
                  className: styles.input
                }}
                fullWidth
              />
            </Grid>
            <Grid item sm={4} md={4}>
              <TextField
                size="small"
                label="Cod NCM SH"
                name="cdNcmSH"
                variant="outlined"
                autoFocus
                InputLabelProps={{
                  className: styles.inputLabel
                }}
                InputProps={{
                  className: styles.input
                }}
                fullWidth
              />
            </Grid>
            <Grid item sm={4} md={4}>
              <TextField
                size="small"
                label="Cod Naladi SH"
                name="cdNaladiSh"
                variant="outlined"
                autoFocus
                InputLabelProps={{
                  className: styles.inputLabel
                }}
                InputProps={{
                  className: styles.input
                }}
                fullWidth
              />
            </Grid>

          </Grid>
        </Content>
      </Paper>

      <Paper className={styles.pageContent}>
        <Grid container spacing={2}>

          <Grid item sm={12}>
            <TextField
              label="Cod Naladi NCCA"
              name="cdNaladiNcca"
              size="medium"
              autoFocus
              InputLabelProps={{
                className: styles.inputLabel
              }}
              InputProps={{
                className: styles.input
              }}
            />
          </Grid>
          <Grid item sm={4}>
            <TextField
              label="Valor Peso Liq Unitário"
              name="vlPesoLiqUnitario"
              size="medium"
              autoFocus
              InputLabelProps={{
                className: styles.inputLabel
              }}
              InputProps={{
                className: styles.input
              }}
            />
          </Grid>
          <Grid item sm={4}>
            <TextField
              label="Valor Peso Liq Apresentação"
              name="vlPesoLiqUnitarioApresentacao"
              size="medium"
              autoFocus
              InputLabelProps={{
                className: styles.inputLabel
              }}
              InputProps={{
                className: styles.input
              }}
            />
          </Grid>
          <Grid item sm={4}>
            <FormControlLabel
              control={(
                <Switch
                  name="inAtivo"
                  color="primary"
                />
              )}
              label="Ativo"
              value={false}
            />
          </Grid>

        </Grid>
      </Paper>

      {console.log(mercadoria)}
    </Container>
  );
};

export default MercadoriaForm;
