import {
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import axios from "axios";
import { personCircle } from "ionicons/icons";
import { useState } from "react";
import "./Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleLogin = () => {
    //validate inputs code not shown
    const loginData = {
      email: email,
      password: password,
    };
    const api = axios.create({
      baseURL: `https://reqres.in/api`,
    });
    api
      .post("/login", loginData)
      .then((res) => {
        // history.push("/dashboard/" + email);
      })
      .catch((error) => {
        setMessage("Auth failure! Please create an account");
        setIsError(true);
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen style={{ textAlign: "center", padding: "0 3rem" }}>
        <IonRow>
          <IonCol>
            <IonIcon
              style={{ fontSize: "70px", color: "#0040ff" }}
              icon={personCircle}
            />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating"> Email</IonLabel>
              <IonInput
                type="email"
                value={email}
                onIonChange={(e: any) => setEmail(e.detail.value!)}
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating"> Password</IonLabel>
              <IonInput
                type="password"
                value={password}
                onIonChange={(e: any) => setPassword(e.detail.value!)}
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <p>
              <small>
                By clicking LOGIN you agree to our <a href="#">Policy</a>
              </small>
            </p>
            <IonButton expand="block" onClick={handleLogin}>
              Login
            </IonButton>
            <p>
              <small>
                Don't have an account? <a href="#">Sign up!</a>
              </small>
            </p>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Login;
