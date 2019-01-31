import React, { Component } from "react";
import {
  Container,
  View,
  Text,
  Content,
  Item,
  Input,
  Button,
  Header,
  Left,
  Body,
  Right,
  Icon,
  Spinner,
  Form
} from "native-base";
import { TouchableOpacity, Alert } from "react-native";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { NavigationActions } from "react-navigation";
import { Formik } from "formik";
import * as Yup from "yup";

// Styles
import styles from "./Styles/DaftarTutorScreenStyle";
import SpinnerOverlay from "react-native-loading-spinner-overlay";

class DaftarTutorScreen extends Component {
  // Navigation
  navigateBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };

  // Formik
  onSubmitDaftarTutorForm = (values, actions) => {
    setTimeout(() => {
      // this.props.registerRequest(username, email, password);
      actions.setSubmitting(false);
    }, 1000);
  };

  validationSchemaDaftarTutorForm = Yup.object().shape({
    nama: Yup.string().required('Kolom "Nama" tidak boleh kosong!'),
    levelMandarin: Yup.string().required(
      'Kolom "Level Mandarin" tidak boleh kosong!'
    ),
    pengalaman: Yup.string().required('Kolom "Pengalaman" tidak boleh kosong!'),
    mengajar: Yup.string().required('Kolom "Mengajar" tidak boleh kosong!'),
    eduBackground: Yup.string().required(
      'Kolom "Education Background" tidak boleh kosong!'
    ),
    spesialisasi: Yup.string().required(
      'Kolom "Spesialisasi" tidak boleh kosong!'
    ),
    metodeMengajar: Yup.string().required(
      'Kolom "Metode Mengajar" tidak boleh kosong!'
    ),
    tarif: Yup.string().required('Kolom "Tarif" tidak boleh kosong!')
  });

  daftarTutorForm = ({
    setFieldValue,
    setFieldTouched,
    values,
    errors,
    touched,
    handleSubmit,
    isSubmitting,
    isValid
  }) => (
    <Form>
      {/* Loading indicator */}
      {isSubmitting && (
        <View style={{ flex: 1 }}>
          <SpinnerOverlay visible={true}>
            <View
              style={[
                { flex: 1, justifyContent: "center", alignItems: "center" }
              ]}
            >
              <Spinner color="blue" />
            </View>
          </SpinnerOverlay>
        </View>
      )}

      {/* Nama */}
      <Item
        regular
        error={!!(errors.nama && touched.nama)}
        style={styles.inputWrapper}
      >
        <Input
          style={styles.input}
          name="nama"
          placeholder="Nama"
          onChangeText={text => setFieldValue("nama", text)}
          value={values.nama}
          onSubmitEditing={handleSubmit}
          disabled={isSubmitting}
        />
      </Item>
      {errors.nama && touched.nama && (
        <Text style={styles.inputError}>{errors.nama}</Text>
      )}

      {/* levelMandarin */}
      <Item
        regular
        error={!!(errors.levelMandarin && touched.levelMandarin)}
        style={styles.inputWrapper}
      >
        <Input
          style={styles.input}
          name="levelMandarin"
          placeholder="Level Mandarin"
          onChangeText={text => setFieldValue("levelMandarin", text)}
          value={values.levelMandarin}
          onSubmitEditing={handleSubmit}
          disabled={isSubmitting}
        />
      </Item>
      {errors.levelMandarin && touched.levelMandarin && (
        <Text style={styles.inputError}>{errors.levelMandarin}</Text>
      )}

      {/* pengalaman */}
      <Item
        regular
        error={!!(errors.pengalaman && touched.pengalaman)}
        style={styles.inputWrapper}
      >
        <Input
          style={styles.input}
          name="pengalaman"
          placeholder="Pengalaman"
          onChangeText={text => setFieldValue("pengalaman", text)}
          value={values.pengalaman}
          onSubmitEditing={handleSubmit}
          disabled={isSubmitting}
        />
      </Item>
      {errors.pengalaman && touched.pengalaman && (
        <Text style={styles.inputError}>{errors.pengalaman}</Text>
      )}

      {/* mengajar */}
      <Item
        regular
        error={!!(errors.mengajar && touched.mengajar)}
        style={styles.inputWrapper}
      >
        <Input
          style={styles.input}
          name="mengajar"
          placeholder="Mengajar"
          onChangeText={text => setFieldValue("mengajar", text)}
          value={values.mengajar}
          onSubmitEditing={handleSubmit}
          disabled={isSubmitting}
        />
      </Item>
      {errors.mengajar && touched.mengajar && (
        <Text style={styles.inputError}>{errors.mengajar}</Text>
      )}

      {/* eduBackground */}
      <Item
        regular
        error={!!(errors.eduBackground && touched.eduBackground)}
        style={styles.inputWrapper}
      >
        <Input
          style={styles.input}
          name="eduBackground"
          placeholder="Background Edukasi"
          onChangeText={text => setFieldValue("eduBackground", text)}
          value={values.eduBackground}
          onSubmitEditing={handleSubmit}
          disabled={isSubmitting}
        />
      </Item>
      {errors.eduBackground && touched.eduBackground && (
        <Text style={styles.inputError}>{errors.eduBackground}</Text>
      )}

      {/* spesialisasi */}
      <Item
        regular
        error={!!(errors.spesialisasi && touched.spesialisasi)}
        style={styles.inputWrapper}
      >
        <Input
          style={styles.input}
          name="spesialisasi"
          placeholder="Spesialisasi"
          onChangeText={text => setFieldValue("spesialisasi", text)}
          value={values.spesialisasi}
          onSubmitEditing={handleSubmit}
          disabled={isSubmitting}
        />
      </Item>
      {errors.spesialisasi && touched.spesialisasi && (
        <Text style={styles.inputError}>{errors.spesialisasi}</Text>
      )}

      {/* metodeMengajar */}
      <Item
        regular
        error={!!(errors.metodeMengajar && touched.metodeMengajar)}
        style={styles.inputWrapper}
      >
        <Input
          style={styles.input}
          name="metodeMengajar"
          placeholder="Metode Mengajar"
          onChangeText={text => setFieldValue("metodeMengajar", text)}
          value={values.metodeMengajar}
          onSubmitEditing={handleSubmit}
          disabled={isSubmitting}
        />
      </Item>
      {errors.metodeMengajar && touched.metodeMengajar && (
        <Text style={styles.inputError}>{errors.metodeMengajar}</Text>
      )}

      {/* tarif */}
      <Item
        regular
        error={!!(errors.tarif && touched.tarif)}
        style={styles.inputWrapper}
      >
        <Input
          style={styles.input}
          name="tarif"
          placeholder="Tarif"
          onChangeText={text => setFieldValue("tarif", text)}
          value={values.tarif}
          onSubmitEditing={handleSubmit}
          disabled={isSubmitting}
        />
      </Item>
      {errors.tarif && touched.tarif && (
        <Text style={styles.inputError}>{errors.tarif}</Text>
      )}

      {/* Submit Button */}
      <Button
        primary
        full
        disabled={isSubmitting || !isValid}
        onPress={handleSubmit}
      >
        <Text>Daftar</Text>
      </Button>
    </Form>
  );

  // Render
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={this.navigateBack}>
              <Icon name="md-arrow-back" />
            </Button>
          </Left>
          <Body
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ color: "#fff" }}>Daftar Tutor</Text>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>

        <Content padder>
          <View>
            {/* Register Form */}
            <Formik
              initialValues={{
                nama: "",
                levelMandarin: "",
                pengalaman: "",
                mengajar: "",
                eduBackground: "",
                spesialisasi: "",
                metodeMengajar: "",
                tarif: ""
              }}
              onSubmit={this.onSubmitDaftarTutorForm}
              render={this.daftarTutorForm}
              validationSchema={this.validationSchemaDaftarTutorForm}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DaftarTutorScreen);
