import {
  Button,
  FormControlLabel, Grid, Input, InputAdornment, InputLabel, Paper, Switch, TextField
} from '@material-ui/core';
import { CheckCircle, Delete, FiberNew } from '@mui/icons-material';
import React, { useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import {
  Container, Content, Header, useStyles
} from './MercadoriaForm.styles';

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

  const cadastroFormSchema = yup.object().shape({
    cdMercadoria: yup.string().required('obrigatorio'),
    apMercadoria: yup.string().required('Ap Mercadoria obrigatório.').min(3, 'No mínimo 3 caracteres.'),
  });

  const update = (values: any) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: mercadoria,
    validationSchema: cadastroFormSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      formik.setSubmitting(false);
      update(values);
    },
  });

  const styles = useStyles();

  return (
    <Container>
      <Header>
        <span className="icon"><FiberNew /></span>
        <span>Cadastro de Mercadoria</span>
      </Header>
      <div style={{ margin: '50px 0 0 50px' }}>
        <form noValidate onSubmit={formik.handleSubmit}>
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
                    InputLabelProps={{
                      className: styles.inputLabel
                    }}
                    onChange={formik.handleChange}
                    value={formik.values.cdMercadoria}
                    // InputProps={{
                    //   className: styles.input
                    // }}
                    style={{ marginBottom: '20px' }}
                    // error={formik.touched.cdMercadoria && Boolean(formik.errors.cdMercadoria)}
                    // helperText={formik.touched.cdMercadoria && formik.errors.cdMercadoria}
                  />
                </Grid>
                <Grid item sm={4} md={8}>
                  <TextField
                    size="small"
                    label="Ap Mercadoria"
                    name="apMercadoria"
                    variant="outlined"
                    onChange={formik.handleChange}
                    value={formik.values.apMercadoria}
                    InputLabelProps={{
                      className: styles.inputLabel
                    }}
                    InputProps={{
                      className: styles.input
                    }}
                    fullWidth
                    error={formik.touched.apMercadoria && Boolean(formik.errors.apMercadoria)}
                    helperText={formik.touched.apMercadoria && formik.errors.apMercadoria}
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
              <Button type="submit" startIcon={<CheckCircle />} className={styles.button1}>Salvar</Button>
              <Button
                startIcon={<Delete />}
                className={styles.button2}
              >
                Limpar
              </Button>
            </div>
          </Paper>
        </form>
      </div>

      {console.log(mercadoria)}
    </Container>
  );
};

export default MercadoriaForm;
