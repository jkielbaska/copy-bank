import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { AvatarLogo } from "./AvatarLogo";
import { Block } from "./Block";
import { Text } from "./Text";
import { auth } from "../firebase/firebase";
import { useUserData } from "../hooks/useUserData";

const LoggedFrame = styled.div({
  zIndex: 100,
  marginTop: "80px",
  width: "40vw",
  height: "50vh",
  maxWidth: "750px",
  maxHeight: "350px",
  minWidth: "250px",
  minHeight: "250px",
  fontSize: "20px",
  fontWeight: "200",
  backgroundColor: "#F2F2F2",
  borderRadius: "20px 20px 20px 20px",
});

// const FetchData = () => {
//   const [userData, setUserData] = useState<getUserDataProps[]>([]);

//   const userId = auth.currentUser?.uid;
//   const getData = ref(db);

//   useEffect(() => {
//     const fetchData = async () => {
//       await get(child(getData, `/users/${userId}`)).then((snapshot) => {
//         const fetched = snapshot.val();
//         console.log(fetched);
//         setUserData(fetched);
//       });
//     };
//     fetchData();
//     console.log(userData);
//   }, []);
// };
//

export const UserProfile = () => {
  const userId = auth.currentUser?.uid;
  console.log(userId);
  const userData = useUserData({ userId });

  return (
    <Block
      css={css`
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
      `}
    >
      <LoggedFrame>
        <Block
          direction="column"
          css={css`
            padding: 10px 10px 15px 10px;
          `}
        >
          <AvatarLogo avatar={userData?.avatar} />
          <Text size="big">{userData?.name}</Text>
        </Block>

        <Block
          direction="column"
          css={css`
            padding: 0px 10px 15px 10px;
          `}
        >
          <Text>stan Twojego konta wynosi: </Text>
          <Text size="big">
            {Math.floor(Math.random() * 100000) + 1 + " zł"}
          </Text>
        </Block>

        <Block>
          <Text>ostatnie operacje:</Text>
        </Block>
      </LoggedFrame>
    </Block>
  );
};

// useEffect(() => {
//   const fetchData = () => {
//     get(child(getData, `/users`)).then((snapshot) => {
//       const fetched = snapshot.val();
//       console.log(fetched);
//       setUserData(fetched);
//     });
//   };
//   fetchData();
//   console.log(userData);
// }, []);

// const [userData, setUserData] = useState<getUserDataProps[]>([]);
// const dbRef = ref(db);
// const dupa = async () => {
//   await onAuthStateChanged(auth, (user) => {
//     if (user) {
//       const uid = user.uid;
//       get(child(dbRef, `/users/${uid}`)).then((snapshot) => {
//         // if (snapshot.exists()) {
//         const updateUserData = () => {
//           setUserData(snapshot.val());
//           console.log(userData);
//         };
//         updateUserData();
//         // } else {
//         //   console.log("no data");
//         // }
//       });
//     }
//   });
// };
// useEffect(() => {
//   dupa();
// }, [userData.uid]);

// const [userData, setUserData] = useState<getUserDataProps[]>([]);
// const dbRef = ref(db);

// const dupa = async () => {
//   await onAuthStateChanged(auth, (user) => {
//     if (user) {
//       const uid = user.uid;
//       get(child(dbRef, `/users/${uid}`)).then((snapshot) => {
//         // if (snapshot.exists()) {
//         const userData = snapshot.val();
//         console.log(userData);

//         // } else {
//         //   console.log("no data");
//         // }
//       });
//     }
//   });
// };

// setUserData({
//   avatar: snapshot.val().avatar,
//   email: snapshot.val().email,
//   login: snapshot.val().login,
//   name: snapshot.val().name,
//   surname: snapshot.val().surname,
//   phonenumber: snapshot.val().phonenumber,
//   uid: snapshot.val().uid,
//   });

// const FetchData = () => {
//   const [userData, setUserData] = useState<getUserDataProps[]>([]);
//   const [userId, setUserId] = useState("");
//   const getData = ref(db);

//   const getId = async () => {
//     await onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUserId(user.uid);
//         console.log(userId);
//       }
//     });
//   };
//   useEffect(() => {
//     getId();
//     const fetchData = async () => {
//       await get(child(getData, `/users/`)).then((snapshot) => {
//         const fetched = snapshot.val();
//         console.log(fetched);
//         setUserData(fetched);
//       });
//     };
//     fetchData();
//     console.log(userData);
//   }, []);
// };
