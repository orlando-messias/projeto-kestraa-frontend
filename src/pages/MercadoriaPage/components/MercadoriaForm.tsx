import {
  Button,
  FormControlLabel,
  Grid,
  InputAdornment,
  Paper,
  Switch,
  TextField
} from '@material-ui/core';
import {
  CheckCircle, Delete, FiberNew
} from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { useFormik } from 'formik';
import AutocompleteInput from 'components/AutocompleteInput/AutocompleteInput';
import AutocompleteInput2 from 'components/AutocompleteInput/AutocompleteInput2';
import AutocompleteInput3 from 'components/AutocompleteInput/AutocompleteInput3';
import AutocompleteInput4 from 'components/AutocompleteInput/AutocompleteInput4';
import {
  Container, Content, Header, useStyles
} from './MercadoriaForm.styles';

interface Mercadoria {
  cod: string;
  description: string;
  descriptionSap: string;
  id: number;
  naladiNCCA: {
    cod: string;
    description: string;
  };
  naladiSH: {
    cod: string;
    description: string;
  };
  ncm: {
    cod: string;
    description: string;
  };
  nickname: string;
  unit: {
    cod: string;
    description: string;
    initials: string;
  }
  vlUnitWeight: string;
  vlUnitWeightPresentation: string;
}

const MercadoriaForm = () => {
  const [mercadoria, setMercadoria] = useState<Mercadoria>({
    cod: '',
    id: 0,
    nickname: '',
    description: '',
    descriptionSap: '',
    unit: { cod: '', description: '', initials: '' },
    naladiSH: { cod: '', description: '' },
    ncm: { cod: '', description: '' },
    naladiNCCA: { cod: '', description: '' },
    vlUnitWeight: '',
    vlUnitWeightPresentation: '',
  });

  const cadastroFormSchema = yup.object().shape({
    cod: yup.string().required('Código da mercadoria obrigatório'),
    nickname: yup.string().required('Apelido da Mercadoria obrigatório').max(50, 'Máximo 50 caracteres'),
    description: yup.string().required('Descrição obrigatória'),
    descriptionSap: yup.string().required('Descrição SAP obrigatória'),
    vlUnitWeight: yup.string().required('Peso Líquido Unit obrigatório'),
    vlUnitWeightPresentation: yup.string().required('Peso Líquido Unit Apresentação obrigatório'),
  });

  const update = async (values: any) => {
    console.log('Mercadoria ', values);
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

  const { mercadoriaId } = useParams();

  useEffect(() => {
    axios({
      method: 'GET',
      url: `http://172.20.10.177:5502/merchandise/${mercadoriaId}`,
    }).then((res) => {
      setMercadoria(res.data);
    });
  }, [mercadoriaId]);

  const handleChangeInputValue4 = (value: string) => {
    if (value.indexOf('-') > -1) {
      const newValue = value.substring(0, value.indexOf(' -'));
      formik.values.unit.cod = newValue;
    } else {
      formik.values.unit.cod = value;
    }
    // setMercadoria((prev) => ({ ...prev, unit: { ...prev.unit, description: value } }));
  };

  const handleChangeInputValue3 = (value: string) => {
    if (value.indexOf('-') > -1) {
      const newValue = value.substring(0, value.indexOf(' -'));
      formik.values.ncm.cod = newValue;
    } else {
      formik.values.ncm.cod = value;
    }
  };

  const handleChangeInputValue2 = (value: string) => {
    if (value.indexOf('-') > -1) {
      const newValue = value.substring(0, value.indexOf(' -'));
      formik.values.naladiSH.cod = newValue;
    } else {
      formik.values.naladiSH.cod = value;
    }
  };

  const handleChangeInputValue = (value: string) => {
    if (value.indexOf('-') > -1) {
      const newValue = value.substring(0, value.indexOf(' -'));
      formik.values.naladiNCCA.cod = newValue;
    } else {
      formik.values.naladiNCCA.cod = value;
    }
  };

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
                    name="cod"
                    variant="outlined"
                    size="small"
                    autoFocus
                    InputLabelProps={{
                      className: styles.inputLabel
                    }}
                    onChange={formik.handleChange}
                    value={formik.values.cod}
                    error={formik.touched.cod && Boolean(formik.errors.cod)}
                    helperText={formik.touched.cod && formik.errors.cod}
                    disabled={!!mercadoriaId}
                  />
                </Grid>
                <Grid item sm={12}>
                  <TextField
                    size="small"
                    label="Apelido Mercadoria"
                    name="nickname"
                    variant="outlined"
                    onChange={formik.handleChange}
                    value={formik.values.nickname}
                    InputLabelProps={{
                      className: styles.inputLabel
                    }}
                    InputProps={{
                      className: styles.inputMedium
                    }}
                    error={formik.touched.nickname && Boolean(formik.errors.nickname)}
                    helperText={formik.touched.nickname && formik.errors.nickname}
                  />
                </Grid>
                <Grid item sm={6} md={6}>
                  <TextField
                    label="Descrição"
                    name="description"
                    multiline
                    minRows={3}
                    maxRows={6}
                    variant="outlined"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    // style={{ width: '560px' }}
                    InputLabelProps={{
                      className: styles.inputLabel
                    }}
                    fullWidth
                    inputProps={{
                      maxLength: 600
                    }}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                  />
                </Grid>
                <Grid item sm={6} md={6}>
                  <TextField
                    label="Descrição SAP"
                    name="descriptionSap"
                    multiline
                    minRows={3}
                    maxRows={6}
                    variant="outlined"
                    onChange={formik.handleChange}
                    value={formik.values.descriptionSap}
                    // style={{ width: '560px' }}
                    fullWidth
                    InputLabelProps={{
                      className: styles.inputLabel
                    }}
                    inputProps={{
                      maxLength: 600
                    }}
                    error={formik.touched.descriptionSap && Boolean(formik.errors.descriptionSap)}
                    helperText={formik.touched.descriptionSap && formik.errors.descriptionSap}
                    disabled={!!mercadoriaId}
                  />
                </Grid>
                <Grid item>
                  <AutocompleteInput4
                    inputValue={mercadoriaId ? `${mercadoria.unit.cod} - ${mercadoria.unit.description} (${mercadoria.unit.initials})` : null}
                    onChangeValue={handleChangeInputValue4}
                  />
                </Grid>
                <div style={{ marginTop: '-13px', marginLeft: '8px' }}>
                  <Grid item>
                    <AutocompleteInput3
                      inputValue={mercadoriaId ? `${mercadoria.ncm.cod} - ${mercadoria.ncm.description}` : null}
                      onChangeValue={handleChangeInputValue3}
                    />
                  </Grid>
                </div>
                <div style={{ marginTop: '-5px', marginLeft: '8px' }}>
                  <Grid item>
                    <AutocompleteInput2
                      inputValue={mercadoriaId ? `${mercadoria.naladiSH.cod} - ${mercadoria.naladiSH.description}` : null}
                      onChangeValue={handleChangeInputValue2}
                    />
                  </Grid>
                </div>
                <div style={{ marginTop: '-5px', marginLeft: '8px' }}>
                  <Grid item>
                    <AutocompleteInput
                      inputValue={mercadoriaId ? `${mercadoria.naladiNCCA.cod} - ${mercadoria.naladiNCCA.description}` : null}
                      onChangeValue={handleChangeInputValue}
                    />
                  </Grid>
                </div>

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
                  size="small"
                  label="Valor Peso Liq Unitário"
                  name="vlUnitWeight"
                  placeholder="0.00000"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.vlUnitWeight}
                  InputProps={{
                    className: styles.input,
                    endAdornment: (
                      <InputAdornment position="start">Kg</InputAdornment>
                    )
                  }}
                  InputLabelProps={{
                    className: styles.inputLabel
                  }}
                  error={formik.touched.vlUnitWeight
                    && Boolean(formik.errors.vlUnitWeight)}
                  helperText={formik.touched.vlUnitWeight && formik.errors.vlUnitWeight}
                />
              </Grid>
              <Grid item sm={4}>
                <TextField
                  size="small"
                  label="Valor Peso Liq Unit Apresentação"
                  name="vlUnitWeightPresentation"
                  placeholder="0.00000"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.vlUnitWeightPresentation}
                  InputProps={{
                    className: styles.input,
                    endAdornment: (
                      <InputAdornment position="start">Kg</InputAdornment>
                    )
                  }}
                  InputLabelProps={{
                    className: styles.inputLabel
                  }}
                  error={formik.touched.vlUnitWeightPresentation
                    && Boolean(formik.errors.vlUnitWeightPresentation)}
                  helperText={formik.touched.vlUnitWeightPresentation
                    && formik.errors.vlUnitWeightPresentation}
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
              <Button type="submit" startIcon={<CheckCircle style={{ fontSize: '16px' }} />} className={styles.button1}>salvar</Button>
              <Button
                startIcon={<Delete style={{ fontSize: '16px' }} />}
                className={styles.button2}
              >
                Limpar
              </Button>
            </div>
          </Paper>
        </form>
      </div>

    </Container>
  );
};

export default MercadoriaForm;
