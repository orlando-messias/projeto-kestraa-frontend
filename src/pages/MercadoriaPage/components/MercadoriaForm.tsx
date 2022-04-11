import {
  Button,
  FormControlLabel,
  Grid,
  InputAdornment,
  Paper,
  Switch,
  TextField
} from '@material-ui/core';
import InputMask from 'react-input-mask';
import {
  CheckCircle, Delete, FiberNew, Search
} from '@mui/icons-material';
import React, { useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import {
  Container, Content, Header, useStyles
} from './MercadoriaForm.styles';
import data from './data.json';

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
    vlPesoLiqUnitario: '',
    vlPesoLiqUnitarioApresentacao: '',
    inAtivo: false
  });

  const cadastroFormSchema = yup.object().shape({
    cdMercadoria: yup.string().required('Código da mercadoria obrigatório'),
    apMercadoria: yup.string().required('Apelido da Mercadoria obrigatório').max(50, 'Máximo 50 caracteres'),
    txDescricao: yup.string().required('Descrição obrigatória'),
    txDescricaoSap: yup.string().required('Descrição SAP obrigatória'),
    cdUnidMedComerc: yup.string().required('Código Unidade Med Comercial obrigatória'),
    cdNcmSh: yup.string().required('Código Ncm Sh obrigatório').min(8, 'Formato de código inválido'),
    cdNaladiSh: yup.string().required('Código Naladi SH obrigatório'),
    cdNaladiNcca: yup.string().required('Código Naladi NCCA obrigatório'),
    vlPesoLiqUnitario: yup.string().required('Peso Líquido Unit obrigatório'),
    vlPesoLiqUnitarioApresentacao: yup.string().required('Peso Líquido Unit Apresentação obrigatório'),
  });

  const update = async (values: any) => {
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

  // const onlyNumbers = (str: any) => str.replace(/[^0-9]/g, '');

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
                    variant="outlined"
                    size="small"
                    autoFocus
                    InputLabelProps={{
                      className: styles.inputLabel
                    }}
                    onChange={formik.handleChange}
                    value={formik.values.cdMercadoria}
                    error={formik.touched.cdMercadoria && Boolean(formik.errors.cdMercadoria)}
                    helperText={formik.touched.cdMercadoria && formik.errors.cdMercadoria}
                  />
                </Grid>
                <Grid item sm={12}>
                  <TextField
                    size="small"
                    label="Apelido Mercadoria"
                    name="apMercadoria"
                    variant="outlined"
                    onChange={formik.handleChange}
                    value={formik.values.apMercadoria}
                    InputLabelProps={{
                      className: styles.inputLabel
                    }}
                    InputProps={{
                      className: styles.inputMedium
                    }}
                    error={formik.touched.apMercadoria && Boolean(formik.errors.apMercadoria)}
                    helperText={formik.touched.apMercadoria && formik.errors.apMercadoria}
                  />
                </Grid>
                <Grid item sm={6} md={6}>
                  <TextField
                    label="Descrição"
                    name="txDescricao"
                    multiline
                    rows={6}
                    maxRows={6}
                    variant="outlined"
                    onChange={formik.handleChange}
                    value={formik.values.txDescricao}
                    // style={{ width: '560px' }}
                    InputLabelProps={{
                      className: styles.inputLabel
                    }}
                    fullWidth
                    inputProps={{
                      maxLength: 600
                    }}
                    error={formik.touched.txDescricao && Boolean(formik.errors.txDescricao)}
                    helperText={formik.touched.txDescricao && formik.errors.txDescricao}
                  />
                </Grid>
                <Grid item sm={6} md={6}>
                  <TextField
                    label="Descrição SAP"
                    name="txDescricaoSap"
                    multiline
                    rows={6}
                    maxRows={6}
                    variant="outlined"
                    onChange={formik.handleChange}
                    value={formik.values.txDescricaoSap}
                    // style={{ width: '560px' }}
                    fullWidth
                    InputLabelProps={{
                      className: styles.inputLabel
                    }}
                    inputProps={{
                      maxLength: 600
                    }}
                    error={formik.touched.txDescricaoSap && Boolean(formik.errors.txDescricaoSap)}
                    helperText={formik.touched.txDescricaoSap && formik.errors.txDescricaoSap}
                  />
                </Grid>
                <Grid item sm={3} md={3}>
                  <TextField
                    size="small"
                    label="Cod Unidade Med Comercial"
                    name="cdUnidMedComerc"
                    variant="outlined"
                    onChange={formik.handleChange}
                    value={formik.values.cdUnidMedComerc}
                    fullWidth
                    InputLabelProps={{
                      className: styles.inputLabel
                    }}
                    InputProps={{
                      className: styles.input
                    }}
                    error={formik.touched.cdUnidMedComerc
                      && Boolean(formik.errors.cdUnidMedComerc)}
                    helperText={formik.touched.cdUnidMedComerc
                      && formik.errors.cdUnidMedComerc}
                  />
                </Grid>
                <Grid item sm={3} md={3}>
                  <InputMask
                    mask="9999.99.99"
                    onChange={formik.handleChange}
                    value={formik.values.cdNcmSh}
                  >
                    {() => (
                      <TextField
                        label="Cod NCM SH"
                        name="cdNcmSh"
                        variant="outlined"
                        size="small"
                        fullWidth
                        InputLabelProps={{
                          className: styles.inputLabel
                        }}
                        InputProps={{
                          className: styles.input
                        }}
                        error={formik.touched.cdNcmSh && Boolean(formik.errors.cdNcmSh)}
                        helperText={formik.touched.cdNcmSh && formik.errors.cdNcmSh}
                      />
                    )}
                  </InputMask>
                </Grid>
                <Grid item sm={3} md={3}>
                  <TextField
                    size="small"
                    label="Cod Naladi SH"
                    name="cdNaladiSh"
                    variant="outlined"
                    onChange={formik.handleChange}
                    value={formik.values.cdNaladiSh}
                    fullWidth
                    InputLabelProps={{
                      className: styles.inputLabel
                    }}
                    InputProps={{
                      className: styles.input
                    }}
                    error={formik.touched.cdNaladiSh && Boolean(formik.errors.cdNaladiSh)}
                    helperText={formik.touched.cdNaladiSh && formik.errors.cdNaladiSh}
                  />
                </Grid>
                <Grid item sm={3}>
                  <Autocomplete
                    options={data}
                    size="small"
                    getOptionLabel={(option) => `${option.codigo}`}
                    isOptionEqualToValue={(option, value) => option.codigo === value.codigo}
                    onChange={formik.handleChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Cod Naladi NCCA"
                        variant="outlined"
                        name="cdNaladiNcca"
                        onChange={formik.handleChange}
                        value={formik.values.cdNaladiNcca}
                        // eslint-disable-next-line max-len
                        InputProps={{
                          ...params.InputProps,
                          endAdornment: (
                            <InputAdornment position="end">
                              <Search style={{ color: '#c2c2c2', position: 'relative', right: '-30px' }} />
                            </InputAdornment>
                          )
                        }}
                        InputLabelProps={{
                          className: styles.inputLabel
                        }}
                        error={formik.touched.cdNaladiNcca && Boolean(formik.errors.cdNaladiNcca)}
                        helperText={formik.touched.cdNaladiNcca && formik.errors.cdNaladiNcca}
                      />
                    )}
                    filterOptions={createFilterOptions({
                      matchFrom: 'start',
                      stringify: (option) => option.codigo
                    })}
                    noOptionsText="Digite um código válido"
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
              <Grid item sm={4}>
                <TextField
                  label="Valor Peso Liq Unitário"
                  name="vlPesoLiqUnitario"
                  placeholder="0.00000"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.vlPesoLiqUnitario}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">Kg</InputAdornment>
                    )
                  }}
                  InputLabelProps={{
                    className: styles.inputLabel
                  }}
                  error={formik.touched.vlPesoLiqUnitario
                    && Boolean(formik.errors.vlPesoLiqUnitario)}
                  helperText={formik.touched.vlPesoLiqUnitario && formik.errors.vlPesoLiqUnitario}
                />
              </Grid>
              <Grid item sm={4}>
                <TextField
                  label="Valor Peso Liq Unit Apresentação"
                  name="vlPesoLiqUnitarioApresentacao"
                  placeholder="0.00000"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.vlPesoLiqUnitarioApresentacao}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">Kg</InputAdornment>
                    )
                  }}
                  InputLabelProps={{
                    className: styles.inputLabel
                  }}
                  error={formik.touched.vlPesoLiqUnitarioApresentacao
                    && Boolean(formik.errors.vlPesoLiqUnitarioApresentacao)}
                  helperText={formik.touched.vlPesoLiqUnitarioApresentacao
                    && formik.errors.vlPesoLiqUnitarioApresentacao}
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
