import {
  Button,
  FormControlLabel, Grid, Input, InputAdornment, InputLabel, Paper, Switch, TextField
} from '@material-ui/core';
import { Ballot, CheckCircle, Delete } from '@mui/icons-material';
import React, { useState } from 'react';
import {
  Container, Content, Header, useStyles
} from './MercadoriaForm.styles';

const MercadoriaForm = () => {
  const [mercadoria, setMercadoria] = useState({
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

  const handleChangeMercadoria = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMercadoria({
      ...mercadoria,
      [event.target.name]: event.target.value
    });
  };

  const styles = useStyles();

  return (
    <Container>
      <Header>
        <span className="icon"><Ballot /></span>
        <span>Cadastro de Mercadoria</span>
      </Header>
      <div style={{ margin: '50px 0 0 50px' }}>
        <Paper className={styles.pageContent}>
          <span style={{ top: '-18px', position: 'relative', color: '#1976D2' }}>Descrição da Mercadoria</span>
          <Content>
            <Grid container spacing={2}>

              <Grid item sm={12}>
                <TextField
                  label="Cod Mercadoria"
                  name="cdMercadoria"
                  size="small"
                  autoFocus
                  onChange={handleChangeMercadoria}
                  InputLabelProps={{
                    className: styles.inputLabel
                  }}
                  // InputProps={{
                  //   className: styles.input
                  // }}
                  style={{ marginBottom: '20px' }}
                />
              </Grid>
              <Grid item sm={4} md={8}>
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
          <span style={{
            top: '-18px', position: 'relative', color: '#1976D2'
          }}
          >
            Valores
          </span>
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
              <InputLabel style={{ fontSize: '12px', marginTop: '10px' }}>Valor Peso Liq Unitário</InputLabel>
              <Input
                style={{ padding: '12px 0 2px 2px' }}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                placeholder="0.00"
              />
            </Grid>
            <Grid item sm={4}>
              <InputLabel style={{ fontSize: '12px', marginTop: '10px' }}>Valor Peso Liq Unit Apresentação</InputLabel>
              <Input
                style={{ padding: '12px 0 2px 2px' }}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                placeholder="0.00"
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
                backgroundColor: '#FF941D', color: '#FFFFFF', width: '130px', marginLeft: '10px'
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
