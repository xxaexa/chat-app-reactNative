import {
  TouchableOpacity,
  StyleSheet,
  Pressable,
  TextInput,
  Text,
  View,
} from "react-native";
import { Link } from "expo-router";
import { FormValues } from "../types";
import { Formik } from "formik";
import * as Yup from "yup";
import { router } from "expo-router";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function TabOneScreen() {
  const handleSubmit = async (values: FormValues) => {};

  return (
    <View style={styles.container}>
      <Text>LOGIN</Text>
      <View>
        <Formik
          initialValues={{
            password: "",
            confirmPassword: "",
            name: "",
            email: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              {touched.name && errors.name && (
                <Text style={styles.error}>{errors.name}</Text>
              )}

              <TextInput
                style={styles.input}
                placeholder="email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {touched.email && errors.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}

              <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
              />
              {touched.password && errors.password && (
                <Text style={styles.error}> {errors.password}</Text>
              )}

              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                secureTextEntry
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.error}>{errors.confirmPassword}</Text>
              )}

              <TouchableOpacity
                style={styles.submit}
                onPress={() => handleSubmit()}
              >
                <Text style={styles.title}>Submit</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
        <Text style={{ marginTop: 20 }}>
          Don't have account ? &nbsp;
          <Link href="/" asChild>
            <Pressable>
              <Text>Login</Text>
            </Pressable>
          </Link>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    color: "#F0ECE5",
    textAlign: "center",
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: "80%",
  },
  input: {
    padding: 4,
    outlineStyle: "none",
    borderWidth: 1,
    borderColor: "#cccccc",
    margin: 12,
  },
  error: {
    paddingHorizontal: 12,
    paddingBottom: 8,
    color: "red",
  },
  submit: {
    margin: 8,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#31304D",
  },
});
