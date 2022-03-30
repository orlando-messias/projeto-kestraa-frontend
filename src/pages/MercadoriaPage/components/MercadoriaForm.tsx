import {
  Button,
  FormControlLabel, Grid, Paper, Switch, TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Ballot, CheckCircle, Delete } from '@mui/icons-material';
import { useState } from 'react';
import { Container, Content, Header } from './MercadoriaForm.styles';

const useStyles = makeStyles((theme) => ({
  input: {
    padding: '0px',
    height: '52px'
  },
  inputLabel: {
    fontSize: '12px',
    paddingTop: '3px',
    color: '#c2c2c2'
  },
  pageContent: {
    margin: theme.spacing(2),
    padding: theme.spacing(3),
    width: '80%'
  },
  pageContentButtons: {
    margin: theme.spacing(2),
    padding: theme.spacing(3),
    width: '80%',
    display: 'flex',
    justifyContent: 'flex-end'
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
      <div style={{ margin: '50px 0 0 50px' }}>

        <Paper className={styles.pageContent}>
          <Content>
            <Grid container spacing={2}>

              <Grid item sm={12}>
                <TextField
                  label="Cod Mercadoria"
                  name="cdMercadoria"
                  size="small"
                  autoFocus
                  InputLabelProps={{
                    className: styles.inputLabel
                  }}
                  // InputProps={{
                  //   className: styles.input
                  // }}
                  style={{ marginBottom: '20px' }}
                />
              </Grid>
              <Grid item sm={4} md={6}>
                <TextField
                  size="small"
                  label="Ap Mercadoria"
                  name="apMercadoria"
                  variant="outlined"
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

        <Paper className={styles.pageContentButtons}>
          <div>
            <Button startIcon={<CheckCircle />} style={{ backgroundColor: '#1976D2', color: '#FFFFFF', width: '130px' }}>Salvar</Button>
            <Button
              startIcon={<Delete />}
              style={{
                backgroundColor: '#f0b536', color: '#FFFFFF', width: '130px', marginLeft: '10px'
              }}
            >
              Limpar
            </Button>
          </div>
        </Paper>
      </div>

      {console.log(mercadoria)}
    </Container>
  );
};

export default MercadoriaForm;
