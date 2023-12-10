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
  const handleSubmit = async (values: FormValues) => {
    router.replace("/chats");
  };

  return (
    <View style={styles.container}>
      <Text>LOGIN</Text>
      <View>
        <Formik
          initialValues={{ email: "", password: "" }}
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
                placeholder="Email"
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

              <TouchableOpacity
                style={styles.submit}
                onPress={() => handleSubmit()}
              >
                <Text style={styles.title}>Login</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
        <Text style={{ marginTop: 20 }}>
          Don't have account ? &nbsp;
          <Link href="/register" asChild>
            <Pressable>
              <Text>Register</Text>
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
    marginTop: 40,
    padding: 20,
    // justifyContent: "center",
  },
  title: {
    fontSize: 16,
    color: "#F0ECE5",
    textAlign: "center",
  },

  input: {
    padding: 4,
    outlineStyle: "none",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginBottom: 12,
  },
  error: {
    color: "red",
  },
  submit: {
    margin: 8,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#31304D",
  },
});
